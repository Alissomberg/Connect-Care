"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { useState } from "react"
import { Users, ArrowLeft } from "lucide-react"

export default function FamiliarRecuperarSenhaPage() {
  const [email, setEmail] = useState("")
  const [enviado, setEnviado] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de recuperação de senha
    console.log("Recuperar senha para:", email)
    setEnviado(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="flex-1 py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-card p-8 rounded-3xl shadow-xl border border-border">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Users className="w-10 h-10 text-primary" />
              </div>

              <h1 className="text-3xl font-bold text-center mb-2 text-foreground">Recuperar Senha</h1>
              <p className="text-center text-muted-foreground mb-8">
                Digite seu email para receber instruções de recuperação
              </p>

              {!enviado ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="rounded-xl"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full py-6 text-lg"
                  >
                    Enviar Instruções
                  </Button>
                </form>
              ) : (
                <div className="text-center space-y-4">
                  <div className="bg-primary/10 p-6 rounded-2xl">
                    <p className="text-foreground font-semibold mb-2">Email enviado com sucesso!</p>
                    <p className="text-muted-foreground text-sm">
                      Verifique sua caixa de entrada e siga as instruções para redefinir sua senha.
                    </p>
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold rounded-full py-6 bg-transparent"
                  >
                    <Link href="/familiar/login">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Voltar para Login
                    </Link>
                  </Button>
                </div>
              )}

              {!enviado && (
                <div className="mt-6 text-center">
                  <Link
                    href="/familiar/login"
                    className="text-primary hover:underline font-semibold inline-flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para login
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
