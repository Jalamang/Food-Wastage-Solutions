const db = require("../db/dbConfig")

//get all users 
getVendors = async (request, response) => {
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

  //get a specific vendor
  getAVendor = async (request, response) => {
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

  createVendor = async ( request, response) =>{
    console.log(request.body)
    const {name, business_type, address, phone, photo, profile, email, password } = request.body
   try {
    await db.query('INSERT INTO vendors(name, business_type, address, phone, photo, profile, email, password ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', [name, business_type, address, phone, photo, profile, email, password])
           return response.status(201).json({
            success: true,
            message: 'The post was successful',
          })

} catch (error) {
              console.log(error.message)
          return response.status(500).json({
            error: error.message,
          })   
        }

 }

  module.exports = {getVendors, getAVendor, createVendor}