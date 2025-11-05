import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center p-2">
                <Image
                  src="/logo-connectcare.png"
                  alt="VIRLA"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-2xl font-bold">VIRLA</span>
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
              <li>
                <Link
                  href="/faq"
                  className="text-primary-foreground/90 hover:text-primary-foreground transition-colors"
                >
                  FAQ
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
          <p>&copy; 2025 VIRLA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
