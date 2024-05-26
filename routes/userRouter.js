const router = require("express").Router();
const {getAllUsers} = require("../controllers/userController");

router.route("/getUsers").get(getAllUsers);

module.exports = router;