const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var NotificationSchema = new mongoose.Schema({
    Title:{
        type:String,
        required:true,
        
    },
    author_name:{
        type:String,
        // required:true,
        
    },
    messages:{
        type:String,
        required:true,
        
    },
    created_at: {
        type:Date
    },
    update_at: {
        type:Date
    },
  
});

//Export the model
module.exports = mongoose.model('Notification', NotificationSchema);