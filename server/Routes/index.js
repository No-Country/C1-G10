const router = require("express").Router();

//ROUTES TO REQUIRE
const post_package = require("./Package/post_package");
const get_package = require("./Package/get_package");
const delete_package = require("./Package/del_package");

//POST
router.use(post_package);

//GET
router.use(get_package);

//DELETE
router.use(delete_package);

module.exports = router;
