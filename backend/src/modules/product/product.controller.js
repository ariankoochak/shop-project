const productService = require("./product.service");

class productController{
    async getById(req,res,next){
        try {
            const {id} = req.params;
            const result = await productService.getById(id);
            if(result !== null){
                res.status(200);
                res.send(result)
            }
            else{
                throw{
                    status : 404,
                    message : 'product not found!'
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new productController;