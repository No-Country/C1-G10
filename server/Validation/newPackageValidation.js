const { body, validationResult } = require("express-validator");
const Package = require("../Models/Package");

exports.validateNewPackage = [
  body("packageName")
    .notEmpty()
    .withMessage("Por favor ingrese nombre de la promo.")
    .custom(async (name) => {
      try {
        const packageName = await Package.findOne({
          packageName: new RegExp("^" + name + "$", "i"),
        });
        if (packageName) return Promise.reject();
      } catch (error) {
        throw error;
      }
    })
    .withMessage("Nombre de promo ya utilizado, por favor intente otro"),
  body("currency")
    .notEmpty()
    .withMessage("Por favor ingrese un tipo de moneda."),
  body("totalCost").notEmpty().withMessage("Por favor ingrese un valor."),

  (req, res, next) => {
    const validationErrors = validationResult(req);
    if (!validationErrors.isEmpty())
      return res
        .status(500)
        .json({ validationErrors: validationErrors.array() });
    next();
  },
];
