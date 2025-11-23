import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Listar propostas
async function handleGet(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const { searchParams } = new URL(req.url)
    const status = searchParams.get("status")

    let query = ""
    let params: any[] = []

    if (user.tipo === "familiar") {
      query = `
        SELECT sp.*, c.nome as nome_cuidador, c.formacao, c.experiencia
        FROM Solicitacao_Proposta sp
        JOIN Perfil_cuidador c ON sp.id_remetente = c.id
        WHERE sp.id_destinatario = ? AND sp.tipo_destinatario = 'familiar'
      `
      params = [user.id]
    } else if (user.tipo === "cuidador") {
      query = `
        SELECT sp.*, f.nome as nome_familiar, f.cidade, f.uf
        FROM Solicitacao_Proposta sp
        JOIN Perfil_familiar f ON sp.id_destinatario = f.id
        WHERE sp.id_remetente = ? AND sp.tipo_remetente = 'cuidador'
      `
      params = [user.id]
    }

    if (status) {
      query += " AND sp.status = ?"
      params.push(status)
    }

    query += " ORDER BY sp.data_envio DESC"

    const [propostas] = await pool.query(query, params)

    return NextResponse.json({ propostas })
  } catch (error) {
    console.error("[v0] Erro ao buscar propostas:", error)
    return NextResponse.json({ error: "Erro ao buscar propostas" }, { status: 500 })
  }
}

// POST - Criar proposta/solicitação
async function handlePost(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const body = await req.json()
    const { id_destinatario, tipo_destinatario, descricao, horario, valor } = body

    if (!id_destinatario || !tipo_destinatario || !descricao) {
      return NextResponse.json({ error: "Destinatário, tipo e descrição são obrigatórios" }, { status: 400 })
    }

    const [result] = await pool.query(
      `INSERT INTO Solicitacao_Proposta 
       (id_remetente, tipo_remetente, id_destinatario, tipo_destinatario, descricao, horario, valor, status) 
       VALUES (?, ?, ?, ?, ?, ?, ?, 'pendente')`,
      [user.id, user.tipo, id_destinatario, tipo_destinatario, descricao, horario, valor],
    )

    return NextResponse.json(
      {
        message: "Proposta enviada com sucesso",
        id: (result as any).insertId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Erro ao criar proposta:", error)
    return NextResponse.json({ error: "Erro ao criar proposta" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet, ["familiar", "cuidador"])
export const POST = withAuth(handlePost, ["familiar", "cuidador"])
