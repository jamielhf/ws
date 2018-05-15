require('../util/connect');
const monogoose = require('mongoose');

UserSchema = new monogoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const UserModel = monogoose.model('users',UserSchema);

module.exports = UserModel