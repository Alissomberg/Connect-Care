"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
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
  Briefcase,
  MessageSquare,
  CheckCircle2,
  XCircle,
  Loader2,
  Users,
} from "lucide-react"

const menuItems = [
  { href: "/cuidador/feed", icon: Briefcase, label: "Oportunidades" },
  { href: "/cuidador/propostas", icon: Heart, label: "Propostas", active: true },
  { href: "/cuidador/familiares", icon: Users, label: "Familiares" },
  { href: "/cuidador/perfil", icon: User, label: "Perfil" },
]

const propostas = [
  {
    id: 1,
    nomeFamiliar: "Maria Silva",
    nomePaciente: "João Silva",
    idade: 78,
    localizacao: "Jardins, São Paulo - SP",
    condicoes: ["Alzheimer", "Hipertensão"],
    horario: "Segunda a Sexta, 8h às 18h",
    valorHora: "R$ 35/hora",
    status: "pendente",
    dataEnvio: "Há 2 horas",
    mensagemProposta: "Tenho 8 anos de experiência com pacientes com Alzheimer. Estou disponível imediatamente.",
  },
  {
    id: 2,
    nomeFamiliar: "Carlos Oliveira",
    nomePaciente: "Ana Oliveira",
    idade: 82,
    localizacao: "Vila Mariana, São Paulo - SP",
    condicoes: ["Mobilidade reduzida", "Diabetes"],
    horario: "Período integral com folgas",
    valorHora: "R$ 40/hora",
    status: "aceita",
    dataEnvio: "Há 1 dia",
    mensagemProposta: "Possuo experiência com cuidados de mobilidade reduzida e controle de diabetes.",
  },
  {
    id: 3,
    nomeFamiliar: "Paulo Santos",
    nomePaciente: "Helena Santos",
    idade: 80,
    localizacao: "Moema, São Paulo - SP",
    condicoes: ["Insônia", "Cardiopatia"],
    horario: "Período noturno - 20h às 8h",
    valorHora: "R$ 45/hora",
    status: "recusada",
    dataEnvio: "Há 3 dias",
    mensagemProposta: "Tenho disponibilidade para plantões noturnos e experiência com administração de medicamentos.",
  },
]

export default function PropostasPage() {
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
            <div className="container mx-auto px-4">
              <main>
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-2 text-foreground">Minhas Propostas</h1>
                  <p className="text-muted-foreground">Acompanhe o status das suas propostas enviadas</p>
                </div>

                <div className="space-y-6">
                  {propostas.map((proposta) => (
                    <Card key={proposta.id} className="p-6 rounded-3xl border-border">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="w-14 h-14">
                            <AvatarImage src={`/.jpg?height=56&width=56&query=${proposta.nomeFamiliar}`} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {proposta.nomeFamiliar
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="font-bold text-xl text-foreground mb-1">
                              Cuidado para {proposta.nomePaciente}
                            </h3>
                            <p className="text-sm text-muted-foreground">Solicitado por {proposta.nomeFamiliar}</p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            proposta.status === "aceita"
                              ? "default"
                              : proposta.status === "recusada"
                                ? "destructive"
                                : "secondary"
                          }
                          className="rounded-full flex items-center gap-1"
                        >
                          {proposta.status === "aceita" && <CheckCircle2 className="w-3 h-3" />}
                          {proposta.status === "recusada" && <XCircle className="w-3 h-3" />}
                          {proposta.status === "pendente" && <Loader2 className="w-3 h-3 animate-spin" />}
                          {proposta.status === "aceita"
                            ? "Aceita"
                            : proposta.status === "recusada"
                              ? "Recusada"
                              : "Pendente"}
                        </Badge>
                      </div>

                      <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                        <p className="text-sm font-medium text-muted-foreground mb-1">Sua mensagem:</p>
                        <p className="text-foreground">{proposta.mensagemProposta}</p>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {proposta.condicoes.map((condicao, index) => (
                          <Badge key={index} variant="outline" className="rounded-full">
                            {condicao}
                          </Badge>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="w-4 h-4 text-primary" />
                          <span className="text-sm">{proposta.localizacao}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <User className="w-4 h-4 text-primary" />
                          <span className="text-sm">{proposta.idade} anos</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Clock className="w-4 h-4 text-primary" />
                          <span className="text-sm">{proposta.horario}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="text-sm font-semibold text-primary">{proposta.valorHora}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4" />
                          Enviada {proposta.dataEnvio}
                        </div>
                        {proposta.status === "aceita" && (
                          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Conversar
                          </Button>
                        )}
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
