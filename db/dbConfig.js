const{Pool}= require('pg')
 const {PG_user, PG_host, PG_database, PG_password, PG_port} = process.env
const pool = new Pool({
  user: PG_user,
  host: PG_host,
  database:PG_database,
  password: PG_password,
 port: PG_port,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}

