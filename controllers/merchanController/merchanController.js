const express = require("express")
const merchandises = express.Router()
const { getAllMerchandises, 
    getVendorMerchandises, 
    createMerchandise, 
    getAMerchandise,
    updateMerchandise,
    deleteProduct
} = require('../../queries/merchandises')
    
// const merchandises = express.Router({mergeParams: true})
// merchandises.get("/", getVendorMerchandises)



merchandises.get("/", getAllMerchandises)
merchandises.get("/:id", getAMerchandise)
merchandises.post("/", createMerchandise)
merchandises.put("/:uid", updateMerchandise)
merchandises.delete("/:uid", deleteProduct)

module.exports = merchandises