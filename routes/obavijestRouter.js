const express = require("express");
const router = express.Router();
const Controller = require("../controllers/obavijestController");

// Users Endpoint
router.get("/notifications", Controller.getAllNotifications);


module.exports = router;