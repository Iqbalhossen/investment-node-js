const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var fakeDepositSchema = new mongoose.Schema({
    amount:{
        type:String,
        required:true,
   
    },

   
});

//Export the model
module.exports = mongoose.model('fakeDeposit', fakeDepositSchema);