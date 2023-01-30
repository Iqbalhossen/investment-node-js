const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var BonusBalanceSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true,
   
    },
    user_name:{
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
module.exports = mongoose.model('BonusBalance', BonusBalanceSchema);