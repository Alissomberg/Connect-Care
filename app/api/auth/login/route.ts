import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"
import { verifyPassword, generateToken } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { email, senha, tipo } = body

    if (!email || !senha || !tipo) {
      return NextResponse.json({ error: "Email, senha e tipo são obrigatórios" }, { status: 400 })
    }

    // Determinar a tabela correta
    let tableName = ""
    if (tipo === "familiar") tableName = "Perfil_familiar"
    else if (tipo === "cuidador") tableName = "Perfil_cuidador"
    else if (tipo === "administrador") tableName = "Perfil_administrador"
    else {
      return NextResponse.json({ error: "Tipo de usuário inválido" }, { status: 400 })
    }

    // Buscar usuário
    const [users] = await pool.query(`SELECT id, nome, email, senha FROM ${tableName} WHERE email = ?`, [email])

    if (!Array.isArray(users) || users.length === 0) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 })
    }

    const user = users[0] as any

    // Verificar senha
    const isPasswordValid = await verifyPassword(senha, user.senha)

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Credenciais inválidas" }, { status: 401 })
    }

    // Gerar token
    const token = generateToken({ id: user.id, email: user.email, tipo })

    return NextResponse.json({
      message: "Login realizado com sucesso",
      token,
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
        tipo,
      },
    })
  } catch (error) {
    console.error("[v0] Erro ao fazer login:", error)
    return NextResponse.json({ error: "Erro ao fazer login" }, { status: 500 })
  }
}
