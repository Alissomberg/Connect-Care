import { type NextRequest, NextResponse } from "next/server"
import { verifyToken, extractToken, type JWTPayload } from "./auth"

export interface AuthenticatedRequest extends NextRequest {
  user?: JWTPayload
}

// Middleware para verificar autenticação
export function withAuth(
  handler: (req: AuthenticatedRequest) => Promise<NextResponse>,
  allowedTypes?: ("familiar" | "cuidador" | "administrador")[],
) {
  return async (req: NextRequest) => {
    const authHeader = req.headers.get("Authorization")
    const token = extractToken(authHeader)

    if (!token) {
      return NextResponse.json({ error: "Token não fornecido" }, { status: 401 })
    }

    const user = verifyToken(token)

    if (!user) {
      return NextResponse.json({ error: "Token inválido ou expirado" }, { status: 401 })
    }

    // Verificar se o tipo de usuário é permitido
    if (allowedTypes && !allowedTypes.includes(user.tipo)) {
      return NextResponse.json({ error: "Acesso negado" }, { status: 403 })
    }

    const authenticatedReq = req as AuthenticatedRequest
    authenticatedReq.user = user

    return handler(authenticatedReq)
  }
}
