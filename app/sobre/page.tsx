import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Award, Users, Heart, Shield } from "lucide-react"
import Image from "next/image"

export default function SobrePage() {
  const teamMembers = [
    {
      name: "Fabio",
      role: "CEO - Diretor Executivo",
      image: "/team/fabio.jpg",
    },
    {
      name: "Alissomberg",
      role: "CTO - Diretor de Tecnologia",
      image: "/team/alissomberg.jpg",
    },
    {
      name: "Argeu",
      role: "CO CTO - Co Diretor de Tecnologia",
      image: "/team/argeu.jpg",
    },
    {
      name: "Kauã",
      role: "CMO - Diretor de Marketing",
      image: "/team/kaua.jpg",
    },
    {
      name: "Evelyn",
      role: "CXO - Diretora de Experiência",
      image: "/team/evelyn.jpg",
    },
    {
      name: "Miguel",
      role: "COO - Diretor de Operações",
      image: "/team/miguel.jpg",
    },
    {
      name: "Vitor",
      role: "CDO - Diretor de Design",
      image: "/team/vitor.jpg",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Somos uma plataforma dedicada a conectar famílias que precisam de cuidadores profissionais com cuidadores
            qualificados e confiáveis.
          </p>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 text-primary">Problema</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Idosos */}
            <div className="space-y-4 text-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Idosos: quem mais sofre com a desconexão</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    <strong>33 milhões</strong> no Brasil
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    <strong>1 em cada 3</strong> sofre abandono ou negligência
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    Falta de <strong>cuidadores confiáveis</strong>
                  </span>
                </li>
              </ul>
            </div>

            {/* Famílias */}
            <div className="space-y-4 text-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Famílias: insegurança e desorganização</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    Dificuldade para <strong>encontrar profissionais qualificados</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    Dependência de <strong>grupos informais</strong> e <strong>indicações</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    <strong>Insegurança</strong> ao contratar cuidadores
                  </span>
                </li>
              </ul>
            </div>

            {/* Cuidadores */}
            <div className="space-y-4 text-foreground">
              <div className="flex items-center gap-3 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Cuidadores: falta de oportunidade e visibilidade</h3>
              </div>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    Poucas <strong>oportunidades de trabalho</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    Falta de <strong>visibilidade profissional</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl text-primary">•</span>
                  <span>
                    Dificuldade para <strong>comprovar experiência e confiança</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-8 text-primary">Solução</h2>
          <p className="text-2xl text-center mb-4 text-foreground max-w-4xl mx-auto">
            A <strong className="text-primary">VIRLA</strong> é uma{" "}
            <strong className="text-primary">plataforma web</strong> que conecta{" "}
            <strong className="text-primary">famílias e cuidadores de idosos</strong> de forma{" "}
            <strong className="text-primary">segura, rápida e organizada</strong>.
          </p>
          <p className="text-xl text-center mb-16 text-muted-foreground max-w-4xl mx-auto">
            Nosso sistema centraliza <strong>cadastro, busca, comunicação e agendamento</strong>, tornando o processo
            mais humano e confiável para todos os envolvidos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Plataforma digital</h3>
              <p className="text-muted-foreground">com perfis verificados e avaliações reais.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Busca inteligente</h3>
              <p className="text-muted-foreground">por localização, disponibilidade e especialização.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Chat integrado</h3>
              <p className="text-muted-foreground">para comunicação segura entre família e cuidador.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Agendamento e pagamento online</h3>
              <p className="text-muted-foreground">com suporte ao Pix e boleto.</p>
            </div>

            <div className="bg-card p-6 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-foreground">Ambiente confiável</h3>
              <p className="text-muted-foreground">com histórico de serviços e reputação dos cuidadores.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-6 text-primary">Nossa Equipe</h2>
          <p className="text-xl text-center mb-16 text-muted-foreground max-w-3xl mx-auto">
            Conheça as pessoas dedicadas que tornam a VIRLA possível
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-square relative bg-gray-100">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
