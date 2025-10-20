import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, Shield, Users, Clock } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">ConnectCare</h1>
              <p className="text-2xl md:text-3xl mb-8 bg-accent text-accent-foreground inline-block px-6 py-3 rounded-full font-semibold">
                Conectando cuidado com segurança
              </p>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Resolvendo um problema preocupante, conectando cuidadores profissionais a famílias que precisam de
                cuidado especializado.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-full px-8 text-lg"
              >
                <Link href="/escolher-tipo">Começar Agora</Link>
              </Button>
            </div>

            {/* Hero Images */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/cuidadora-sorrindo-com-idosa.jpg"
                  alt="Cuidadora com idosa"
                  className="rounded-3xl w-full h-64 object-cover"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="/cuidador-ajudando-idoso-feliz.jpg"
                  alt="Cuidador com idoso"
                  className="rounded-3xl w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-5xl font-bold text-primary mb-2">+33</h3>
              <p className="text-xl font-semibold text-foreground">milhões</p>
              <p className="text-muted-foreground mt-2">Idosos no Brasil</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-primary mb-2">1 em 3</h3>
              <p className="text-xl font-semibold text-foreground">Sofre abandono ou negligência</p>
            </div>
            <div>
              <h3 className="text-5xl font-bold text-primary mb-2">+840</h3>
              <p className="text-xl font-semibold text-foreground">mil</p>
              <p className="text-muted-foreground mt-2">Cuidadores</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-primary">
            Por que escolher o ConnectCare?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Cuidado Profissional</h3>
              <p className="text-muted-foreground leading-relaxed">
                Cuidadores qualificados e experientes prontos para oferecer o melhor atendimento.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Segurança Garantida</h3>
              <p className="text-muted-foreground leading-relaxed">
                Verificação completa de antecedentes e referências de todos os cuidadores.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Conexão Fácil</h3>
              <p className="text-muted-foreground leading-relaxed">
                Plataforma intuitiva que conecta famílias e cuidadores de forma simples.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Disponibilidade 24/7</h3>
              <p className="text-muted-foreground leading-relaxed">
                Encontre cuidadores disponíveis a qualquer hora, todos os dias da semana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Pronto para começar?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Junte-se à nossa comunidade e faça parte da solução para o cuidado de idosos no Brasil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 text-lg"
            >
              <Link href="/familiar/cadastro">Sou Familiar</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full px-8 text-lg bg-transparent"
            >
              <Link href="/cuidador/cadastro">Sou Cuidador</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
