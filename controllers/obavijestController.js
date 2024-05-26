const {getNotifications } = require("../models/obavijestModel");

const getAllNotifications=async(req, res) => {
    console.log("/api/USERS GET endpoint was hit! 🙌");
    getNotifications().then((result) => {
      // Manipulate the queried data or just send it straight back to the frontend
      //res.status(200).send(result);
      res.render('notifications',{obavijesti:result});
    });
  }

  module.exports = {
    getAllNotifications,
  }