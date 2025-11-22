import { NextResponse } from "next/server"
import pool from "@/lib/db"
import { withAuth, type AuthenticatedRequest } from "@/lib/middleware"

// GET - Obter perfil do usuário autenticado
async function handleGet(req: AuthenticatedRequest) {
  try {
    const user = req.user!

    let tableName = ""
    if (user.tipo === "familiar") tableName = "Perfil_familiar"
    else if (user.tipo === "cuidador") tableName = "Perfil_cuidador"
    else tableName = "Perfil_administrador"

    const [users] = await pool.query(`SELECT * FROM ${tableName} WHERE id = ?`, [user.id])

    if (!Array.isArray(users) || users.length === 0) {
      return NextResponse.json({ error: "Usuário não encontrado" }, { status: 404 })
    }

    const perfil = users[0] as any
    delete perfil.senha // Não retornar a senha

    return NextResponse.json({ perfil })
  } catch (error) {
    console.error("[v0] Erro ao buscar perfil:", error)
    return NextResponse.json({ error: "Erro ao buscar perfil" }, { status: 500 })
  }
}

// PUT - Atualizar perfil
async function handlePut(req: AuthenticatedRequest) {
  try {
    const user = req.user!
    const body = await req.json()

    let tableName = ""
    let allowedFields: string[] = []

    if (user.tipo === "familiar") {
      tableName = "Perfil_familiar"
      allowedFields = ["nome", "telefone", "cidade", "uf"]
    } else if (user.tipo === "cuidador") {
      tableName = "Perfil_cuidador"
      allowedFields = ["nome", "formacao", "experiencia", "disponibilidade", "localizacao"]
    }

    // Construir query de atualização dinamicamente
    const updates: string[] = []
    const values: any[] = []

    for (const field of allowedFields) {
      if (body[field] !== undefined) {
        updates.push(`${field} = ?`)
        values.push(body[field])
      }
    }

    if (updates.length === 0) {
      return NextResponse.json({ error: "Nenhum campo para atualizar" }, { status: 400 })
    }

    values.push(user.id)

    await pool.query(`UPDATE ${tableName} SET ${updates.join(", ")} WHERE id = ?`, values)

    return NextResponse.json({
      message: "Perfil atualizado com sucesso",
    })
  } catch (error) {
    console.error("[v0] Erro ao atualizar perfil:", error)
    return NextResponse.json({ error: "Erro ao atualizar perfil" }, { status: 500 })
  }
}

export const GET = withAuth(handleGet)
export const PUT = withAuth(handlePut)
