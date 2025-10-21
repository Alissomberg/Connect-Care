"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      categoria: "Geral",
      perguntas: [
        {
          pergunta: "O que é a ConnectCare?",
          resposta:
            "A ConnectCare é uma plataforma digital que conecta famílias que precisam de cuidadores profissionais com cuidadores qualificados e verificados. Oferecemos um ambiente seguro para busca, comunicação e contratação de serviços de cuidado.",
        },
        {
          pergunta: "Como funciona a plataforma?",
          resposta:
            "Famílias criam um perfil e buscam cuidadores por localização, especialização e disponibilidade. Cuidadores criam perfis profissionais com suas qualificações. Após encontrar o profissional ideal, a comunicação acontece através do nosso chat integrado e o agendamento pode ser feito diretamente na plataforma.",
        },
        {
          pergunta: "A plataforma é gratuita?",
          resposta:
            "O cadastro e a busca são gratuitos tanto para famílias quanto para cuidadores. Cobramos uma taxa de serviço apenas quando há contratação efetiva através da plataforma.",
        },
      ],
    },
    {
      categoria: "Para Famílias",
      perguntas: [
        {
          pergunta: "Como encontro um cuidador confiável?",
          resposta:
            "Todos os cuidadores passam por verificação de documentos e referências. Você pode ver avaliações de outras famílias, histórico profissional e especialidades. Nossa busca inteligente filtra profissionais por localização, disponibilidade e tipo de cuidado necessário.",
        },
        {
          pergunta: "Posso entrevistar o cuidador antes de contratar?",
          resposta:
            "Sim! Recomendamos que você use nosso chat integrado para conversar com o cuidador, fazer perguntas e até agendar uma entrevista presencial antes de finalizar a contratação.",
        },
        {
          pergunta: "Como funciona o pagamento?",
          resposta:
            "O pagamento pode ser feito através da plataforma via Pix ou boleto. Oferecemos suporte para pagamentos únicos ou recorrentes, dependendo do tipo de contratação.",
        },
        {
          pergunta: "E se eu não ficar satisfeito com o serviço?",
          resposta:
            "Você pode avaliar o cuidador após o serviço e, em caso de problemas, nossa equipe de suporte está disponível 24/7 para mediar a situação e buscar a melhor solução.",
        },
      ],
    },
    {
      categoria: "Para Cuidadores",
      perguntas: [
        {
          pergunta: "Como me cadastro como cuidador?",
          resposta:
            "Clique em 'Entrar' e selecione 'Sou Cuidador'. Preencha seus dados pessoais, experiência profissional, especialidades e envie documentos para verificação. Após aprovação, seu perfil ficará visível para famílias.",
        },
        {
          pergunta: "Preciso ter certificação para me cadastrar?",
          resposta:
            "Certificações são um diferencial, mas não obrigatórias. Valorizamos experiência comprovada, referências e comprometimento com o cuidado de qualidade. Quanto mais completo seu perfil, maiores suas chances de contratação.",
        },
        {
          pergunta: "Como recebo pelos serviços prestados?",
          resposta:
            "Os pagamentos são processados através da plataforma e transferidos para sua conta bancária cadastrada. Você define seus valores e disponibilidade.",
        },
        {
          pergunta: "Posso escolher quais trabalhos aceitar?",
          resposta:
            "Sim! Você tem total autonomia para aceitar ou recusar oportunidades. Pode filtrar por localização, tipo de cuidado, período e valor oferecido.",
        },
      ],
    },
    {
      categoria: "Segurança",
      perguntas: [
        {
          pergunta: "Como vocês verificam os cuidadores?",
          resposta:
            "Realizamos verificação de documentos (RG, CPF, comprovante de residência), checagem de antecedentes criminais, validação de referências profissionais e análise de certificações quando disponíveis.",
        },
        {
          pergunta: "Meus dados estão seguros?",
          resposta:
            "Sim! Utilizamos criptografia de ponta a ponta para proteger seus dados pessoais e financeiros. Seguimos rigorosamente a LGPD (Lei Geral de Proteção de Dados).",
        },
        {
          pergunta: "O que fazer em caso de emergência?",
          resposta:
            "Temos suporte 24/7 disponível. Em caso de emergência médica, sempre acione os serviços de emergência (SAMU 192) primeiro e depois entre em contato com nossa equipe.",
        },
      ],
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  let globalIndex = 0

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Perguntas Frequentes</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Encontre respostas para as dúvidas mais comuns sobre a ConnectCare
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {faqs.map((categoria, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold mb-6 text-primary">{categoria.categoria}</h2>
              <div className="space-y-4">
                {categoria.perguntas.map((faq) => {
                  const currentIndex = globalIndex++
                  return (
                    <div key={currentIndex} className="bg-card border border-border rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleFAQ(currentIndex)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
                      >
                        <span className="font-semibold text-lg text-foreground pr-4">{faq.pergunta}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                            openIndex === currentIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openIndex === currentIndex && (
                        <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.resposta}</div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Ainda tem dúvidas?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nossa equipe está pronta para ajudar você. Entre em contato conosco!
          </p>
          <a
            href="/contatos"
            className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full px-8 py-4 text-lg transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </section>

      <Footer />
    </div>
  )
}
