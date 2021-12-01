const router = require("express").Router();
const destinationController = require("../../Controllers/destinationController");

/* DELETE A DESTINATION MODEL */
router.delete(
  "/deleteDestination/:id",
  destinationController.deleteADestination
);

module.exports = router;
