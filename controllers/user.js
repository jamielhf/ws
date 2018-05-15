const User = require('../models/user');
const query = require('../util/db-util');


const userController  = {
    async login(ctx,next){
        let res = await query.find(User,{});
        
        if(res.length == 0){
            res = {}
        }
        await ctx.render('login', {
            title: 'Hello Koa 2!'
          })
        
    },
    async register(ctx,next){
        await ctx.render('register',{})
    }
}


module.exports = userController