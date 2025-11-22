import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"

// GET - Buscar cuidador específico por ID
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  try {
    const cuidadorId = params.id

    // Buscar informações do cuidador
    const [cuidadores] = await pool.query(
      `SELECT id, nome, email, cpf, formacao, experiencia, disponibilidade, localizacao
       FROM Perfil_cuidador WHERE id = ?`,
      [cuidadorId],
    )

    if (!Array.isArray(cuidadores) || cuidadores.length === 0) {
      return NextResponse.json({ error: "Cuidador não encontrado" }, { status: 404 })
    }

    const cuidador = cuidadores[0]

    // Buscar avaliações do cuidador
    const [avaliacoes] = await pool.query(
      `SELECT a.nota, a.comentario, a.data_avaliacao, f.nome as nome_familiar
       FROM Avaliacao a
       JOIN Perfil_familiar f ON a.id_familiar = f.id
       WHERE a.id_cuidador = ?
       ORDER BY a.data_avaliacao DESC
       LIMIT 10`,
      [cuidadorId],
    )

    // Calcular média e total de avaliações
    const [stats] = await pool.query(
      `SELECT AVG(nota) as media, COUNT(*) as total
       FROM Avaliacao WHERE id_cuidador = ?`,
      [cuidadorId],
    )

    return NextResponse.json({
      cuidador,
      avaliacoes,
      estatisticas: (stats as any)[0],
    })
  } catch (error) {
    console.error("[v0] Erro ao buscar cuidador:", error)
    return NextResponse.json({ error: "Erro ao buscar cuidador" }, { status: 500 })
  }
}
