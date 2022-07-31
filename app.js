const express = require("express")
const app = express()
const { CLIENT_URL } = require('./constants')
const cookieParser = require('cookie-parser')
const passport = require('passport')
const cors = require("cors")

//controllers
const merchanController = require("./controllers/merchanController/merchanController")
const vendorsController = require("./controllers/vendorsController/vendorsController")

//import passport middleware
require('./middleWares/passport-middleware')

//initialize middlewares
//Cross-Origin Resource Sharing (CORS)
app.use(express.json())
app.use(cookieParser())
app.use(cors({ origin: CLIENT_URL, credentials: true }));
app.use(passport.initialize())

app.use("/vendors", vendorsController)
app.use("/merchandises", merchanController)


app.get("/", (_, response) =>{
    response.send("Welcome to Food Waste Solutions")
})

module.exports = app
