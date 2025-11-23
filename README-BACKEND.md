# VIRLA - Backend API Documentation

## Visão Geral

Backend completo da plataforma VIRLA desenvolvido em Next.js com API Routes, MySQL e autenticação JWT.

## Configuração

### 1. Instalar Dependências

\`\`\`bash
npm install
\`\`\`

### 2. Configurar Banco de Dados

Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`:

\`\`\`env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=virla_db
JWT_SECRET=seu_secret_key_muito_seguro
\`\`\`

### 3. Inicializar Banco de Dados

Execute o script SQL para criar as tabelas:

\`\`\`bash
mysql -u root -p < scripts/init-database.sql
\`\`\`

### 4. Iniciar Servidor

\`\`\`bash
npm run dev
\`\`\`

## Endpoints da API

### Autenticação

#### Registro de Familiar
- **POST** `/api/auth/register/familiar`
- Body: `{ nome, email, senha, cpf, telefone?, cidade?, uf? }`
- Retorna: `{ token, user }`

#### Registro de Cuidador
- **POST** `/api/auth/register/cuidador`
- Body: `{ nome, email, senha, cpf, formacao?, experiencia?, disponibilidade?, localizacao? }`
- Retorna: `{ token, user }`

#### Login
- **POST** `/api/auth/login`
- Body: `{ email, senha, tipo: 'familiar' | 'cuidador' | 'administrador' }`
- Retorna: `{ token, user }`

### Perfil (Requer Autenticação)

#### Obter Perfil
- **GET** `/api/perfil`
- Headers: `Authorization: Bearer {token}`
- Retorna: Dados do perfil do usuário

#### Atualizar Perfil
- **PUT** `/api/perfil`
- Headers: `Authorization: Bearer {token}`
- Body: Campos permitidos por tipo de usuário
- Retorna: `{ message }`

### Mensagens (Requer Autenticação)

#### Listar Mensagens
- **GET** `/api/mensagens?outroUsuarioId={id}&outroUsuarioTipo={tipo}`
- Headers: `Authorization: Bearer {token}`
- Retorna: Lista de mensagens

#### Enviar Mensagem
- **POST** `/api/mensagens`
- Headers: `Authorization: Bearer {token}`
- Body: `{ conteudo, id_destinatario, tipo_destinatario }`
- Retorna: `{ message, id }`

### Propostas (Requer Autenticação)

#### Listar Propostas
- **GET** `/api/propostas?status={status}`
- Headers: `Authorization: Bearer {token}`
- Retorna: Lista de propostas

#### Criar Proposta
- **POST** `/api/propostas`
- Headers: `Authorization: Bearer {token}`
- Body: `{ id_destinatario, tipo_destinatario, descricao, horario?, valor? }`
- Retorna: `{ message, id }`

#### Atualizar Proposta
- **PUT** `/api/propostas/{id}`
- Headers: `Authorization: Bearer {token}`
- Body: `{ status: 'pendente' | 'aceita' | 'recusada' | 'contra_proposta' }`
- Retorna: `{ message }`

### Agendamentos (Requer Autenticação)

#### Listar Agendamentos
- **GET** `/api/agendamentos?status={status}`
- Headers: `Authorization: Bearer {token}`
- Retorna: Lista de agendamentos

#### Criar Agendamento
- **POST** `/api/agendamentos`
- Headers: `Authorization: Bearer {token}`
- Body: `{ id_proposta, data_inicio, dias, valor_total }`
- Retorna: `{ message, id }`

### Pagamentos (Requer Autenticação)

#### Listar Pagamentos
- **GET** `/api/pagamentos?status={status}`
- Headers: `Authorization: Bearer {token}`
- Retorna: Lista de pagamentos

#### Criar Pagamento
- **POST** `/api/pagamentos`
- Headers: `Authorization: Bearer {token}`
- Body: `{ id_agendamento, metodo: 'pix' | 'cartao' | 'dinheiro' }`
- Retorna: `{ message, id }`

#### Atualizar Pagamento
- **PUT** `/api/pagamentos/{id}`
- Headers: `Authorization: Bearer {token}`
- Body: `{ status: 'pendente' | 'confirmado' | 'falhou' }`
- Retorna: `{ message }`

### Avaliações

#### Listar Avaliações
- **GET** `/api/avaliacoes?id_cuidador={id}&id_familiar={id}`
- Headers: `Authorization: Bearer {token}`
- Retorna: Lista de avaliações

#### Criar Avaliação (Apenas Familiar)
- **POST** `/api/avaliacoes`
- Headers: `Authorization: Bearer {token}`
- Body: `{ id_cuidador, nota: 1-5, comentario? }`
- Retorna: `{ message, id }`

### Cuidadores (Público)

#### Buscar Cuidadores
- **GET** `/api/cuidadores?localizacao={loc}&disponibilidade={disp}&formacao={form}&limit={n}&offset={n}`
- Retorna: Lista paginada de cuidadores com avaliações

#### Buscar Cuidador por ID
- **GET** `/api/cuidadores/{id}`
- Retorna: Detalhes completos do cuidador + avaliações

### Admin (Apenas Administrador)

#### Listar Usuários
- **GET** `/api/admin/users?tipo={familiar|cuidador}&limit={n}&offset={n}`
- Headers: `Authorization: Bearer {token}`
- Retorna: Lista de todos os usuários

#### Estatísticas da Plataforma
- **GET** `/api/admin/stats`
- Headers: `Authorization: Bearer {token}`
- Retorna: Estatísticas completas da plataforma

## Estrutura do Banco de Dados

Ver arquivo `scripts/init-database.sql` para detalhes completos.

### Tabelas Principais:
- **Perfil_familiar**: Dados dos familiares
- **Perfil_cuidador**: Dados dos cuidadores
- **Perfil_administrador**: Dados dos admins
- **Mensagem**: Comunicação entre usuários
- **Solicitacao_Proposta**: Propostas de serviço
- **Agendamento_servico**: Agendamentos confirmados
- **Pagamento**: Transações financeiras
- **Avaliacao**: Avaliações de cuidadores

## Segurança

- Senhas criptografadas com bcrypt (10 rounds)
- Autenticação via JWT com expiração de 7 dias
- Middleware de autenticação e autorização por tipo de usuário
- Validação de dados em todos os endpoints
- Integridade referencial via foreign keys

## Desenvolvimento

### Adicionar Nova Rota

1. Criar arquivo em `app/api/[rota]/route.ts`
2. Implementar handlers GET, POST, PUT, DELETE
3. Usar `withAuth()` para rotas protegidas
4. Adicionar validação de dados
5. Documentar no README

### Tipos TypeScript

Todos os tipos estão em `types/api.ts` para reutilização.

## Produção

1. Configure variáveis de ambiente seguras
2. Mude JWT_SECRET para valor aleatório forte
3. Configure SSL/TLS no MySQL
4. Implemente rate limiting
5. Configure logs e monitoring
6. Backup regular do banco de dados
