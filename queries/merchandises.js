const db = require("../db/dbConfig")

//get all the merchandises
getMerchandises = async (request, response) => {
    try {
        const { rows } = await db.query("SELECT * FROM merchandises")
        return response.status(200).json({
            success: true,
            vendors: rows,
          })
    } catch (error) {
        console.log(error.message) 
    }
}

//get a specific merchandise by owner id
getMerchandise = async (request, response) => {
    const {id } = request.params
    console.log(id)
    try {
        const { rows } = await db.query("SELECT * FROM merchandises WHERE owner_id=$1", [id])
        console.log(rows)
        return response.status(200).json({ 
             rows
          })
    } catch (error) {
        console.log(error.message) 
    }
}
 
// rgb(22,35,45) background body
// 16232D

//00BFFE rgb(0,191,254) sign button
//E8F0F4 rgb(232,240,244) sign in window background-color
module.exports = {getMerchandises, getMerchandise}