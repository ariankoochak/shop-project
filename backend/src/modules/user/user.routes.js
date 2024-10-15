const { Router } = require("express");
const userController = require("./user.controller");
const router = Router();

router.post("/create",userController.create);
router.get("/auth",userController.authentication);
router.get("/reset-pass",userController.resetPassword);
router.post("/basket/add", userController.addToBasket);
router.post("/basket/remove", userController.create);


module.exports = router;
