const passport = require('passport')
// Note, that we pass {session: false} in passport options, so that it wont save the user in the session
exports.userAuth = passport.authenticate('jwt', { session: false })




