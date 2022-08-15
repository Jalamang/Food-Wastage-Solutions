const{Pool}= require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'locaLhost',
  database:'food_solutions',
  password: 'root',
 port: 5432,
})
module.exports = {
  query: (text, params) => pool.query(text, params),
}

