const express = require("express")
const { getMerchandises, getMerchandise} = require("../../queries/merchandises")
const merchandises = express.Router()

merchandises.get("/", getMerchandises)

merchandises.get("/:id", getMerchandise)

module.exports = merchandises