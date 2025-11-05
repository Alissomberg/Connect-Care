"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MapPin, Star, Briefcase, Award, User, Edit, Phone, Mail, Users } from "lucide-react"

const menuItems = [
  { href: "/cuidador/feed", icon: Briefcase, label: "Oportunidades" },
  { href: "/cuidador/propostas", icon: Heart, label: "Propostas" },
  { href: "/cuidador/familiares", icon: Users, label: "Familiares" },
  { href: "/cuidador/perfil", icon: User, label: "Perfil", active: true },
]

export default function PerfilCuidadorPage() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary/20">
      <div className="flex flex-1">
        <FeedSidebar menuItems={menuItems} />

        <div className="flex-1 lg:ml-64">
          <div className="fixed top-0 right-0 left-0 lg:left-64 bg-card border-b border-border z-30">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback className="bg-primary text-primary-foreground">MC</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-bold text-foreground">Maria Cuidadora</h2>
                    <p className="text-sm text-muted-foreground">Cuidadora Profissional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 py-8 pb-24 lg:pb-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <main>
                <div className="mb-6 flex items-center justify-between">
                  <h1 className="text-4xl font-bold text-foreground">Meu Perfil</h1>
                  <Button className="rounded-full">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                </div>

                <Card className="p-8 rounded-3xl border-border mb-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-4xl">MC</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-3xl font-bold text-foreground mb-2">Maria Cuidadora</h2>
                          <div className="flex items-center gap-4 mb-3">
                            <div className="flex items-center gap-1">
                              <Star className="w-5 h-5 fill-primary text-primary" />
                              <span className="font-bold text-lg">4.9</span>
                              <span className="text-muted-foreground">(47 avaliações)</span>
                            </div>
                            <Badge className="bg-primary text-primary-foreground rounded-full">
                              <Award className="w-3 h-3 mr-1" />
                              Verificada
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <p className="text-foreground leading-relaxed mb-4">
                        Cuidadora experiente com especialização em cuidados com pacientes com Alzheimer. Formação em
                        enfermagem e cursos de atualização constantes. Dedicada a proporcionar o melhor cuidado e
                        qualidade de vida aos pacientes.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="rounded-full">
                          Alzheimer
                        </Badge>
                        <Badge variant="secondary" className="rounded-full">
                          Demência
                        </Badge>
                        <Badge variant="secondary" className="rounded-full">
                          Cuidados Paliativos
                        </Badge>
                        <Badge variant="secondary" className="rounded-full">
                          Enfermagem
                        </Badge>
                      </div>
                    </div>
                  </div>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card className="p-6 rounded-3xl border-border">
                    <h3 className="font-bold text-xl mb-4 text-foreground">Informações Pessoais</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span>Jardins, São Paulo - SP</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>(11) 98765-4321</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>maria.cuidadora@email.com</span>
                      </div>
                      <div className="flex items-center gap-3 text-muted-foreground">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <span>8 anos de experiência</span>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 rounded-3xl border-border">
                    <h3 className="font-bold text-xl mb-4 text-foreground">Estatísticas</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-muted-foreground">Propostas Enviadas</span>
                          <span className="font-bold text-foreground">24</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-muted-foreground">Propostas Aceitas</span>
                          <span className="font-bold text-foreground">18</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4"></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-muted-foreground">Taxa de Sucesso</span>
                          <span className="font-bold text-primary">75%</span>
                        </div>
                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                          <div className="h-full bg-primary w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>

                <Card className="p-6 rounded-3xl border-border">
                  <h3 className="font-bold text-xl mb-4 text-foreground">Formação e Certificações</h3>
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Técnico em Enfermagem</h4>
                        <p className="text-sm text-muted-foreground">SENAC São Paulo - 2015</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Especialização em Cuidados com Alzheimer</h4>
                        <p className="text-sm text-muted-foreground">Hospital Albert Einstein - 2018</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Curso de Primeiros Socorros</h4>
                        <p className="text-sm text-muted-foreground">Cruz Vermelha - 2022</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </main>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}
