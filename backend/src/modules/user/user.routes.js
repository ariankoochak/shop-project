const { Router } = require("express");
const userController = require("./user.controller");
const router = Router();

router.post("/create",userController.create);
router.get("/auth",userController.authentication);
router.get("/reset-pass",userController.resetPassword)

module.exports = router;
