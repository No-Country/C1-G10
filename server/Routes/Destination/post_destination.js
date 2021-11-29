const router = require("express").Router();
const destinationController = require("../../Controllers/destinationController");
const upload = require("../../cloudinary");

/* CREATE A NEW DESTINATION MODEL */
router.post(
  "/newDestinationModel",
  upload.array("image"),
  destinationController.newDestinationModel
);

module.exports = router;
