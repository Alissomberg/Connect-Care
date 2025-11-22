import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Listar agendamentos
async function handleGet(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const { searchParams } = new URL(req.url)
    const status = searchParams.get("status")

    let query = `
      SELECT a.*, sp.descricao, sp.id_remetente, sp.id_destinatario, 
             sp.tipo_remetente, sp.tipo_destinatario
      FROM Agendamento_servico a
      JOIN Solicitacao_Proposta sp ON a.id_proposta = sp.id
      WHERE (sp.id_remetente = ? AND sp.tipo_remetente = ?) 
         OR (sp.id_destinatario = ? AND sp.tipo_destinatario = ?)
    `
    const params = [user.id, user.tipo, user.id, user.tipo]

    if (status) {
      query += " AND a.status = ?"
      params.push(status)
    }

    query += " ORDER BY a.data_inicio DESC"

    const [agendamentos] = await pool.query(query, params)

    return NextResponse.json({ agendamentos })
  } catch (error) {
    console.error("[v0] Erro ao buscar agendamentos:", error)
    return NextResponse.json({ error: "Erro ao buscar agendamentos" }, { status: 500 })
  }
}

// POST - Criar agendamento
async function handlePost(req: AuthenticatedRequest) {
  try {
    const body = await req.json()
    const { id_proposta, data_inicio, dias, valor_total } = body

    if (!id_proposta || !data_inicio || !dias || !valor_total) {
      return NextResponse.json({ error: "Todos os campos são obrigatórios" }, { status: 400 })
    }

    const [result] = await pool.query(
      "INSERT INTO Agendamento_servico (id_proposta, data_inicio, dias, valor_total, status) VALUES (?, ?, ?, ?, 'pendente')",
      [id_proposta, data_inicio, dias, valor_total],
    )

    return NextResponse.json(
      {
        message: "Agendamento criado com sucesso",
        id: (result as any).insertId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Erro ao criar agendamento:", error)
    return NextResponse.json({ error: "Erro ao criar agendamento" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet, ["familiar", "cuidador"])
export const POST = withAuth(handlePost, ["familiar", "cuidador"])
