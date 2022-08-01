const { Pool } = require('pg')
const { DATABASE_URL, PG_HOST, PG_PORT, PG_DATABASE, PG_USER, PG_PASSWORD } =
  process.env;
  
  const pool = DATABASE_URL
  ? {
      connectionString: DATABASE_URL,
      max: 30,
      ssl: {
        rejectUnauthorized: false,
      },
    } : new Pool({
      user: PG_USER,
      host: PG_HOST,
      database:PG_DATABASE,
      password: PG_PASSWORD,
     port: PG_PORT,
    })

module.exports = {
  query: (text, params) => pool.query(text, params),
}


