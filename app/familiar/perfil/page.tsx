"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, FileText, User, MessageSquare, Search, Mail, Phone, MapPin, Calendar, Edit } from "lucide-react"
import Link from "next/link"

const menuItems = [
  { href: "/familiar/feed", icon: Search, label: "Buscar" },
  { href: "/familiar/solicitacoes", icon: FileText, label: "Solicitações" },
  { href: "/familiar/cuidadores", icon: Users, label: "Cuidadores" },
  { href: "/familiar/perfil", icon: User, label: "Perfil", active: true },
  { href: "/familiar/mensagens", icon: MessageSquare, label: "Mensagens" },
]

const statsContent = (
  <div className="bg-primary text-primary-foreground rounded-2xl p-6">
    <h3 className="font-bold text-lg mb-2">Precisa de um cuidador?</h3>
    <p className="text-sm mb-4 text-primary-foreground/90">
      Publique uma solicitação e receba propostas de cuidadores qualificados.
    </p>
    <Button
      asChild
      className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full text-xs font-medium px-3 py-2"
    >
      <Link href="/familiar/nova-solicitacao" className="flex items-center justify-center">
        <span className="whitespace-nowrap">Publicar Solicitação</span>
      </Link>
    </Button>
  </div>
)

export default function PerfilFamiliarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-secondary/20">
      <div className="flex flex-1">
        <FeedSidebar menuItems={menuItems} statsContent={statsContent} />

        <div className="flex-1 lg:ml-64">
          <div className="fixed top-0 right-0 left-0 lg:left-64 bg-card border-b border-border z-30">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                    <AvatarFallback className="bg-primary text-primary-foreground">MS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="font-bold text-foreground">Maria Silva</h2>
                    <p className="text-sm text-muted-foreground">Familiar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-20 py-8 pb-24 lg:pb-8">
            <div className="container mx-auto px-4 max-w-4xl">
              <main>
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h1 className="text-4xl font-bold mb-2 text-foreground">Meu Perfil</h1>
                    <p className="text-muted-foreground">Visualize e gerencie suas informações pessoais</p>
                  </div>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar Perfil
                  </Button>
                </div>

                {/* Card Principal do Perfil */}
                <Card className="p-8 rounded-3xl border-border mb-6">
                  <div className="flex flex-col md:flex-row gap-6 items-start">
                    <Avatar className="w-32 h-32">
                      <AvatarImage src="/placeholder.svg?height=128&width=128" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-4xl">MS</AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h2 className="text-3xl font-bold text-foreground mb-2">Maria Silva</h2>
                          <Badge className="bg-primary/10 text-primary rounded-full">Familiar</Badge>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Mail className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xs">Email</p>
                            <p className="text-sm font-medium text-foreground">maria.silva@email.com</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Phone className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xs">Telefone</p>
                            <p className="text-sm font-medium text-foreground">(11) 98765-4321</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-muted-foreground">
                          <MapPin className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xs">Localização</p>
                            <p className="text-sm font-medium text-foreground">São Paulo, SP</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-3 text-muted-foreground">
                          <Calendar className="w-5 h-5 text-primary" />
                          <div>
                            <p className="text-xs">Membro desde</p>
                            <p className="text-sm font-medium text-foreground">Janeiro 2024</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Estatísticas */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card className="p-6 rounded-3xl border-border text-center">
                    <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-foreground mb-1">3</p>
                    <p className="text-sm text-muted-foreground">Solicitações Ativas</p>
                  </Card>

                  <Card className="p-6 rounded-3xl border-border text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-foreground mb-1">12</p>
                    <p className="text-sm text-muted-foreground">Cuidadores Contatados</p>
                  </Card>

                  <Card className="p-6 rounded-3xl border-border text-center">
                    <MessageSquare className="w-8 h-8 text-primary mx-auto mb-2" />
                    <p className="text-3xl font-bold text-foreground mb-1">8</p>
                    <p className="text-sm text-muted-foreground">Conversas Ativas</p>
                  </Card>
                </div>
              </main>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}
