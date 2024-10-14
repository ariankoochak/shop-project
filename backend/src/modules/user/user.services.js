const {userModel} = require('./user.model')

class userServices{
    async createUser(email,password){
        try {
            const emailExist = await userModel.findOne({email : email});
            if(emailExist === null){
                const result = await userModel.create({email,password})        
                return result._id ? true : false;
            }
            return false
        } catch (err) {
            return err
        }
    }
}

module.exports = new userServices;