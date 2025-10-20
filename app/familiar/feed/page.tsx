"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import {
  Users,
  MapPin,
  Star,
  Briefcase,
  Award,
  Clock,
  User,
  Settings,
  LogOut,
  MessageSquare,
  Bell,
  Search,
  Plus,
  FileText,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

// Dados mockados de cuidadores
const cuidadores = [
  {
    id: 1,
    nome: "Ana Paula Santos",
    foto: "/placeholder.svg?height=100&width=100",
    avaliacao: 4.9,
    numeroAvaliacoes: 47,
    experiencia: 8,
    localizacao: "Jardins, São Paulo - SP",
    especialidades: ["Alzheimer", "Demência", "Cuidados Paliativos"],
    descricao:
      "Cuidadora experiente com especialização em cuidados com pacientes com Alzheimer. Formação em enfermagem e cursos de atualização constantes.",
    valorHora: "R$ 38/hora",
    disponibilidade: "Imediata",
    verificado: true,
  },
  {
    id: 2,
    nome: "Carlos Eduardo Lima",
    foto: "/placeholder.svg?height=100&width=100",
    avaliacao: 4.8,
    numeroAvaliacoes: 32,
    experiencia: 5,
    localizacao: "Vila Mariana, São Paulo - SP",
    especialidades: ["Fisioterapia", "Mobilidade Reduzida", "Pós-operatório"],
    descricao: "Técnico em enfermagem com experiência em reabilitação e cuidados pós-operatórios. Paciente e dedicado.",
    valorHora: "R$ 35/hora",
    disponibilidade: "A partir de 15/02",
    verificado: true,
  },
  {
    id: 3,
    nome: "Mariana Costa Silva",
    foto: "/placeholder.svg?height=100&width=100",
    avaliacao: 5.0,
    numeroAvaliacoes: 28,
    experiencia: 10,
    localizacao: "Pinheiros, São Paulo - SP",
    especialidades: ["Diabetes", "Hipertensão", "Nutrição"],
    descricao:
      "Enfermeira com 10 anos de experiência em cuidados domiciliares. Especialista em controle de diabetes e hipertensão.",
    valorHora: "R$ 42/hora",
    disponibilidade: "Imediata",
    verificado: true,
  },
  {
    id: 4,
    nome: "Roberto Alves",
    foto: "/placeholder.svg?height=100&width=100",
    avaliacao: 4.7,
    numeroAvaliacoes: 19,
    experiencia: 6,
    localizacao: "Moema, São Paulo - SP",
    especialidades: ["Cuidados Noturnos", "Administração de Medicamentos", "Companhia"],
    descricao: "Cuidador com experiência em plantões noturnos e administração de medicamentos. Responsável e pontual.",
    valorHora: "R$ 40/hora",
    disponibilidade: "Imediata",
    verificado: false,
  },
  {
    id: 5,
    nome: "Juliana Ferreira",
    foto: "/placeholder.svg?height=100&width=100",
    avaliacao: 4.9,
    numeroAvaliacoes: 41,
    experiencia: 7,
    localizacao: "Itaim Bibi, São Paulo - SP",
    especialidades: ["Parkinson", "AVC", "Reabilitação"],
    descricao:
      "Fisioterapeuta e cuidadora especializada em pacientes com Parkinson e sequelas de AVC. Carinhosa e profissional.",
    valorHora: "R$ 45/hora",
    disponibilidade: "A partir de 20/02",
    verificado: true,
  },
]

