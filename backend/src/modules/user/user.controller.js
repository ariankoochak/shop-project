const {isEmail} = require('valiend');
const userServices = require('./user.services');

class userController {
    async createUser(req,res,next){
        try {
            const {email , password} = req.body;
            if(isEmail(email) === true){
                const result = await userServices.createUser(email,password);
                if(result === true){
                    res.status = 201;
                    res.send('user created successfully')
                }
                else{
                    throw{
                        status : 409,
                        message : 'email is duplicated!'
                    }
                }
                
            }
            else{
                throw{
                    status : 400,
                    message : 'invalid email format'
                }
            }
            
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new userController