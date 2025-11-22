import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Listar avaliações
async function handleGet(req: AuthenticatedRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const id_cuidador = searchParams.get("id_cuidador")
    const id_familiar = searchParams.get("id_familiar")

    let query = "SELECT a.*, f.nome as nome_familiar, c.nome as nome_cuidador FROM Avaliacao a "
    query += "JOIN Perfil_familiar f ON a.id_familiar = f.id "
    query += "JOIN Perfil_cuidador c ON a.id_cuidador = c.id WHERE 1=1 "

    const params: any[] = []

    if (id_cuidador) {
      query += "AND a.id_cuidador = ? "
      params.push(id_cuidador)
    }

    if (id_familiar) {
      query += "AND a.id_familiar = ? "
      params.push(id_familiar)
    }

    query += "ORDER BY a.data_avaliacao DESC"

    const [avaliacoes] = await pool.query(query, params)

    return NextResponse.json({ avaliacoes })
  } catch (error) {
    console.error("[v0] Erro ao buscar avaliações:", error)
    return NextResponse.json({ error: "Erro ao buscar avaliações" }, { status: 500 })
  }
}

// POST - Criar avaliação
async function handlePost(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const body = await req.json()
    const { id_cuidador, nota, comentario } = body

    if (user.tipo !== "familiar") {
      return NextResponse.json({ error: "Apenas familiares podem avaliar" }, { status: 403 })
    }

    if (!id_cuidador || !nota) {
      return NextResponse.json({ error: "Cuidador e nota são obrigatórios" }, { status: 400 })
    }

    if (nota < 1 || nota > 5) {
      return NextResponse.json({ error: "Nota deve estar entre 1 e 5" }, { status: 400 })
    }

    const [result] = await pool.query(
      "INSERT INTO Avaliacao (id_cuidador, id_familiar, nota, comentario) VALUES (?, ?, ?, ?)",
      [id_cuidador, user.id, nota, comentario],
    )

    return NextResponse.json(
      {
        message: "Avaliação criada com sucesso",
        id: (result as any).insertId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Erro ao criar avaliação:", error)
    return NextResponse.json({ error: "Erro ao criar avaliação" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet, ["familiar", "cuidador"])
export const POST = withAuth(handlePost, ["familiar"])
