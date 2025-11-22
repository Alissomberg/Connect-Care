"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Users } from "lucide-react"

export default function FamiliarLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    senha: "",
    lembrar: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de autenticação real
    console.log("Login familiar:", formData)
    // Simulando login bem-sucedido
    router.push("/familiar/feed")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            {/* Card de Login */}
            <div className="bg-card p-8 rounded-3xl shadow-xl border border-border">
              {/* Icon */}
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-primary" />
              </div>

              <h1 className="text-3xl font-bold text-center mb-2 text-foreground">Login do Familiar</h1>
              <p className="text-center text-muted-foreground mb-8">Entre para encontrar cuidadores qualificados</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="senha" className="block text-sm font-semibold mb-2 text-foreground">
                    Senha
                  </label>
                  <Input
                    id="senha"
                    type="password"
                    placeholder="••••••••"
                    value={formData.senha}
                    onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Checkbox
                      id="lembrar"
                      checked={formData.lembrar}
                      onCheckedChange={(checked) => setFormData({ ...formData, lembrar: checked as boolean })}
                    />
                    <label htmlFor="lembrar" className="text-sm text-muted-foreground cursor-pointer">
                      Lembrar de mim
                    </label>
                  </div>
                  <Link href="/familiar/recuperar-senha" className="text-sm text-primary hover:underline font-semibold">
                    Esqueceu a senha?
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full py-6 text-lg"
                >
                  Entrar
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Ainda não tem conta?{" "}
                  <Link href="/familiar/cadastro" className="text-primary hover:underline font-semibold">
                    Cadastre-se aqui
                  </Link>
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  É cuidador?{" "}
                  <Link href="/cuidador/login" className="text-primary hover:underline font-semibold">
                    Fazer login como cuidador
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
