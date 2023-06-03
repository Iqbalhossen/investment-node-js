const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var InviteGenerationSchema = new mongoose.Schema({
    user_name:{ 
        type:String,
        required:true,
        
    },
    generation_user_name:{
        type:String,
        required:true,
        
    },
    generation:{
        type:String,
        required:true,
        
    },
    count:{
        type:Number,
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
module.exports = mongoose.model('InviteGeneration', InviteGenerationSchema);