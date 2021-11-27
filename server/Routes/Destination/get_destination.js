const router = require("express").Router();
const destinationController = require("../../Controllers/destinationController");

/* GET ALL DESTINATION MODELS */
router.get("/getAllDestinations", destinationController.getAllDestinations);

module.exports = router;
