const express = require("express")
const vendors = express.Router()
const {
    getVendors,
    getAVendor,
    createVendor,
    updateVendor,
    deleteVendor,
    login,
    logout,
    protected
} = require("../../queries/vendors")
const { registerValidation, loginValidation}= require("../../validate/userValidation")
const {validationMiddleware} = require("../../validate/validation-middleWare")
const { userAuth } = require("../../middleWares/auth-middleware")

// const merchandiseController = require("../merchanController/merchanController")
// vendors.use('/:id/merchandises', merchandiseController)

vendors.get("/", getVendors)
vendors.get("/protected",userAuth, protected)
vendors.get("/:uid", getAVendor)
vendors.post("/create", registerValidation, validationMiddleware, createVendor)
vendors.post("/login", loginValidation, validationMiddleware, login)
vendors.post("/logout", logout)
vendors.put("/:uid", updateVendor)
vendors.delete("/:uid", deleteVendor)

module.exports = vendors
