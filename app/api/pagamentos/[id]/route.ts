import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// PUT - Atualizar status do pagamento
async function handlePut(req: AuthenticatedRequest, { params }: { params: { id: string } }) {
  try {
    const body = await req.json()
    const { status } = body
    const pagamentoId = params.id

    if (!status) {
      return NextResponse.json({ error: "Status é obrigatório" }, { status: 400 })
    }

    const validStatuses = ["pendente", "confirmado", "falhou"]
    if (!validStatuses.includes(status)) {
      return NextResponse.json({ error: "Status inválido" }, { status: 400 })
    }

    // Se status for confirmado, registrar data do pagamento
    const dataUpdate = status === "confirmado" ? ", data_pagamento = NOW()" : ""

    await pool.query(`UPDATE Pagamento SET status = ?${dataUpdate} WHERE id = ?`, [status, pagamentoId])

    return NextResponse.json({
      message: "Pagamento atualizado com sucesso",
    })
  } catch (error) {
    console.error("[v0] Erro ao atualizar pagamento:", error)
    return NextResponse.json({ error: "Erro ao atualizar pagamento" }, { status: 500 })
  }
}

export const PUT = withAuth(handlePut, ["familiar", "cuidador"])
