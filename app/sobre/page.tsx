import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Target, Eye, Award } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Sobre Nós</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Somos uma plataforma dedicada a conectar famílias que precisam de cuidadores profissionais com cuidadores
            qualificados e confiáveis.
          </p>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">Nossa História</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  O ConnectCare nasceu da necessidade de resolver um problema crítico: a dificuldade de famílias
                  encontrarem cuidadores confiáveis e qualificados para seus entes queridos.
                </p>
                <p>
                  Com mais de 33 milhões de idosos no Brasil e 1 em cada 3 sofrendo algum tipo de abandono ou
                  negligência, percebemos que era urgente criar uma solução que conectasse cuidado com segurança.
                </p>
                <p>
                  Hoje, somos uma ponte entre mais de 840 mil cuidadores profissionais e milhares de famílias que buscam
                  tranquilidade e qualidade de vida para seus familiares.
                </p>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden">
              <img src="/equipe-de-cuidadores-diversos-e-felizes.jpg" alt="Equipe ConnectCare" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Missão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Conectar famílias e cuidadores profissionais de forma segura, proporcionando cuidado de qualidade e
                tranquilidade para todos os envolvidos.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nossa Visão</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a principal plataforma de conexão entre cuidadores e famílias no Brasil, transformando o cuidado de
                idosos em uma experiência segura e humanizada.
              </p>
            </div>

            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">Nossos Valores</h3>
              <ul className="text-muted-foreground leading-relaxed space-y-2">
                <li>• Segurança e confiança</li>
                <li>• Profissionalismo</li>
                <li>• Empatia e cuidado</li>
                <li>• Transparência</li>
                <li>• Inovação</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">ConnectCare em Números</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">+840k</div>
              <p className="text-lg text-muted-foreground">Cuidadores Cadastrados</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">+10k</div>
              <p className="text-lg text-muted-foreground">Famílias Atendidas</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <p className="text-lg text-muted-foreground">Taxa de Satisfação</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <p className="text-lg text-muted-foreground">Suporte Disponível</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
