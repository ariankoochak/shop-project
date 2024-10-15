const { Router } = require("express");
const productController = require("./product.controller");
const router = Router();

router.get("/id/:id", productController.getById);


module.exports = router;
