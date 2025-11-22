import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"
import { hashPassword, generateToken } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, senha, cpf, telefone, cidade, uf } = body

    // Validação básica
    if (!nome || !email || !senha || !cpf) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Verificar se o email já existe
    const [existingUsers] = await pool.query("SELECT id FROM Perfil_familiar WHERE email = ? OR cpf = ?", [email, cpf])

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      return NextResponse.json({ error: "Email ou CPF já cadastrado" }, { status: 409 })
    }

    // Criptografar senha
    const hashedPassword = await hashPassword(senha)

    // Inserir usuário no banco
    const [result] = await pool.query(
      "INSERT INTO Perfil_familiar (nome, email, senha, cpf, telefone, cidade, uf) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [nome, email, hashedPassword, cpf, telefone, cidade, uf],
    )

    const userId = (result as any).insertId

    // Gerar token JWT
    const token = generateToken({ id: userId, email, tipo: "familiar" })

    return NextResponse.json(
      {
        message: "Familiar cadastrado com sucesso",
        token,
        user: { id: userId, nome, email, tipo: "familiar" },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Erro ao registrar familiar:", error)
    return NextResponse.json({ error: "Erro ao cadastrar familiar" }, { status: 500 })
  }
}
