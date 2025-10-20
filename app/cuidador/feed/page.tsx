"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Heart,
  MapPin,
  Clock,
  DollarSign,
  Calendar,
  User,
  Settings,
  LogOut,
  Briefcase,
  MessageSquare,
  Bell,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Dados mockados de oportunidades
const oportunidades = [
  {
    id: 1,
    nomeFamiliar: "Maria Silva",
    nomePaciente: "João Silva",
    idade: 78,
    localizacao: "Jardins, São Paulo - SP",
    descricao:
      "Procuro cuidador experiente para meu pai que tem Alzheimer. Necessário conhecimento em cuidados com demência.",
    condicoes: ["Alzheimer", "Hipertensão"],
    horario: "Segunda a Sexta, 8h às 18h",
    valorHora: "R$ 35/hora",
    urgencia: "alta",
    dataPublicacao: "Há 2 horas",
  },
  {
    id: 2,
    nomeFamiliar: "Carlos Oliveira",
    nomePaciente: "Ana Oliveira",
    idade: 82,
    localizacao: "Vila Mariana, São Paulo - SP",
    descricao: "Busco cuidadora para minha mãe que precisa de auxílio nas atividades diárias e companhia.",
    condicoes: ["Mobilidade reduzida", "Diabetes"],
    horario: "Período integral com folgas",
    valorHora: "R$ 40/hora",
    urgencia: "media",
    dataPublicacao: "Há 5 horas",
  },
  {
    id: 3,
    nomeFamiliar: "Fernanda Costa",
    nomePaciente: "Roberto Costa",
    idade: 75,
    localizacao: "Pinheiros, São Paulo - SP",
    descricao: "Preciso de cuidador para acompanhar meu pai em consultas médicas e fisioterapia.",
    condicoes: ["Pós-operatório", "Fisioterapia"],
    horario: "Meio período - Manhãs",
    valorHora: "R$ 38/hora",
    urgencia: "baixa",
    dataPublicacao: "Há 1 dia",
  },
  {
    id: 4,
    nomeFamiliar: "Paulo Santos",
    nomePaciente: "Helena Santos",
    idade: 80,
    localizacao: "Moema, São Paulo - SP",
    descricao: "Cuidadora para minha avó que precisa de cuidados noturnos e administração de medicamentos.",
    condicoes: ["Insônia", "Cardiopatia"],
    horario: "Período noturno - 20h às 8h",
    valorHora: "R$ 45/hora",
    urgencia: "alta",
    dataPublicacao: "Há 3 horas",
  },
]

