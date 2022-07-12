const express = require("express")
const vendors = express.Router()
const {
    getVendors,
    getAVendor,
    createVendor
} = require("../../queries/vendors")


// const merchandiseController = require("../merchanController/merchanController")

// vendors.use('/:id/merchandises', merchandiseController)

vendors.get("/", getVendors)
vendors.get("/:uid", getAVendor)
vendors.post("/", createVendor)


module.exports = vendors