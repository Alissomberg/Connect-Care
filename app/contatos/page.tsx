"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { useState } from "react"

export default function ContatosPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", formData)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setFormData({ nome: "", email: "", telefone: "", mensagem: "" })
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contatos</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Entre em contato conosco. Estamos aqui para ajudar você!
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-bold mb-8 text-primary">Fale Conosco</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Tem alguma dúvida ou precisa de ajuda? Nossa equipe está pronta para atendê-lo. Entre em contato através
                dos canais abaixo ou preencha o formulário.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Email</h3>
                    <p className="text-muted-foreground">contato@connectcare.com.br</p>
                    <p className="text-muted-foreground">suporte@connectcare.com.br</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Telefone</h3>
                    <p className="text-muted-foreground">(11) 3456-7890</p>
                    <p className="text-muted-foreground">WhatsApp: (11) 98765-4321</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-foreground">Endereço</h3>
                    <p className="text-muted-foreground">Av. Paulista, 1000 - 10º andar</p>
                    <p className="text-muted-foreground">São Paulo - SP, 01310-100</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary/30 rounded-2xl">
                <h3 className="font-bold text-lg mb-2 text-foreground">Horário de Atendimento</h3>
                <p className="text-muted-foreground">Segunda a Sexta: 8h às 18h</p>
                <p className="text-muted-foreground">Sábado: 9h às 13h</p>
                <p className="text-muted-foreground">Suporte emergencial 24/7</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card p-8 rounded-3xl shadow-lg border border-border">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold mb-2 text-foreground">
                    Nome Completo
                  </label>
                  <Input
                    id="nome"
                    type="text"
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    required
                    className="rounded-xl"
                  />
                </div>

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
                  <label htmlFor="telefone" className="block text-sm font-semibold mb-2 text-foreground">
                    Telefone
                  </label>
                  <Input
                    id="telefone"
                    type="tel"
                    placeholder="(11) 98765-4321"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="rounded-xl"
                  />
                </div>

                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold mb-2 text-foreground">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    placeholder="Como podemos ajudar você?"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    required
                    rows={6}
                    className="rounded-xl"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full py-6 text-lg"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">Nossa Localização</h2>
          <div className="rounded-3xl overflow-hidden shadow-lg h-96 bg-muted">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-lg">Mapa interativo será carregado aqui</p>
                <p className="text-sm">Av. Paulista, 1000 - São Paulo, SP</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
