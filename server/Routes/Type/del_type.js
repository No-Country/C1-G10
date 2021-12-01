const router = require("express").Router();
const typeController = require("../../Controllers/typeController");

/*DELETE A TYPE MODEL  */

router.delete("/deleteType/:id", typeController.deleteAType);

module.exports = router;
