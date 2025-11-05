"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, Star, Briefcase, User, MessageSquare, Search, FileText, Calendar } from "lucide-react"
import Link from "next/link"

const menuItems = [
  { href: "/familiar/feed", icon: Search, label: "Buscar" },
  { href: "/familiar/solicitacoes", icon: FileText, label: "Solicitações" },
  { href: "/familiar/cuidadores", icon: Users, label: "Cuidadores", active: true },
  { href: "/familiar/perfil", icon: User, label: "Perfil" },
  { href: "/familiar/mensagens", icon: MessageSquare, label: "Mensagens" },
]

const cuidadores = [
  {
    id: 1,
    nome: "Ana Paula Santos",
    avaliacao: 4.9,
    numeroAvaliacoes: 47,
    experiencia: 8,
    localizacao: "Jardins, São Paulo - SP",
    especialidades: ["Alzheimer", "Demência", "Cuidados Paliativos"],
    ultimoContato: "Há 2 dias",
    status: "ativo",
  },
  {
    id: 2,
    nome: "Carlos Eduardo Lima",
    avaliacao: 4.8,
    numeroAvaliacoes: 32,
    experiencia: 5,
    localizacao: "Vila Mariana, São Paulo - SP",
    especialidades: ["Fisioterapia", "Mobilidade Reduzida"],
    ultimoContato: "Há 1 semana",
    status: "inativo",
  },
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

export default function CuidadoresPage() {
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
            <div className="container mx-auto px-4">
              <main>
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-2 text-foreground">Histórico de Cuidadores</h1>
                  <p className="text-muted-foreground">Cuidadores com quem você já conversou</p>
                </div>

                <div className="space-y-6">
                  {cuidadores.map((cuidador) => (
                    <Card key={cuidador.id} className="p-6 rounded-3xl border-border">
                      <div className="flex flex-col md:flex-row gap-6">
                        <div className="flex flex-col items-center md:items-start">
                          <Avatar className="w-24 h-24 mb-3">
                            <AvatarImage src="/placeholder.svg?height=96&width=96" />
                            <AvatarFallback className="bg-primary/10 text-primary text-xl">
                              {cuidador.nome
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <Badge
                            variant={cuidador.status === "ativo" ? "default" : "secondary"}
                            className="rounded-full"
                          >
                            {cuidador.status === "ativo" ? "Ativo" : "Inativo"}
                          </Badge>
                        </div>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-2xl text-foreground mb-1">{cuidador.nome}</h3>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-1">
                                  <Star className="w-4 h-4 fill-primary text-primary" />
                                  <span className="font-semibold text-foreground">{cuidador.avaliacao}</span>
                                  <span>({cuidador.numeroAvaliacoes} avaliações)</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Briefcase className="w-4 h-4 text-primary" />
                                  <span>{cuidador.experiencia} anos de experiência</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {cuidador.especialidades.map((especialidade, index) => (
                              <Badge key={index} variant="secondary" className="rounded-full">
                                {especialidade}
                              </Badge>
                            ))}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <MapPin className="w-4 h-4 text-primary" />
                              <span>{cuidador.localizacao}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4 text-primary" />
                              <span>Último contato: {cuidador.ultimoContato}</span>
                            </div>
                          </div>

                          <div className="flex gap-3 pt-4 border-t border-border">
                            <Button variant="outline" className="flex-1 rounded-full bg-transparent">
                              Ver Perfil
                            </Button>
                            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Conversar
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
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
