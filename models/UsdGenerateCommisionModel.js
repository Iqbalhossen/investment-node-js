const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var UsdGenerateCommisionSchema = new mongoose.Schema({
    user_name:{ 
        type:String,
        required:true,
        
    },
    package_id:{
        type:String,
         
    },
    commision:{
        type:String,
        required:true,
    },
    status:{
        type:String,
    },
    time:{
        type:String,
    },
    created_at: {
        type:Date
    },
    update_at: {
        type:Date
    },
  
});

//Export the model
module.exports = mongoose.model('UsdGenerateCommision', UsdGenerateCommisionSchema);