const {productModel} = require('./product.model')


class productService{
    async getById(id){
        try {
            const result = productModel.findById(id);
            return result
        } catch (err) {
            return err
        }
    }
}

module.exports = new productService;