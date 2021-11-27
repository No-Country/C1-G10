const router = require("express").Router();

//***ROUTES TO REQUIRE***
//PACKAGE ROUTES
const post_package = require("./Package/post_package");
const get_package = require("./Package/get_package");
const delete_package = require("./Package/del_package");
const patch_package = require("./Package/patch_package");

//IMAGES ROUTES
const post_images = require("./Images/post_images");

//DESTINATION ROUTES
const post_destination = require("./Destination/post_destination");

//CATEGORY ROUTES
const post_category = require("./Category/post_category");

//TYPE ROUTES
const post_type = require("./Type/post_type");

//***********************************************************//

//POST
router.use(post_package);
router.use(post_images);
router.use(post_destination);
router.use(post_category);
router.use(post_type);

//GET
router.use(get_package);

//DELETE
router.use(delete_package);

//PATCH
router.use(patch_package);

module.exports = router;