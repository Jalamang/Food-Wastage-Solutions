const express = require("express")
const cors = require("cors")

const app = express()

//controllers
const usersController = require("./controllers/usersController/usersController")
const merchanController = require("./controllers/merchanController/merchanController")

app.use("/vendors", usersController)
app.use("/merchandises", merchanController)

app.get("/", (request, response) =>{
    response.send("Welcome to Food Waste Solutions")
})

module.exports = app
