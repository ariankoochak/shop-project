const {isEmail} = require('valiend');
const userServices = require('./user.services');

class userController {
    async create(req,res,next){
        try {
            const {email , password} = req.body;
            if(isEmail(email) === true){
                const result = await userServices.create(email,password);
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
    async authentication(req,res,next){
        try {
            const {email,password} = req.body;
            const result = await userServices.authentication(email,password);
            if(result !== false){
                res.status = 200;
                res.send(result)
            }
            else{
                throw{
                    status : 401,
                    message : 'invalid auth'
                }
            }
        } catch (err) {
            next(err)
        }
    }
}

module.exports = new userController