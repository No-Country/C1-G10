const { body, validationResult } = require("express-validator");
const Package = require("../Models/Package");

exports.validateNewPackage = [
  body("packageName")
    .notEmpty()
    .withMessage("Por favor ingrese nombre de la promo.")
    .custom(async (name) => {
      try {
        const packageName = await Package.findOne({
          name: new RegExp("^" + name + "$", "i"),
        });
      } catch (error) {
        throw error;
      }
    })
    .withMessage("Nombre de promo y utilizado, por favor intente otro"),
];
