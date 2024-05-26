const { getUsers } = require("../models/userModel");


const getAllUsers=async (req, res) => {
  let data = [];
  try {
    data = await getUsers();
    res.render("index",{Users:data});
   // res.render("show",{users:data});
    // res.json({ msg: "success", data: data });
  } catch (error) {
    res.json({ msg: error, data: [] });
  }
};

module.exports = {
    getAllUsers,
  }