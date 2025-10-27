"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Users, FileText, User, MessageSquare, Search, Moon } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const menuItems = [
  { href: "/familiar/feed", icon: Search, label: "Buscar" },
  { href: "/familiar/solicitacoes", icon: FileText, label: "Solicitações" },
  { href: "/familiar/cuidadores", icon: Users, label: "Cuidadores" },
  { href: "/familiar/perfil", icon: User, label: "Perfil" },
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

export default function ConfiguracoesFamiliarPage() {
  const [modoEscuro, setModoEscuro] = useState(false)

  useEffect(() => {
    // Carregar preferência salva
    const savedTheme = localStorage.getItem("theme")
    const isDark = savedTheme === "dark"
    setModoEscuro(isDark)

    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const handleThemeChange = (checked: boolean) => {
    setModoEscuro(checked)

    if (checked) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

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
            <div className="container mx-auto px-4 max-w-4xl">
              <main>
                <div className="mb-6">
                  <h1 className="text-4xl font-bold mb-2 text-foreground">Configurações</h1>
                  <p className="text-muted-foreground">Personalize sua experiência na plataforma</p>
                </div>

                <Card className="p-6 rounded-3xl border-border">
                  <h3 className="font-bold text-xl mb-6 text-foreground">Aparência</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Moon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <Label htmlFor="modo-escuro" className="text-base font-medium text-foreground cursor-pointer">
                          Modo Escuro
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Ative o tema escuro para reduzir o cansaço visual
                        </p>
                      </div>
                    </div>
                    <Switch id="modo-escuro" checked={modoEscuro} onCheckedChange={handleThemeChange} />
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
