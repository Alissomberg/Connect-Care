import mysql from "mysql2/promise"

// Configuração da conexão com MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || "localhost",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "virla_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
})

export default pool
