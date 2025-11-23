import { type NextRequest, NextResponse } from "next/server"
import pool from "@/lib/db"
import { hashPassword, generateToken } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nome, email, senha, cpf, formacao, experiencia, disponibilidade, localizacao } = body

    // Validação básica
    if (!nome || !email || !senha || !cpf) {
      return NextResponse.json({ error: "Campos obrigatórios não preenchidos" }, { status: 400 })
    }

    // Verificar se o email já existe
    const [existingUsers] = await pool.query("SELECT id FROM Perfil_cuidador WHERE email = ? OR cpf = ?", [email, cpf])

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      return NextResponse.json({ error: "Email ou CPF já cadastrado" }, { status: 409 })
    }

    // Criptografar senha
    const hashedPassword = await hashPassword(senha)

    // Inserir usuário no banco
    const [result] = await pool.query(
      "INSERT INTO Perfil_cuidador (nome, email, senha, cpf, formacao, experiencia, disponibilidade, localizacao) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [nome, email, hashedPassword, cpf, formacao, experiencia, disponibilidade, localizacao],
    )

    const userId = (result as any).insertId

    // Gerar token JWT
    const token = generateToken({ id: userId, email, tipo: "cuidador" })

    return NextResponse.json(
      {
        message: "Cuidador cadastrado com sucesso",
        token,
        user: { id: userId, nome, email, tipo: "cuidador" },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("[v0] Erro ao registrar cuidador:", error)
    return NextResponse.json({ error: "Erro ao cadastrar cuidador" }, { status: 500 })
  }
}
