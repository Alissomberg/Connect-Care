"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, MessageSquare, Calendar, MapPin, User, Briefcase, Heart, Search } from "lucide-react"
import { useState } from "react"

// Dados mockados de familiares com quem já conversou
const familiares = [
  {
    id: 1,
    nome: "Maria Silva",
    foto: "/placeholder.svg?height=80&width=80",
    localizacao: "Jardins, São Paulo - SP",
    ultimaMensagem: "Obrigada pelo interesse! Quando você pode começar?",
    dataUltimaMensagem: "Há 2 horas",
    status: "ativo",
    paciente: "João Silva",
    idadePaciente: 78,
    condicoes: ["Alzheimer", "Hipertensão"],
  },
  {
    id: 2,
    nome: "Carlos Oliveira",
    foto: "/placeholder.svg?height=80&width=80",
    localizacao: "Vila Mariana, São Paulo - SP",
    ultimaMensagem: "Vou analisar sua proposta e retorno em breve.",
    dataUltimaMensagem: "Há 1 dia",
    status: "pendente",
    paciente: "Ana Oliveira",
    idadePaciente: 82,
    condicoes: ["Mobilidade reduzida", "Diabetes"],
  },
  {
    id: 3,
    nome: "Fernanda Costa",
    foto: "/placeholder.svg?height=80&width=80",
    localizacao: "Pinheiros, São Paulo - SP",
    ultimaMensagem: "Perfeito! Vamos agendar uma entrevista?",
    dataUltimaMensagem: "Há 3 dias",
    status: "ativo",
    paciente: "Roberto Costa",
    idadePaciente: 75,
    condicoes: ["Pós-operatório", "Fisioterapia"],
  },
  {
    id: 4,
    nome: "Paulo Santos",
    foto: "/placeholder.svg?height=80&width=80",
    localizacao: "Moema, São Paulo - SP",
    ultimaMensagem: "Obrigado pelo contato. Já contratamos outro profissional.",
    dataUltimaMensagem: "Há 1 semana",
    status: "finalizado",
    paciente: "Helena Santos",
    idadePaciente: 80,
    condicoes: ["Insônia", "Cardiopatia"],
  },
  {
    id: 5,
    nome: "Juliana Ferreira",
    foto: "/placeholder.svg?height=80&width=80",
    localizacao: "Itaim Bibi, São Paulo - SP",
    ultimaMensagem: "Sua experiência é exatamente o que procuramos!",
    dataUltimaMensagem: "Há 5 dias",
    status: "ativo",
    paciente: "Antônio Ferreira",
    idadePaciente: 85,
    condicoes: ["Parkinson", "AVC"],
  },
]

export default function CuidadorFamiliaresPage() {
  const [busca, setBusca] = useState("")
  const [filtroStatus, setFiltroStatus] = useState<string>("todos")

  const familiaresFiltrados = familiares.filter((familiar) => {
    const matchBusca =
      busca === "" ||
      familiar.nome.toLowerCase().includes(busca.toLowerCase()) ||
      familiar.paciente.toLowerCase().includes(busca.toLowerCase())

    const matchStatus = filtroStatus === "todos" || familiar.status === filtroStatus

    return matchBusca && matchStatus
  })

  const menuItems = [
    { href: "/cuidador/feed", icon: Briefcase, label: "Oportunidades" },
    { href: "/cuidador/propostas", icon: Heart, label: "Propostas" },
    { href: "/cuidador/familiares", icon: Users, label: "Familiares", active: true },
    { href: "/cuidador/perfil", icon: User, label: "Perfil" },
  ]

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
            <div className="container mx-auto px-4 max-w-5xl">
              <main>
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-2 text-foreground">Familiares</h1>
                  <p className="text-muted-foreground mb-6">Histórico de conversas com familiares</p>

                  <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1 relative">
                      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Buscar por nome do familiar ou paciente..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="pl-12 rounded-full h-12"
                      />
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 mb-6">
                    <Button
                      variant={filtroStatus === "todos" ? "default" : "outline"}
                      onClick={() => setFiltroStatus("todos")}
                      className="rounded-full"
                    >
                      Todos
                    </Button>
                    <Button
                      variant={filtroStatus === "ativo" ? "default" : "outline"}
                      onClick={() => setFiltroStatus("ativo")}
                      className="rounded-full"
                    >
                      Ativos
                    </Button>
                    <Button
                      variant={filtroStatus === "pendente" ? "default" : "outline"}
                      onClick={() => setFiltroStatus("pendente")}
                      className="rounded-full"
                    >
                      Pendentes
                    </Button>
                    <Button
                      variant={filtroStatus === "finalizado" ? "default" : "outline"}
                      onClick={() => setFiltroStatus("finalizado")}
                      className="rounded-full"
                    >
                      Finalizados
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {familiaresFiltrados.map((familiar) => (
                    <Card key={familiar.id} className="p-6 rounded-3xl border-border hover:shadow-lg transition-shadow">
                      <div className="flex flex-col md:flex-row gap-6">
                        <Avatar className="w-20 h-20">
                          <AvatarImage src={familiar.foto || "/placeholder.svg"} />
                          <AvatarFallback className="bg-primary/10 text-primary text-xl">
                            {familiar.nome
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="font-bold text-xl text-foreground mb-1">{familiar.nome}</h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                Paciente: {familiar.paciente}, {familiar.idadePaciente} anos
                              </p>
                              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                <MapPin className="w-4 h-4 text-primary" />
                                <span>{familiar.localizacao}</span>
                              </div>
                            </div>
                            <Badge
                              variant={
                                familiar.status === "ativo"
                                  ? "default"
                                  : familiar.status === "pendente"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="rounded-full"
                            >
                              {familiar.status === "ativo"
                                ? "Ativo"
                                : familiar.status === "pendente"
                                  ? "Pendente"
                                  : "Finalizado"}
                            </Badge>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {familiar.condicoes.map((condicao, index) => (
                              <Badge key={index} variant="outline" className="rounded-full text-xs">
                                {condicao}
                              </Badge>
                            ))}
                          </div>

                          <div className="bg-secondary/50 rounded-2xl p-4 mb-4">
                            <p className="text-sm text-foreground italic">"{familiar.ultimaMensagem}"</p>
                            <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                              <Calendar className="w-3 h-3" />
                              {familiar.dataUltimaMensagem}
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <Button variant="outline" className="flex-1 rounded-full bg-transparent">
                              Ver Histórico
                            </Button>
                            <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                              <MessageSquare className="w-4 h-4 mr-2" />
                              Continuar Conversa
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                {familiaresFiltrados.length === 0 && (
                  <Card className="p-12 rounded-3xl border-border text-center">
                    <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                    <h3 className="text-xl font-bold mb-2 text-foreground">Nenhum familiar encontrado</h3>
                    <p className="text-muted-foreground">
                      Tente ajustar sua busca ou filtros para ver mais resultados.
                    </p>
                  </Card>
                )}
              </main>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  )
}
