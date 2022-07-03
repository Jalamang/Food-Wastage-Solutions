const express = require("express")

const {
    getUsers,
    getUser
} = require("../../queries/users")

const vendors = express.Router()


vendors.get("/", getUsers)
vendors.get("/:uid", getUser)


module.exports = vendors