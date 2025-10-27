"use client"

import { Footer } from "@/components/footer"
import { FeedSidebar } from "@/components/feed-sidebar"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, Briefcase, User, Moon, Users } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { useState, useEffect } from "react"

const menuItems = [
  { href: "/cuidador/feed", icon: Briefcase, label: "Oportunidades" },
  { href: "/cuidador/propostas", icon: Heart, label: "Propostas" },
  { href: "/cuidador/familiares", icon: Users, label: "Familiares" },
  { href: "/cuidador/perfil", icon: User, label: "Perfil" },
]

export default function ConfiguracoesCuidadorPage() {
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
