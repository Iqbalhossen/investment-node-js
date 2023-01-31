const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var WithdrawSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
         
    },
    amount:{
        type:String,
        required:true,
    },
    amountWithVat:{
        type:String,
        required:true,
    },
    wallet:{
        type:String,
        required:true,
    },
    status:{
        type:Number,
    },
    created_at:{
        type:String,
    },
});

//Export the model
module.exports = mongoose.model('Withdraw', WithdrawSchema);