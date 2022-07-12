const express = require("express")
const cors = require("cors")

const app = express()

//controllers
const merchanController = require("./controllers/merchanController/merchanController")
const vendorsController = require("./controllers/vendorsController/vendorsController")

//body-parser
app.use(cors());
app.use(express.json())

app.use("/vendors", vendorsController)
app.use("/merchandises", merchanController)

app.get("/", (_, response) =>{
    response.send("Welcome to Food Waste Solutions")
})

module.exports = app
