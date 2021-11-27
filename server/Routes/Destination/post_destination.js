const router = require("express").Router();
const destinationController = require("../../Controllers/destinationController");

/* CREATE A NEW DESTINATION MODEL */
router.post("/newDestinationModel", destinationController.newDestinationModel);

module.exports = router;
