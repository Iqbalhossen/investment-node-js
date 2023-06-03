const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var fakeUserSchema = new mongoose.Schema({
    user:{
        type:String,
        required:true,
   
    },

   
});

//Export the model
module.exports = mongoose.model('fakeUser', fakeUserSchema);