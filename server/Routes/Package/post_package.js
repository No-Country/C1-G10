const router = require("express").Router();
const packageController = require("../../Controllers/packageController");
const multer = require("multer");
const newPackageValidation = require("../../Validation/newPackageValidation");

/* const storage = multer.diskStorage({
  filename: (req, file, cb) => {
    // THE IMAGE DEFAULT NAME
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2000000 },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      const err = new Error("Only .png, .jpg and .jpeg format allowed!");
      err.name = "ExtensionError";
      return cb(err);
    }
  },
}); */

/* CREATE NEW PACKAGE */
router.post(
  "/newPackage",
  //upload.array("image", 5),
  newPackageValidation.validateNewPackage,
  packageController.newPackage
);

module.exports = router;
