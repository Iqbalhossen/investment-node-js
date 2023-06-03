const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var AdminWithdrawEmailSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
   
    },
    email:{
        type:String,
        required:true,
    },
    created_at: {
        type:Date
    },
   
});

//Export the model
module.exports = mongoose.model('AdminWithdrawEmail', AdminWithdrawEmailSchema);