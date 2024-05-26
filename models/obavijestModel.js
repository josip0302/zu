const pool = require("../config/db");

const getNotifications = () => {
    console.log("/api/USERS database query made");
    return pool
      .query("SELECT * FROM zupna_obavijest order by idobavijesti asc")
      .then((results) => results["rows"])
      .catch((err) => console.log(err));
  }

  module.exports = {
    getNotifications,
  }