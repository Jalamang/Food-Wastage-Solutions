const express = require("express")

const {
    getVendors,
    getAVendor
} = require("../../queries/vendors")

const vendors = express.Router({mergeParams: true})
const merchandiseController = require("../merchanController/merchanController")

// vendors.use('/:id/merchandises', merchandiseController)

vendors.get("/", getVendors)
vendors.get("/:uid", getAVendor)


module.exports = vendors