const { Router } = require("express");
const router = Router();

const userRouter = require('../user/user.routes')

router.use("/user", userRouter);


module.exports = router;
