const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var UsdGeneratePackageSchema = new mongoose.Schema({
    usd_generate_package_name:{ 
        type:String,
        required:true,
        
    },
    usd_generate_package_amount:{
        type:String,
        required:true,
        
    },
    total_profit:{
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
module.exports = mongoose.model('UsdGeneratePackage', UsdGeneratePackageSchema);