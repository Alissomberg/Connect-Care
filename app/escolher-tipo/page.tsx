import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Heart } from "lucide-react"

export default function EscolherTipoPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary">Como você quer acessar?</h1>
            <p className="text-xl text-muted-foreground">Escolha o tipo de conta que melhor se adequa a você</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Familiar Card */}
            <div className="bg-card p-10 rounded-3xl shadow-xl border-2 border-border hover:border-primary transition-all hover:shadow-2xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-foreground">Sou Familiar</h2>
              <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                Procuro um cuidador profissional e confiável para meu familiar. Quero garantir o melhor cuidado
                possível.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Buscar cuidadores qualificados</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Ver perfis e avaliações</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Contratar com segurança</span>
                </div>
              </div>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full py-6 text-lg"
                >
                  <Link href="/familiar/login">Fazer Login</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full py-6 text-lg bg-transparent"
                >
                  <Link href="/familiar/cadastro">Criar Conta</Link>
                </Button>
              </div>
            </div>

            {/* Cuidador Card */}
            <div className="bg-card p-10 rounded-3xl shadow-xl border-2 border-border hover:border-primary transition-all hover:shadow-2xl">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-center text-foreground">Sou Cuidador</h2>
              <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                Sou um profissional de cuidados e quero encontrar famílias que precisam dos meus serviços.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Criar perfil profissional</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Receber propostas de trabalho</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>Construir sua reputação</span>
                </div>
              </div>
              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full py-6 text-lg"
                >
                  <Link href="/cuidador/login">Fazer Login</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full py-6 text-lg bg-transparent"
                >
                  <Link href="/cuidador/cadastro">Criar Conta</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
