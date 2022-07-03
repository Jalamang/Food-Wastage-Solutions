const express = require("express")
const cors = require("cors")

const app = express()

//controllers
const vendorsController = require("./controllers/vendorsController/vendorsController")
const merchanController = require("./controllers/merchanController/merchanController")

app.use("/vendors", vendorsController)
app.use("/merchandises", merchanController)

app.get("/", (_, response) =>{
    response.send("Welcome to Food Waste Solutions")
})

module.exports = app
