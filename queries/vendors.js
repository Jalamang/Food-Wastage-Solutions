const db = require("../db/dbConfig");
const { hash } = require("bcryptjs");
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants')
// const {formatPhoneNumber} = require("../controllers/vendorsController/validate")

//get all users
getVendors = async (request, response) => {
  const {vendor_id} = request.body
  
  try {
    const { rows } = await db.query("SELECT * FROM vendors");
    console.log(rows)
    return response.status(200).json({
      success: true,
      vendors: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//get a specific vendor
getAVendor = async (request, response) => {
  const { uid } = request.params;
  try {
    const { rows } = await db.query(
      "SELECT * FROM vendors WHERE vendor_id = $1",
      [uid]
    );
   
    return response.status(200).json({
      success: true,
      users: rows,
    });
  } catch (error) {
    console.log(error.message);
  }
};

createVendor = async (request, response) => {
  const {
    name,
    business_type,
    address,
    phone,
    photo,
    profile,
    email,
    password,
  } = request.body;

  const hashedPassword = await hash(password, 10);
  try {
    await db.query(
      "INSERT INTO vendors(name, business_type, address, phone, photo, profile, email, password ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
      [
        name,
        business_type,
        address,
        phone,
        photo,
        profile,
        email,
        hashedPassword,
      ]
    );
    return response.status(201).json({
      success: true,
      message: "The post was successful",
    });
  } catch (error) {
    console.log(error.message);
    return response.status(500).json({
      error: error.message,
    });
  }
};

updateVendor = async (request, response) => {
  const { uid } = request.params;
  const {
    name,
    business_type,
    address,
    phone,
    photo,
    profile,
    email,
    password,
  } = request.body;
  const hashedPassword = await hash(password, 10);
  try {
    await db.query(
      "UPDATE vendors SET name=$1, business_type=$2, address=$3, phone=$4, photo=$5, profile=$6, email=$7, password=$8 WHERE vendor_id=$9",
      [
        name,
        business_type,
        address,
        phone,
        photo,
        profile,
        email,
        hashedPassword,
        uid,
      ]
    );
    return response.status(200).json({
      success: true,
      message: "The changes are updated",
    });
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};

deleteVendor = async (request, response) => {
  const { uid } = request.params;
  try {
    await db.query("DELETE FROM vendors WHERE vendor_id=$1", [uid]);
    return response.status(200).json({
      success: true,
      message: `The vendor with is removed`,
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};

login = async (request, response) => {
  let user = request.user
  console.log(user)

  let payload = {
    id: user.vendor_id,
    email: user.email,
  }

  try {
    const token = await sign(payload, SECRET)

    return response.status(200).cookie('token', token, { httpOnly: true, }).json({
      success: true,
      message: 'Logged in successfully',
    })
  } catch (error) {
    console.log(error.message)
    return response.status(500).json({
      error: error.message,
    })
  }
}

logout = async (_, response) => {
  try {
    return response.status(200).clearCookie('token', { httpOnly: true }).json({
      success: true,
      message: 'Logged out successfully',
    })
  } catch (error) {
    console.log(error.message)
    return response.status(500).json({
      error: error.message,
    })
  }
}


protected = async (_, response) => {
  try {
     response.status(200).json({
      info: 'protected info',
    })
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getVendors,
  getAVendor,
  createVendor,
  updateVendor,
  deleteVendor,
  login,
  logout,
  protected
};
