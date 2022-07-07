const db = require("../db/dbConfig")

//get all users 
getUsers = async (request, response) => {
    try {
      const { rows } = await db.query('SELECT * FROM vendors')
      console.log(rows)
      return response.status(200).json({
        success: true,
        vendors: rows,
      })
    } catch (error) {
      console.log(error.message)
    }
  }

  //get a specific user
  getUser = async (request, response) => {
    const {uid} = request.params
    try {
      const { rows } = await db.query('SELECT * FROM vendors WHERE vendor_id = $1', [uid])
      console.log(rows)
      return response.status(200).json({
        success: true,
        users: rows,
      })
    } catch (error) {
      console.log(error.message)
    }
  }
  module.exports = {getUsers, getUser}