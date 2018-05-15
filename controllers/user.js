const User = require('../models/user');
const query = require('../util/db-util');


const userController  = {
    async login(ctx,next){
        let res = await query.find(User,{});
        
        if(res.length == 0){
            res = {}
        }
        ctx.body = res
    }
}


module.exports = userController