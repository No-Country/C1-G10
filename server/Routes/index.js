const router = require("express").Router();

//***ROUTES TO REQUIRE***
//PACKAGE ROUTES
const post_package = require("./Package/post_package");
const get_package = require("./Package/get_package");
const del_package = require("./Package/del_package");
const patch_package = require("./Package/patch_package");

//DESTINATION ROUTES
const post_destination = require("./Destination/post_destination");
const get_destination = require("./Destination/get_destination");
const del_destination = require("./Destination/del_destination");

//CATEGORY ROUTES
const post_category = require("./Category/post_category");
const get_category = require("./Category/get_category");
const del_category = require("./Category/del_category");

//TYPE ROUTES
const post_type = require("./Type/post_type");
const get_type = require("./Type/get_type");
const del_type = require("./Type/del_type");

//CUSTOM PACKAGE ROUTES
const post_customPackage = require("./CustomPackage/post_customPackage");
const get_customPackage = require("./CustomPackage/get_customPackage");

//CHECKOUT ROUTES
const post_checkout = require("./Checkout/post_checkout");

//***********************************************************//

//POST
router.use(post_package);
router.use(post_destination);
router.use(post_category);
router.use(post_type);
router.use(post_customPackage);
router.use(post_checkout);

//GET
router.use(get_package);
router.use(get_type);
router.use(get_category);
router.use(get_destination);
router.use(get_customPackage);

//DELETE
router.use(del_package);
router.use(del_destination);
router.use(del_category);
router.use(del_type);

//PATCH
router.use(patch_package);

module.exports = router;
