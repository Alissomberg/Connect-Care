import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Listar pagamentos
async function handleGet(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const { searchParams } = new URL(req.url)
    const status = searchParams.get("status")

    let query = `
      SELECT p.*, a.valor_total, a.data_inicio, sp.descricao
      FROM Pagamento p
      JOIN Agendamento_servico a ON p.id_agendamento = a.id
      JOIN Solicitacao_Proposta sp ON a.id_proposta = sp.id
      WHERE (sp.id_remetente = ? AND sp.tipo_remetente = ?) 
         OR (sp.id_destinatario = ? AND sp.tipo_destinatario = ?)
    `
    const params = [user.id, user.tipo, user.id, user.tipo]

    if (status) {
      query += " AND p.status = ?"
      params.push(status)
    }

    query += " ORDER BY p.created_at DESC"

    const [pagamentos] = await pool.query(query, params)

    return NextResponse.json({ pagamentos })
  } catch (error) {
    console.error("[v0] Erro ao buscar pagamentos:", error)
    return NextResponse.json({ error: "Erro ao buscar pagamentos" }, { status: 500 })
  }
}

// POST - Criar pagamento
async function handlePost(req: AuthenticatedRequest) {
  try {
    const body = await req.json()
    const { id_agendamento, metodo } = body

    if (!id_agendamento || !metodo) {
      return NextResponse.json({ error: "Agendamento e método de pagamento são obrigatórios" }, { status: 400 })
    }

    // Verificar se o agendamento existe
    const [agendamentos] = await pool.query("SELECT * FROM Agendamento_servico WHERE id = ?", [id_agendamento])

    if (!Array.isArray(agendamentos) || agendamentos.length === 0) {
      return NextResponse.json({ error: "Agendamento não encontrado" }, { status: 404 })
    }

    const [result] = await pool.query(
      "INSERT INTO Pagamento (id_agendamento, metodo, status) VALUES (?, ?, 'pendente')",
      [id_agendamento, metodo],
    )

    return NextResponse.json(
      {
        message: "Pagamento criado com sucesso",
        id: (result as any).insertId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Erro ao criar pagamento:", error)
    return NextResponse.json({ error: "Erro ao criar pagamento" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet, ["familiar", "cuidador"])
export const POST = withAuth(handlePost, ["familiar", "cuidador"])