export default function CuidadorFeedPage() {
  const [filtroUrgencia, setFiltroUrgencia] = useState<string>("todas")

  const oportunidadesFiltradas =
    filtroUrgencia === "todas" ? oportunidades : oportunidades.filter((op) => op.urgencia === filtroUrgencia)

  return (
    <div className="min-h-screen flex flex-col bg-secondary/20">
      <Header />

      {/* Top Bar com perfil */}
      <div className="bg-card border-b border-border">
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

            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <MessageSquare className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full" asChild>
                <Link href="/cuidador/perfil">
                  <Settings className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              <Card className="p-6 rounded-3xl border-border">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-4 text-foreground">Menu</h3>
                    <nav className="space-y-2">
                      <Link
                        href="/cuidador/feed"
                        className="flex items-center gap-3 p-3 rounded-xl bg-primary text-primary-foreground font-semibold"
                      >
                        <Briefcase className="w-5 h-5" />
                        Oportunidades
                      </Link>
                      <Link
                        href="/cuidador/minhas-propostas"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary text-foreground"
                      >
                        <Heart className="w-5 h-5" />
                        Minhas Propostas
                      </Link>
                      <Link
                        href="/cuidador/perfil"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary text-foreground"
                      >
                        <User className="w-5 h-5" />
                        Meu Perfil
                      </Link>
                      <Link
                        href="/cuidador/mensagens"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary text-foreground"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Mensagens
                      </Link>
                    </nav>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10"
                      asChild
                    >
                      <Link href="/">
                        <LogOut className="w-5 h-5 mr-3" />
                        Sair
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Stats Card */}
              <Card className="p-6 rounded-3xl border-border mt-6">
                <h3 className="font-bold text-lg mb-4 text-foreground">Suas Estatísticas</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Propostas Enviadas</p>
                    <p className="text-2xl font-bold text-primary">12</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Taxa de Resposta</p>
                    <p className="text-2xl font-bold text-primary">85%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Avaliação</p>
                    <p className="text-2xl font-bold text-primary">4.8 ⭐</p>
                  </div>
                </div>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              {/* Header e Filtros */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2 text-foreground">Oportunidades de Trabalho</h1>
                <p className="text-muted-foreground mb-6">Encontre as melhores oportunidades para você</p>

                {/* Filtros */}
                <div className="flex flex-wrap gap-3">
                  <Button
                    variant={filtroUrgencia === "todas" ? "default" : "outline"}
                    onClick={() => setFiltroUrgencia("todas")}
                    className="rounded-full"
                  >
                    Todas
                  </Button>
                  <Button
                    variant={filtroUrgencia === "alta" ? "default" : "outline"}
                    onClick={() => setFiltroUrgencia("alta")}
                    className="rounded-full"
                  >
                    Urgente
                  </Button>
                  <Button
                    variant={filtroUrgencia === "media" ? "default" : "outline"}
                    onClick={() => setFiltroUrgencia("media")}
                    className="rounded-full"
                  >
                    Média Urgência
                  </Button>
                  <Button
                    variant={filtroUrgencia === "baixa" ? "default" : "outline"}
                    onClick={() => setFiltroUrgencia("baixa")}
                    className="rounded-full"
                  >
                    Sem Urgência
                  </Button>
                </div>
              </div>

              {/* Lista de Oportunidades */}
              <div className="space-y-6">
                {oportunidadesFiltradas.map((oportunidade) => (
                  <Card
                    key={oportunidade.id}
                    className="p-6 rounded-3xl border-border hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-14 h-14">
                          <AvatarImage src={`/.jpg?height=56&width=56&query=${oportunidade.nomeFamiliar}`} />
                          <AvatarFallback className="bg-primary/10 text-primary">
                            {oportunidade.nomeFamiliar
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-xl text-foreground mb-1">
                            Cuidado para {oportunidade.nomePaciente}
                          </h3>
                          <p className="text-sm text-muted-foreground">Publicado por {oportunidade.nomeFamiliar}</p>
                        </div>
                      </div>
                      <Badge
                        variant={oportunidade.urgencia === "alta" ? "destructive" : "secondary"}
                        className="rounded-full"
                      >
                        {oportunidade.urgencia === "alta"
                          ? "Urgente"
                          : oportunidade.urgencia === "media"
                            ? "Média"
                            : "Normal"}
                      </Badge>
                    </div>

                    <p className="text-foreground mb-4 leading-relaxed">{oportunidade.descricao}</p>

                    {/* Condições */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {oportunidade.condicoes.map((condicao, index) => (
                        <Badge key={index} variant="outline" className="rounded-full">
                          {condicao}
                        </Badge>
                      ))}
                    </div>

                    {/* Detalhes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm">{oportunidade.localizacao}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <User className="w-4 h-4 text-primary" />
                        <span className="text-sm">{oportunidade.idade} anos</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="w-4 h-4 text-primary" />
                        <span className="text-sm">{oportunidade.horario}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <DollarSign className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{oportunidade.valorHora}</span>
                      </div>
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {oportunidade.dataPublicacao}
                      </div>
                      <div className="flex gap-3">
                        <Button variant="outline" className="rounded-full bg-transparent">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Entrar em Contato
                        </Button>
                        <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                          Enviar Proposta
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {oportunidadesFiltradas.length === 0 && (
                <Card className="p-12 rounded-3xl border-border text-center">
                  <Briefcase className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">Nenhuma oportunidade encontrada</h3>
                  <p className="text-muted-foreground">Tente ajustar os filtros para ver mais resultados.</p>
                </Card>
              )}
            </main>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
