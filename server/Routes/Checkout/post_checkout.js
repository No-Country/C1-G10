const router = require("express").Router();
const checkoutController = require("../../Controllers/checkoutController");

router.post("/checkout", checkoutController.createCheckoutSession);

module.exports = router;
