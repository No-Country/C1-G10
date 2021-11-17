const router = require("express").Router();
const userController = require("../Controllers/userController");

/* CREATE NEW USER */

router.post("/newUser", userController.newUser);

module.exports = router;
