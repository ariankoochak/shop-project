const { Schema, model } = require("mongoose");

const userSchema = new Schema(
    {
        email: { type: String, require: true, trim: true, minlength: 2 ,unique: true},
        password: { type: String, require: true, trim: true, minlength: 2 },
        liveBasket: { type: Array, require: false },
    },
    {
        timestamps: true,
    }
);

const userModel = model("users", userSchema);
module.exports = {
    userModel,
};
