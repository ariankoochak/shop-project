const { Router } = require("express");
const productController = require("./product.controller");
const router = Router();

router.get("/id/:id", productController.getById);
router.get("/category/:category", productController.getByCategory);


module.exports = router;
