import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Listar mensagens
async function handleGet(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const { searchParams } = new URL(req.url)
    const outroUsuarioId = searchParams.get("outroUsuarioId")
    const outroUsuarioTipo = searchParams.get("outroUsuarioTipo")

    let query = ""
    let params: any[] = []

    if (user.tipo === "familiar") {
      query = `
        SELECT m.*, c.nome as nome_cuidador 
        FROM Mensagem m
        JOIN Perfil_cuidador c ON m.id_cuidador = c.id
        WHERE m.id_familiar = ?
      `
      params = [user.id]

      if (outroUsuarioId && outroUsuarioTipo === "cuidador") {
        query += " AND m.id_cuidador = ?"
        params.push(outroUsuarioId)
      }
    } else if (user.tipo === "cuidador") {
      query = `
        SELECT m.*, f.nome as nome_familiar 
        FROM Mensagem m
        JOIN Perfil_familiar f ON m.id_familiar = f.id
        WHERE m.id_cuidador = ?
      `
      params = [user.id]

      if (outroUsuarioId && outroUsuarioTipo === "familiar") {
        query += " AND m.id_familiar = ?"
        params.push(outroUsuarioId)
      }
    }

    query += " ORDER BY m.data_envio DESC"

    const [mensagens] = await pool.query(query, params)

    return NextResponse.json({ mensagens })
  } catch (error) {
    console.error("[v0] Erro ao buscar mensagens:", error)
    return NextResponse.json({ error: "Erro ao buscar mensagens" }, { status: 500 })
  }
}

// POST - Enviar mensagem
async function handlePost(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const body = await req.json()
    const { conteudo, id_destinatario, tipo_destinatario } = body

    if (!conteudo || !id_destinatario || !tipo_destinatario) {
      return NextResponse.json({ error: "Conteúdo, destinatário e tipo são obrigatórios" }, { status: 400 })
    }

    let id_familiar, id_cuidador

    if (user.tipo === "familiar" && tipo_destinatario === "cuidador") {
      id_familiar = user.id
      id_cuidador = id_destinatario
    } else if (user.tipo === "cuidador" && tipo_destinatario === "familiar") {
      id_cuidador = user.id
      id_familiar = id_destinatario
    } else {
      return NextResponse.json({ error: "Combinação inválida de remetente e destinatário" }, { status: 400 })
    }

    const [result] = await pool.query("INSERT INTO Mensagem (conteudo, id_familiar, id_cuidador) VALUES (?, ?, ?)", [
      conteudo,
      id_familiar,
      id_cuidador,
    ])

    return NextResponse.json(
      {
        message: "Mensagem enviada com sucesso",
        id: (result as any).insertId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Erro ao enviar mensagem:", error)
    return NextResponse.json({ error: "Erro ao enviar mensagem" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet, ["familiar", "cuidador"])
export const POST = withAuth(handlePost, ["familiar", "cuidador"])
