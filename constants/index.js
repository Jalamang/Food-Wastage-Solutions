const { config } = require('dotenv')
config()

module.exports = {
  PORT: process.env.PORT,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL,
  SECRET: process.env.SECRET,
  PG_user: process.env.PG_user,
  PG_host: process.env.PG_host,
  PG_database: process.env.PG_database,
  PG_password: process.env.PG_password,
  PG_port:process.env.PG_port
}
