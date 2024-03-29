const db = require("../db/dbConfig");

//get all the merchandises
getAllMerchandises = async (request, response) => {
  try {
    const { rows } = await db.query("SELECT * FROM merchandises");
   
    return response.status(200).json({
      success: true,
      merchandises: rows,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
    })
  }
};

//get a specific merchandise by owner id
getVendorMerchandises = async (request, response) => {
  const { id } = request.params;

  try {
    const { rows } = await db.query(
      "SELECT * FROM merchandises WHERE owner_id=$1",
      [id]
    );
   
    return response.status(200).json({
      rows,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
    })
  }
};

//get a specific merchandise by owner id
getAMerchandise = async (request, response) => {
  const { id } = request.params;
 
  try {
    const { rows } = await db.query(
      "SELECT * FROM merchandises WHERE merchan_id=$1",
      [id]
    );
  
    return response.status(200).json({
      rows,
    });
  } catch (error) {
    return response.status(500).json({
      error: error.message,
    })
  }
};

//creates a merchandise
createMerchandise = async (request, response) => {

  const { category, address, location, image, owner_id } = request.body;
  try {
    await db.query(
      "INSERT INTO merchandises(category, address, location, image, owner_id) VALUES ($1, $2, $3, $4,$5)",
      [category, address, location, image, owner_id]
    );
    return response.status(201).json({
      success: true,
      message: "The post was successful",
    });
  } catch (error) {
  
    return response.status(500).json({
      error: error.message,
    });
  }
};

updateMerchandise = async (request, response) => {
  const { uid } = request.params;
  const { category, address,location, image, owner_id } = request.body;
  try {
    await db.query(
      "UPDATE merchandises SET category=$1, address=$2, location=$3, image=$4, owner_id=$5 WHERE merchan_id=$6",
      [category, address, location, image, owner_id, uid]
    );
    return response.status(200).json({
      success: true,
      message: "The product has been updated!",
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};


deleteProduct = async (request, response) => {
  const { uid } = request.params;
  const {merchan_id } = request.body
  let saveId = new Array(merchan_id)

  try {
    await db.query("DELETE FROM merchandises WHERE merchan_id=$1", [uid]);

    return response.status(200).json({
      success: true,
      message: `The product is successfully removed`,
    });
  } catch (error) {
    response.status(500).json({
      error: error.message,
    });
  }
};
// rgb(22,35,45) background body
// 16232D
//00BFFE rgb(0,191,254) sign button
//E8F0F4 rgb(232,240,244) sign in window background-color
module.exports = {
  getAllMerchandises,
  getVendorMerchandises,
  getAMerchandise,
  createMerchandise,
  updateMerchandise,
  deleteProduct
};
