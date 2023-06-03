const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var CoinMiningSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        
    },
    package_id:{
        type:String,
        required:true,
    },
    package_name:{
        type:String,
        required:true,
    },
    package_amount:{
        type:String,
        required:true,
    },
    TotalProfit:{
        type:String,
        required:true,
    },
    status:{
        type:Boolean,
    },
    created_at: {
        type:Date
    },
    update_at: {
        type:Date
    },
  
});

//Export the model
module.exports = mongoose.model('CoinMining', CoinMiningSchema);