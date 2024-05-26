const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// Users Endpoint
router.get("/users", userController.getAllUsers);
router.get("/users/:id", userController.getUser);
router.post("/createUser", userController.createNewUser);
router.delete("/deleteUser", userController.deleteOldUser);
router.put("/updateUser", userController.updateOldUser);
module.exports = router;