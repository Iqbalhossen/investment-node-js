const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var MonthlyFDPPackageSchema = new mongoose.Schema({
    user_name:{
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
    time:{
        type:String,
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
module.exports = mongoose.model('MonthlyFDPPackage', MonthlyFDPPackageSchema);