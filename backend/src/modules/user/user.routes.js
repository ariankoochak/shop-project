const { Router } = require("express");
const userController = require("./user.controller");
const router = Router();

router.post("/create",userController.create);
router.post("/auth",userController.authentication);
router.post("/reset-pass",userController.resetPassword);
router.post("/basket/add", userController.addToBasket);
router.post("/basket/remove", userController.removeFromBasket);
router.get("/basket/:email",userController.getBasket);
router.delete("/basket/:email", userController.emptyBasket);



module.exports = router;
