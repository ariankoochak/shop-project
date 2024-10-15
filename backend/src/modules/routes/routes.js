const { Router } = require("express");
const router = Router();

const userRouter = require('../user/user.routes')
const productRouter = require('../product/product.routes')

router.use("/user", userRouter);
router.use("/product", productRouter);



module.exports = router;
