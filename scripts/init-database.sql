-- Script de inicialização do banco de dados VIRLA
-- Execute este script para criar todas as tabelas necessárias

-- Criar banco de dados
CREATE DATABASE IF NOT EXISTS cuidadordb;
USE cuidadordb;


CREATE TABLE IF NOT EXISTS Perfil_familiar (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(100) NOT NULL,
  cpf VARCHAR(20) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  cidade VARCHAR(100),
  uf CHAR(2),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS Perfil_cuidador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(100) NOT NULL,
  cpf VARCHAR(20) UNIQUE NOT NULL,
  formacao VARCHAR(100),
  experiencia TEXT,
  disponibilidade VARCHAR(100),
  localizacao VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS Perfil_administrador (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  senha VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);


CREATE TABLE IF NOT EXISTS Mensagem (
  id INT AUTO_INCREMENT PRIMARY KEY,
  conteudo TEXT NOT NULL,
  data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
  id_familiar INT,
  id_cuidador INT,
  FOREIGN KEY (id_familiar) REFERENCES Perfil_familiar(id) ON DELETE CASCADE,
  FOREIGN KEY (id_cuidador) REFERENCES Perfil_cuidador(id) ON DELETE CASCADE,
  INDEX idx_familiar (id_familiar),
  INDEX idx_cuidador (id_cuidador),
  INDEX idx_data (data_envio)
);


CREATE TABLE IF NOT EXISTS Solicitacao_Proposta (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_remetente INT NOT NULL,
  tipo_remetente ENUM('familiar', 'cuidador') NOT NULL,
  id_destinatario INT NOT NULL,
  tipo_destinatario ENUM('familiar', 'cuidador') NOT NULL,
  descricao TEXT NOT NULL,
  horario VARCHAR(100),
  valor DECIMAL(10,2),
  status ENUM('pendente', 'aceita', 'recusada', 'contra_proposta') DEFAULT 'pendente',
  data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_remetente (id_remetente, tipo_remetente),
  INDEX idx_destinatario (id_destinatario, tipo_destinatario),
  INDEX idx_status (status)
);


CREATE TABLE IF NOT EXISTS Agendamento_servico (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_proposta INT,
  data_inicio DATE,
  dias INT,
  valor_total DECIMAL(10,2),
  status ENUM('pendente', 'em_andamento', 'concluido', 'cancelado') DEFAULT 'pendente',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (id_proposta) REFERENCES Solicitacao_Proposta(id) ON DELETE CASCADE,
  INDEX idx_proposta (id_proposta),
  INDEX idx_status (status),
  INDEX idx_data (data_inicio)
);


CREATE TABLE IF NOT EXISTS Pagamento (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_agendamento INT,
  metodo ENUM('pix','cartao','dinheiro') NOT NULL,
  status ENUM('pendente','confirmado','falhou') DEFAULT 'pendente',
  data_pagamento DATETIME,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_agendamento) REFERENCES Agendamento_servico(id) ON DELETE CASCADE,
  INDEX idx_agendamento (id_agendamento),
  INDEX idx_status (status)
);


CREATE TABLE IF NOT EXISTS Avaliacao (
  id INT AUTO_INCREMENT PRIMARY KEY,
  id_cuidador INT,
  id_familiar INT,
  nota INT CHECK (nota BETWEEN 1 AND 5),
  comentario TEXT,
  data_avaliacao DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_cuidador) REFERENCES Perfil_cuidador(id) ON DELETE CASCADE,
  FOREIGN KEY (id_familiar) REFERENCES Perfil_familiar(id) ON DELETE CASCADE,
  INDEX idx_cuidador (id_cuidador),
  INDEX idx_familiar (id_familiar),
  INDEX idx_nota (nota)
);

-- Inserir usuário administrador padrão (senha: admin123)
INSERT INTO Perfil_administrador (nome, email, senha) 
VALUES ('Administrador', 'admin@virla.com', '$2a$10$YourHashedPasswordHere')
ON DUPLICATE KEY UPDATE nome=nome;
