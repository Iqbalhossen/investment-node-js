const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require('bcrypt');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
         
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    reference:{
        type:String,
        required:true,
    },
    level:{
        type:String,
    },
    picture:{
        type:String,
    },
    is_verified:{
        type:Boolean,
    },
    status:{
        type:Boolean,
    },
    password:{
        type:String,
        required:true,
    },
    created_at:{
        type:String,
    },
});


//Export the model
module.exports = mongoose.model('User', userSchema);