const { isEmail } = require("valiend");
const md5 = require("md5");
const userServices = require("./user.services");
const productServices = require('../product/product.service');


class userController {
    async create(req, res, next) {
        try {
            const { email, password } = req.body;
            if (isEmail(email) === true) {
                const result = await userServices.create(email, md5(password));
                if (result !== false) {
                    res.status(201);
                    res.send(result);
                } else {
                    throw {
                        status: 409,
                        message: "email is duplicated!",
                    };
                }
            } else {
                throw {
                    status: 400,
                    message: "invalid email format",
                };
            }
        } catch (err) {
            next(err);
        }
    }
    async authentication(req, res, next) {
        try {
            const { email, password } = req.body;
            const result = await userServices.authentication(
                email,
                md5(password)
            );
            if (result !== false) {
                res.status(200);
                res.send(result);
            } else {
                throw {
                    status: 401,
                    message: "invalid auth",
                };
            }
        } catch (err) {
            next(err);
        }
    }
    async resetPassword(req, res, next) {
        try {
            const { email, oldPassword, newPassword } = req.body;
            const result = await userServices.resetPassword(
                email,
                md5(oldPassword),
                md5(newPassword)
            );
            if (result?.modifiedCount) {
                const userData = await userServices.authentication(
                    email,
                    md5(newPassword)
                );
                res.status(201);
                res.send(userData);
            } else {
                throw {
                    status: 400,
                    message: "bad request",
                };
            }
        } catch (err) {
            next(err);
        }
    }

    async getBasket(req,res,next){
        try {
            const {email} = req.params;
            const result = await userServices.getBasket(email);
            res.send(result);
        } catch (err) {
            next(err)
        }
    }

    async addToBasket(req, res, next) {
        try {
            const { email, productId, count } = req.body;
            const validateProductId = productServices.getById(productId);
            if (validateProductId !== null) {
                const result = await userServices.changeBasket(
                    email,
                    productId,
                    Number(count)
                );
                if (result) {
                    res.status(201);
                    res.send(result);
                } else {
                    throw {};
                }
            }
        } catch (err) {
            next(err);
        }
    }

    async removeFromBasket(req, res, next) {
        try {
            const { email, productId, count } = req.body;
            const validateProductId = productServices.getById(productId);
            if (validateProductId !== null) {
                const result = await userServices.changeBasket(
                    email,
                    productId,
                    Number(count)
                );
                if (result) {
                    res.status(201);
                    res.send(result);
                } else {
                    throw {};
                }
            }
        } catch (err) {
            next(err);
        }
    }

    async emptyBasket(req,res,next){
        try {
            const {email} = req.params;
            const result = userServices.emptyBasket(email);
            res.status(201).send(result)
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new userController();
