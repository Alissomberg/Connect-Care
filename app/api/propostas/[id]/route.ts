import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// PUT - Atualizar status da proposta
async function handlePut(req: AuthenticatedRequest, { params }: { params: { id: string } }) {
  try {
    const user = req.user!
    const body = await req.json()
    const { status } = body
    const propostaId = params.id

    if (!status) {
      return NextResponse.json({ error: "Status é obrigatório" }, { status: 400 })
    }

    // Verificar se a proposta existe e se o usuário tem permissão
    const [propostas] = await pool.query("SELECT * FROM Solicitacao_Proposta WHERE id = ?", [propostaId])

    if (!Array.isArray(propostas) || propostas.length === 0) {
      return NextResponse.json({ error: "Proposta não encontrada" }, { status: 404 })
    }

    const proposta = propostas[0] as any

    // Verificar se o usuário é o destinatário da proposta
    if (proposta.id_destinatario !== user.id || proposta.tipo_destinatario !== user.tipo) {
      return NextResponse.json({ error: "Sem permissão para atualizar esta proposta" }, { status: 403 })
    }

    // Atualizar status
    await pool.query("UPDATE Solicitacao_Proposta SET status = ? WHERE id = ?", [status, propostaId])

    return NextResponse.json({
      message: "Proposta atualizada com sucesso",
    })
  } catch (error) {
    console.error("[v0] Erro ao atualizar proposta:", error)
    return NextResponse.json({ error: "Erro ao atualizar proposta" }, { status: 500 })
  }
}

export const PUT = withAuth(handlePut, ["familiar", "cuidador"])
