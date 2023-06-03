const mongoose = require('mongoose'); // Erase if already required
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
         
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    reference:{
        type:String,
        required:true,
    },
    level:{
        type:String,
    },
    picture:{
        type:String,
    },
    is_verified:{
        type:Boolean,
    },
    status:{
        type:Boolean,
    },
    bio:{
        type:String,
    },
    password:{
        type:String,
        required:true,
    },
    created_at:{
        type:String,
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
});

// Token Generate 

// userSchema.methods.generateAuthToken = async function (){
//         try {
//             const token = jwt.sign({_id: this._id.toString()}, "oefhilghwilfhwoifewofihwgshgksjfdkdghrk");
//             console.log(token)
//             this.tokens = this.tokens.concat({token:token});
//             await this.save();
//             return token;
//         } catch (error) {
            
//         }
// }

// userSchema.methods.generateAuthToken = async function() {
//     const user = this    
//     const token = jwt.sign({_id:user._id.toString()},'thisisnewcourse')
//     return token}

// Token Generate 


// userSchema.pre("save", async function(next){
//     const salt = await bcrypt.genSaltSync(10);
//     this.password = await bcrypt.hash(this.password, salt);
// });

// userSchema.methods.isPasswordMatched = async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword, this.password);

// }
//Export the model
module.exports = mongoose.model('User', userSchema);