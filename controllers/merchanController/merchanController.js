const express = require("express")
const { getAllMerchandises, getVendorMerchandises, getAMerchandise} = require("../../queries/merchandises")
// const merchandises = express.Router({mergeParams: true})
const merchandises = express.Router()


// merchandises.get("/", getVendorMerchandises)
merchandises.get("/:id", getAMerchandise)
merchandises.get("/", getAllMerchandises)

module.exports = merchandises