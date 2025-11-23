import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Estatísticas da plataforma (admin apenas)
async function handleGet(req: AuthenticatedRequest) {
  try {
    // Contar usuários
    const [familiares] = await pool.query("SELECT COUNT(*) as total FROM Perfil_familiar")
    const [cuidadores] = await pool.query("SELECT COUNT(*) as total FROM Perfil_cuidador")

    // Contar propostas por status
    const [propostas] = await pool.query(`
      SELECT status, COUNT(*) as total 
      FROM Solicitacao_Proposta 
      GROUP BY status
    `)

    // Contar agendamentos por status
    const [agendamentos] = await pool.query(`
      SELECT status, COUNT(*) as total 
      FROM Agendamento_servico 
      GROUP BY status
    `)

    // Contar pagamentos por status
    const [pagamentos] = await pool.query(`
      SELECT status, COUNT(*) as total 
      FROM Pagamento 
      GROUP BY status
    `)

    // Média de avaliações
    const [avaliacoes] = await pool.query(`
      SELECT AVG(nota) as media, COUNT(*) as total 
      FROM Avaliacao
    `)

    // Total de mensagens
    const [mensagens] = await pool.query("SELECT COUNT(*) as total FROM Mensagem")

    return NextResponse.json({
      usuarios: {
        familiares: (familiares as any)[0].total,
        cuidadores: (cuidadores as any)[0].total,
        total: (familiares as any)[0].total + (cuidadores as any)[0].total,
      },
      propostas,
      agendamentos,
      pagamentos,
      avaliacoes: (avaliacoes as any)[0],
      mensagens: (mensagens as any)[0].total,
    })
  } catch (error) {
    console.error("[v0] Erro ao buscar estatísticas:", error)
    return NextResponse.json({ error: "Erro ao buscar estatísticas" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet, ["administrador"])
