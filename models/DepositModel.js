const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var depositSchema = new mongoose.Schema({
    amount:{
        type:String,
        required:true,
   
    },
    User_id:{
        type:String,
        required:true,
    },
    usd_net:{
        type:String,
    },
    transaction_id:{
        type:String,
        required:true,
    },
    status: {
        type:Number
    },
    created_at: {
        type:Date
    },
    update_at: {
        type:Date
    },
   
});

//Export the model
module.exports = mongoose.model('Deposit', depositSchema);