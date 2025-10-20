"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Heart } from "lucide-react"

export default function CuidadorCadastroPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    email: "",
    telefone: "",
    cpf: "",
    dataNascimento: "",
    endereco: "",
    cidade: "",
    estado: "",
    experiencia: "",
    especialidades: "",
    senha: "",
    confirmarSenha: "",
    aceitarTermos: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.senha !== formData.confirmarSenha) {
      alert("As senhas não coincidem!")
      return
    }

    if (!formData.aceitarTermos) {
      alert("Você precisa aceitar os termos de uso!")
      return
    }

    // Aqui você implementaria a lógica de cadastro real
    console.log("Cadastro cuidador:", formData)
    alert("Cadastro realizado com sucesso! Faça login para continuar.")
    router.push("/cuidador/login")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Header do Cadastro */}
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Heart className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-2 text-foreground">Cadastro de Cuidador</h1>
              <p className="text-muted-foreground text-lg">
                Crie sua conta profissional e comece a receber propostas de trabalho
              </p>
            </div>

            {/* Card de Cadastro */}
            <div className="bg-card p-8 rounded-3xl shadow-xl border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Dados Pessoais */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Dados Pessoais</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="nomeCompleto" className="block text-sm font-semibold mb-2 text-foreground">
                        Nome Completo *
                      </label>
                      <Input
                        id="nomeCompleto"
                        type="text"
                        placeholder="Seu nome completo"
                        value={formData.nomeCompleto}
                        onChange={(e) => setFormData({ ...formData, nomeCompleto: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Email *
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
                        Telefone *
                      </label>
                      <Input
                        id="telefone"
                        type="tel"
                        placeholder="(11) 98765-4321"
                        value={formData.telefone}
                        onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="cpf" className="block text-sm font-semibold mb-2 text-foreground">
                        CPF *
                      </label>
                      <Input
                        id="cpf"
                        type="text"
                        placeholder="000.000.000-00"
                        value={formData.cpf}
                        onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="dataNascimento" className="block text-sm font-semibold mb-2 text-foreground">
                        Data de Nascimento *
                      </label>
                      <Input
                        id="dataNascimento"
                        type="date"
                        value={formData.dataNascimento}
                        onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Endereço */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Endereço</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label htmlFor="endereco" className="block text-sm font-semibold mb-2 text-foreground">
                        Endereço Completo *
                      </label>
                      <Input
                        id="endereco"
                        type="text"
                        placeholder="Rua, número, complemento"
                        value={formData.endereco}
                        onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="cidade" className="block text-sm font-semibold mb-2 text-foreground">
                        Cidade *
                      </label>
                      <Input
                        id="cidade"
                        type="text"
                        placeholder="Sua cidade"
                        value={formData.cidade}
                        onChange={(e) => setFormData({ ...formData, cidade: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="estado" className="block text-sm font-semibold mb-2 text-foreground">
                        Estado *
                      </label>
                      <Input
                        id="estado"
                        type="text"
                        placeholder="SP"
                        value={formData.estado}
                        onChange={(e) => setFormData({ ...formData, estado: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Experiência Profissional */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Experiência Profissional</h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="experiencia" className="block text-sm font-semibold mb-2 text-foreground">
                        Experiência (anos) *
                      </label>
                      <Input
                        id="experiencia"
                        type="number"
                        placeholder="Ex: 5"
                        value={formData.experiencia}
                        onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="especialidades" className="block text-sm font-semibold mb-2 text-foreground">
                        Especialidades e Qualificações *
                      </label>
                      <Textarea
                        id="especialidades"
                        placeholder="Descreva suas especialidades, cursos, certificações..."
                        value={formData.especialidades}
                        onChange={(e) => setFormData({ ...formData, especialidades: e.target.value })}
                        required
                        rows={4}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Senha */}
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-foreground">Segurança</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="senha" className="block text-sm font-semibold mb-2 text-foreground">
                        Senha *
                      </label>
                      <Input
                        id="senha"
                        type="password"
                        placeholder="••••••••"
                        value={formData.senha}
                        onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                        required
                        minLength={8}
                        className="rounded-xl"
                      />
                    </div>

                    <div>
                      <label htmlFor="confirmarSenha" className="block text-sm font-semibold mb-2 text-foreground">
                        Confirmar Senha *
                      </label>
                      <Input
                        id="confirmarSenha"
                        type="password"
                        placeholder="••••••••"
                        value={formData.confirmarSenha}
                        onChange={(e) => setFormData({ ...formData, confirmarSenha: e.target.value })}
                        required
                        minLength={8}
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Termos */}
                <div className="flex items-start gap-2">
                  <Checkbox
                    id="termos"
                    checked={formData.aceitarTermos}
                    onCheckedChange={(checked) => setFormData({ ...formData, aceitarTermos: checked as boolean })}
                    required
                  />
                  <label htmlFor="termos" className="text-sm text-muted-foreground cursor-pointer">
                    Aceito os{" "}
                    <Link href="/termos" className="text-primary hover:underline font-semibold">
                      termos de uso
                    </Link>{" "}
                    e{" "}
                    <Link href="/privacidade" className="text-primary hover:underline font-semibold">
                      política de privacidade
                    </Link>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full py-6 text-lg"
                >
                  Criar Conta
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-muted-foreground">
                  Já tem uma conta?{" "}
                  <Link href="/cuidador/login" className="text-primary hover:underline font-semibold">
                    Faça login aqui
                  </Link>
                </p>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  É familiar?{" "}
                  <Link href="/familiar/cadastro" className="text-primary hover:underline font-semibold">
                    Cadastre-se como familiar
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
