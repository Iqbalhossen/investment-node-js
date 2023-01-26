const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var DepositPackegeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        
    },
    amount:{
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
module.exports = mongoose.model('DepositPackage', DepositPackegeSchema);