export default function FamiliarFeedPage() {
  const [busca, setBusca] = useState("")
  const [filtroVerificado, setFiltroVerificado] = useState(false)

  const cuidadoresFiltrados = cuidadores.filter((cuidador) => {
    const matchBusca =
      busca === "" ||
      cuidador.nome.toLowerCase().includes(busca.toLowerCase()) ||
      cuidador.especialidades.some((esp) => esp.toLowerCase().includes(busca.toLowerCase()))

    const matchVerificado = !filtroVerificado || cuidador.verificado

    return matchBusca && matchVerificado
  })

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
                <AvatarFallback className="bg-primary text-primary-foreground">MS</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-bold text-foreground">Maria Silva</h2>
                <p className="text-sm text-muted-foreground">Familiar</p>
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
                <Link href="/familiar/perfil">
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
                        href="/familiar/feed"
                        className="flex items-center gap-3 p-3 rounded-xl bg-primary text-primary-foreground font-semibold"
                      >
                        <Search className="w-5 h-5" />
                        Buscar Cuidadores
                      </Link>
                      <Link
                        href="/familiar/minhas-solicitacoes"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary text-foreground"
                      >
                        <FileText className="w-5 h-5" />
                        Minhas Solicitações
                      </Link>
                      <Link
                        href="/familiar/meus-cuidadores"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary text-foreground"
                      >
                        <Users className="w-5 h-5" />
                        Meus Cuidadores
                      </Link>
                      <Link
                        href="/familiar/perfil"
                        className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary text-foreground"
                      >
                        <User className="w-5 h-5" />
                        Meu Perfil
                      </Link>
                      <Link
                        href="/familiar/mensagens"
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

              {/* Quick Action Card */}
              <Card className="p-6 rounded-3xl border-border mt-6 bg-primary text-primary-foreground">
                <h3 className="font-bold text-lg mb-2">Precisa de um cuidador?</h3>
                <p className="text-sm mb-4 text-primary-foreground/90">
                  Publique uma solicitação e receba propostas de cuidadores qualificados.
                </p>
                <Button
                  asChild
                  className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full"
                >
                  <Link href="/familiar/nova-solicitacao">
                    <Plus className="w-4 h-4 mr-2" />
                    Publicar Solicitação
                  </Link>
                </Button>
              </Card>
            </aside>

            {/* Main Content */}
            <main className="lg:col-span-3">
              {/* Header e Busca */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold mb-2 text-foreground">Encontre o Cuidador Ideal</h1>
                <p className="text-muted-foreground mb-6">
                  Navegue por cuidadores qualificados e encontre o profissional perfeito para seu familiar
                </p>

                {/* Barra de Busca */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <div className="flex-1 relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Buscar por nome ou especialidade..."
                      value={busca}
                      onChange={(e) => setBusca(e.target.value)}
                      className="pl-12 rounded-full h-12"
                    />
                  </div>
                  <Button
                    variant={filtroVerificado ? "default" : "outline"}
                    onClick={() => setFiltroVerificado(!filtroVerificado)}
                    className="rounded-full h-12 px-6"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Apenas Verificados
                  </Button>
                </div>
              </div>

              {/* Lista de Cuidadores */}
              <div className="space-y-6">
                {cuidadoresFiltrados.map((cuidador) => (
                  <Card key={cuidador.id} className="p-6 rounded-3xl border-border hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Avatar e Info Básica */}
                      <div className="flex flex-col items-center md:items-start">
                        <Avatar className="w-24 h-24 mb-3">
                          <AvatarImage src={cuidador.foto || "/placeholder.svg"} />
                          <AvatarFallback className="bg-primary/10 text-primary text-xl">
                            {cuidador.nome
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {cuidador.verificado && (
                          <Badge className="bg-primary text-primary-foreground rounded-full">
                            <Award className="w-3 h-3 mr-1" />
                            Verificado
                          </Badge>
                        )}
                      </div>

                      {/* Informações Principais */}
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
                          <div className="text-right">
                            <p className="text-2xl font-bold text-primary">{cuidador.valorHora}</p>
                            <p className="text-sm text-muted-foreground">por hora</p>
                          </div>
                        </div>

                        <p className="text-foreground mb-4 leading-relaxed">{cuidador.descricao}</p>

                        {/* Especialidades */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cuidador.especialidades.map((especialidade, index) => (
                            <Badge key={index} variant="secondary" className="rounded-full">
                              {especialidade}
                            </Badge>
                          ))}
                        </div>

                        {/* Detalhes Adicionais */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 text-primary" />
                            <span>{cuidador.localizacao}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 text-primary" />
                            <span>Disponibilidade: {cuidador.disponibilidade}</span>
                          </div>
                        </div>

                        {/* Ações */}
                        <div className="flex gap-3 pt-4 border-t border-border">
                          <Button variant="outline" className="flex-1 rounded-full bg-transparent">
                            Ver Perfil Completo
                          </Button>
                          <Button className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground rounded-full">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Entrar em Contato
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {cuidadoresFiltrados.length === 0 && (
                <Card className="p-12 rounded-3xl border-border text-center">
                  <Users className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-xl font-bold mb-2 text-foreground">Nenhum cuidador encontrado</h3>
                  <p className="text-muted-foreground mb-6">
                    Tente ajustar sua busca ou remover os filtros para ver mais resultados.
                  </p>
                  <Button
                    onClick={() => {
                      setBusca("")
                      setFiltroVerificado(false)
                    }}
                    variant="outline"
                    className="rounded-full"
                  >
                    Limpar Filtros
                  </Button>
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
