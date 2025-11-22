"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, MapPin, Clock, DollarSign, User, FileText, MessageSquare, Search, Eye } from "lucide-react"
import Link from "next/link"

const menuItems = [
  { href: "/familiar/feed", icon: Search, label: "Buscar" },
  { href: "/familiar/solicitacoes", icon: FileText, label: "Solicitações", active: true },
  { href: "/familiar/cuidadores", icon: Users, label: "Cuidadores" },
  { href: "/familiar/perfil", icon: User, label: "Perfil" },
  { href: "/familiar/mensagens", icon: MessageSquare, label: "Mensagens" },
]

const solicitacoes = [
  {
    id: 1,
    nomePaciente: "João Silva",
    idade: 78,
    localizacao: "Jardins, São Paulo - SP",
    descricao:
      "Procuro cuidador experiente para meu pai que tem Alzheimer. Necessário conhecimento em cuidados com demência.",
    condicoes: ["Alzheimer", "Hipertensão"],
    horario: "Segunda a Sexta, 8h às 18h",
    valorHora: "R$ 35/hora",
    status: "ativa",
    dataPublicacao: "Há 2 horas",
    propostas: 5,
  },
  {
    id: 2,
    nomePaciente: "Ana Silva",
    idade: 82,
    localizacao: "Vila Mariana, São Paulo - SP",
    descricao: "Busco cuidadora para minha mãe que precisa de auxílio nas atividades diárias e companhia.",
    condicoes: ["Mobilidade reduzida", "Diabetes"],
    horario: "Período integral com folgas",
    valorHora: "R$ 40/hora",
    status: "finalizada",
    dataPublicacao: "Há 5 dias",
    propostas: 12,
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

export default function SolicitacoesPage() {
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
                  <h1 className="text-4xl font-bold mb-2 text-foreground">Minhas Solicitações</h1>
                  <p className="text-muted-foreground">Gerencie suas solicitações de cuidadores</p>
                </div>

                <div className="space-y-6">
                  {solicitacoes.map((solicitacao) => (
                    <Card key={solicitacao.id} className="p-6 rounded-3xl border-border">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-xl text-foreground mb-1">
                            Cuidado para {solicitacao.nomePaciente}
                          </h3>
                          <p className="text-sm text-muted-foreground">Publicada {solicitacao.dataPublicacao}</p>
                        </div>
                        <Badge
                          variant={solicitacao.status === "ativa" ? "default" : "secondary"}
                          className="rounded-full"
                        >
                          {solicitacao.status === "ativa" ? "Ativa" : "Finalizada"}
                        </Badge>
                      </div>

                      <p className="text-foreground mb-4 leading-relaxed">{solicitacao.descricao}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {solicitacao.condicoes.map((condicao, index) => (
                          <Badge key={index} variant="outline" className="rounded-full">
                            {condicao}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm">{solicitacao.localizacao}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="w-4 h-4 text-primary" />
                          <span className="text-sm">{solicitacao.idade} anos</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{solicitacao.horario}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{solicitacao.valorHora}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="rounded-full">
                            {solicitacao.propostas} propostas recebidas
                          </Badge>
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" className="rounded-full bg-transparent">
                            <Eye className="w-4 h-4 mr-2" />
                            Ver Propostas
                          </Button>
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
