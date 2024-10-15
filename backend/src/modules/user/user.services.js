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

    async changeBasket(email,productId,count){
        try {
            const user = await userModel.findOne({email : email});
            if(user === null){
                return false
            }
            else{
                const pushArr = []
                let flag = false
                for (const product of user.liveBasket) {
                    if(product[0] === productId){
                        flag = true
                        pushArr.push([product[0],product[1]+count])
                    }
                    else{
                        pushArr.push(product)
                    }
                }
                if(flag === false){
                    pushArr.push([productId,count])
                }
                return await userModel.updateOne({email : email},{$set : {liveBasket : [...pushArr]}});
            }
        } catch (err) {
            return err
        }
    }
}

module.exports = new userServices();
