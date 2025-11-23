import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Listar todos os usuários (admin apenas)
async function handleGet(req: AuthenticatedRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const tipo = searchParams.get("tipo")
    const limit = Number.parseInt(searchParams.get("limit") || "50")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    const results: any = {
      familiares: [],
      cuidadores: [],
      total: 0,
    }

    if (!tipo || tipo === "familiar") {
      const [familiares] = await pool.query(
        "SELECT id, nome, email, cpf, telefone, cidade, uf, created_at FROM Perfil_familiar ORDER BY created_at DESC LIMIT ? OFFSET ?",
        [limit, offset],
      )
      results.familiares = familiares
    }

    if (!tipo || tipo === "cuidador") {
      const [cuidadores] = await pool.query(
        "SELECT id, nome, email, cpf, formacao, localizacao, created_at FROM Perfil_cuidador ORDER BY created_at DESC LIMIT ? OFFSET ?",
        [limit, offset],
      )
      results.cuidadores = cuidadores
    }

    // Contar totais
    const [countFamiliares] = await pool.query("SELECT COUNT(*) as total FROM Perfil_familiar")
    const [countCuidadores] = await pool.query("SELECT COUNT(*) as total FROM Perfil_cuidador")

    results.total = (countFamiliares as any)[0].total + (countCuidadores as any)[0].total

    return NextResponse.json(results)
  } catch (error) {
    console.error("[v0] Erro ao listar usuários:", error)
    return NextResponse.json({ error: "Erro ao listar usuários" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet, ["administrador"])
