const { Schema, model } = require("mongoose");

const productSchema = new Schema(
    {
        name: { type: String, require: true },
        price: { type: String, require: true },
        category: { type: String, require: true },
        imageName: { type: String, require: true },
    },
    {
        timestamps: true,
    }
);

const productModel = model("products", productSchema);
module.exports = {
    productModel,
};
