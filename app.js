const express = require("express")
const cors = require("cors")

const app = express()


// app.use()

app.get("/", (request, response) =>{
    response.send("Welcome to Food Wastage Solution")
})
module.exports = app
