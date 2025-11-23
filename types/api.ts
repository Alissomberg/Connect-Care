// Tipos para o back-end

export interface Usuario {
  id: number
  nome: string
  email: string
  cpf: string
}

export interface Familiar extends Usuario {
  telefone?: string
  cidade?: string
  uf?: string
}

export interface Cuidador extends Usuario {
  formacao?: string
  experiencia?: string
  disponibilidade?: string
  localizacao?: string
}

export interface Mensagem {
  id: number
  conteudo: string
  data_envio: Date
  id_familiar: number
  id_cuidador: number
}

export interface Proposta {
  id: number
  id_remetente: number
  tipo_remetente: "familiar" | "cuidador"
  id_destinatario: number
  tipo_destinatario: "familiar" | "cuidador"
  descricao: string
  horario?: string
  valor?: number
  status: "pendente" | "aceita" | "recusada" | "contra_proposta"
  data_envio: Date
}

export interface Agendamento {
  id: number
  id_proposta: number
  data_inicio: Date
  dias: number
  valor_total: number
  status: "pendente" | "em_andamento" | "concluido" | "cancelado"
}

export interface Pagamento {
  id: number
  id_agendamento: number
  metodo: "pix" | "cartao" | "dinheiro"
  status: "pendente" | "confirmado" | "falhou"
  data_pagamento?: Date
}

export interface Avaliacao {
  id: number
  id_cuidador: number
  id_familiar: number
  nota: number
  comentario?: string
  data_avaliacao: Date
}
