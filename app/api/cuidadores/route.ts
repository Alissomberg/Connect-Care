import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"

// GET - Buscar cuidadores (público ou autenticado)
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)
    const localizacao = searchParams.get("localizacao")
    const disponibilidade = searchParams.get("disponibilidade")
    const formacao = searchParams.get("formacao")
    const limit = Number.parseInt(searchParams.get("limit") || "20")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let query = `
      SELECT c.id, c.nome, c.formacao, c.experiencia, c.disponibilidade, c.localizacao,
             AVG(a.nota) as media_avaliacoes, COUNT(DISTINCT a.id) as total_avaliacoes
      FROM Perfil_cuidador c
      LEFT JOIN Avaliacao a ON c.id = a.id_cuidador
      WHERE 1=1
    `
    const params: any[] = []

    if (localizacao) {
      query += " AND c.localizacao LIKE ?"
      params.push(`%${localizacao}%`)
    }

    if (disponibilidade) {
      query += " AND c.disponibilidade LIKE ?"
      params.push(`%${disponibilidade}%`)
    }

    if (formacao) {
      query += " AND c.formacao LIKE ?"
      params.push(`%${formacao}%`)
    }

    query += " GROUP BY c.id ORDER BY media_avaliacoes DESC, total_avaliacoes DESC LIMIT ? OFFSET ?"
    params.push(limit, offset)

    const [cuidadores] = await pool.query(query, params)

    // Contar total para paginação
    let countQuery = "SELECT COUNT(*) as total FROM Perfil_cuidador WHERE 1=1"
    const countParams: any[] = []

    if (localizacao) {
      countQuery += " AND localizacao LIKE ?"
      countParams.push(`%${localizacao}%`)
    }

    if (disponibilidade) {
      countQuery += " AND disponibilidade LIKE ?"
      countParams.push(`%${disponibilidade}%`)
    }

    if (formacao) {
      countQuery += " AND formacao LIKE ?"
      countParams.push(`%${formacao}%`)
    }

    const [countResult] = await pool.query(countQuery, countParams)
    const total = (countResult as any)[0].total

    return NextResponse.json({
      cuidadores,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    })
  } catch (error) {
    console.error("[v0] Erro ao buscar cuidadores:", error)
    return NextResponse.json({ error: "Erro ao buscar cuidadores" }, { status: 500 })
  }
}
