import { db } from "@/lib/db";
import { z } from "zod";

// Schema de validação
const schema = z.object({
  nome: z.string(),
  email: z.string().email(),
  senha: z.string(),
  cpf: z.string(),
  telefone: z.string().optional(),
  cidade: z.string().optional(),
  uf: z.string().length(2).optional(),
});

// GET → listar
export async function GET() {
  const [rows] = await db.query("SELECT * FROM Perfil_familiar;");
  return Response.json(rows);
}

// POST → criar
export async function POST(req: Request) {
  const body = await req.json();
  const parsed = schema.safeParse(body);

  if (!parsed.success) {
    return new Response(JSON.stringify(parsed.error), { status: 400 });
  }

  const { nome, email, senha, cpf, telefone, cidade, uf } = parsed.data;

  await db.query(
    `INSERT INTO Perfil_familiar 
    (nome, email, senha, cpf, telefone, cidade, uf)
    VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [nome, email, senha, cpf, telefone, cidade, uf]
  );

  return Response.json({ message: "Perfil criado com sucesso" });
}

// PUT → atualizar
export async function PUT(req: Request) {
  const { id, ...data } = await req.json();

  if (!id) return new Response("ID obrigatório", { status: 400 });

  const fields = Object.keys(data)
    .map((field) => `${field} = ?`)
    .join(", ");

  const values = Object.values(data);

  await db.query(
    `UPDATE Perfil_familiar SET ${fields} WHERE id = ?`,
    [...values, id]
  );

  return Response.json({ message: "Perfil atualizado" });
}

// DELETE → remover
export async function DELETE(req: Request) {
  const { id } = await req.json();

  if (!id) return new Response("ID obrigatório", { status: 400 });

  await db.query("DELETE FROM Perfil_familiar WHERE id = ?", [id]);

  return Response.json({ message: "Perfil deletado" });
}
