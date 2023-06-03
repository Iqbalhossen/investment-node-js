const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var CoinMinigTeamSellsSchema = new mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        
    },
    generation_user_name:{
        type:String,
        required:true,
        
    },
    commision:{
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
module.exports = mongoose.model('CoinMinigTeamSells', CoinMinigTeamSellsSchema);