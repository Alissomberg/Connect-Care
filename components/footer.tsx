import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary-foreground rounded-full flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-primary">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold">ConnectCare</span>
            </div>
            <p className="text-primary-foreground/90 max-w-md">
              Conectando cuidado com segurança. Resolvendo um problema preocupante, conectando cuidadores a famílias.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-primary-foreground/90 hover:text-primary-foreground transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contatos"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Contatos
                </Link>
              </li>
            </ul>
          </div>

          {/* Acesso */}
          <div>
            <h3 className="font-bold text-lg mb-4">Acesso</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/cuidador/login"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Login Cuidador
                </Link>
              </li>
              <li>
                <Link
                  href="/familiar/login"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  Login Familiar
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/80">
          <p>&copy; 2025 ConnectCare. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
