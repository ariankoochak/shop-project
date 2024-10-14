const { userModel } = require("./user.model");

class userServices {
    async create(email, password) {
        try {
            const emailExist = await userModel.findOne({ email: email });
            if (emailExist === null) {
                const result = await userModel.create({ email, password });
                return result._id ? true : false;
            }
            return false;
        } catch (err) {
            return err;
        }
    }
    async authentication(email, password) {
        try {
            const result = await userModel.findOne({email : email,password : password});
            if(result === null){
                return false
            }
            else{
                return result
            }
        } catch (err) {
            return err
        }
    }

    async resetPassword(email,oldPassword,newPassword){
         try {
            const result = await userModel.updateOne({email : email,password : oldPassword},{$set : {password : newPassword}})
            return result;
        } catch (err) {
            return err
        }
    }
}

module.exports = new userServices();
