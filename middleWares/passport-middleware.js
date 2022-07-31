const passport = require('passport')
const { Strategy } = require('passport-jwt')
let { SECRET } = require('../constants')
const db = require('../db/dbConfig')

const cookieExtractor = function (req) {
  let token = null
  if(req && req.cookies) token = req.cookies['token']
return token
}
SECRET = 'jalamang'
const opts = {
  secretOrKey: SECRET,
  jwtFromRequest: cookieExtractor,
}

passport.use(
  new Strategy(opts, async ({ id }, done) => {
    try {
      const { rows } = await db.query(
        'SELECT vendor_id, email FROM vendors WHERE vendor_id = $1',
        [id]
      )

      if (!rows.length) {
        throw new Error('401 not authorized')
      }

      let user = { id: rows[0].vendor_id, email: rows[0].email }

      return await done(null, user)
    } catch (error) {
      console.log(error.message)
      done(null, false)
    }
  })
)
