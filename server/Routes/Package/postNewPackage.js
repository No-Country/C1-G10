const router = require("express").Router();
const packageController = require("../../Controllers/packageController");
const multer = require("multer");

router.post("/newPackage", packageController.newPackage);
