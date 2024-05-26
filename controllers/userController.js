const { getUsers,getUserById,createUser,deleteUser,updateUser} = require("../models/userModel");


const getAllUsers=async(req, res) => {
  console.log("/api/USERS GET endpoint was hit! 🙌");
  getUsers().then((result) => {
    // Manipulate the queried data or just send it straight back to the frontend
    //res.status(200).send(result);
    res.render('rezerva',{Users:result});
  });
}

const getUser=async(req, res) => {
  const id = parseInt(req.params.id)
  console.log("/api/USERS GET endpoint was hit! 🙌");
  getUserById(id).then((result) => {
    // Manipulate the queried data or just send it straight back to the frontend
   // res.status(200).send(result);
   res.render('rezerva',{Users:result});
  });
}

const createNewUser=async(req, res) => {
  console.log(req.body);
  const User=req.body;
  createUser(User).then((result) => {
    
  });
}

const deleteOldUser=async(req, res) => {
  console.log(req.body);
  const User=req.body;
  deleteUser(User).then((result) => {
    
  });
}
const updateOldUser=async(req, res) => {
  console.log(req.body);
  const User=req.body;
  updateUser(User).then((result) => {
    
  });
}
module.exports = {
    getAllUsers,
    getUser,
    createNewUser,
    deleteOldUser,
    updateOldUser,
  }