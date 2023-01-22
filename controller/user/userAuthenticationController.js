const User= require('../../models/userModels');

const viewUser = async (req, res) => {
    res.send('User View Successful');
}

const createUser = async (req, res) => {
    const email = req.body.email;
    const existsEmail = await User.findOne({email:email});
    if(!existsEmail){

        const newUser = User.create(req.body);
        res.json(newUser);
     

     
    }else{
        res.json({
            message:'user Already Exists',
            success: false,
        });
    }
};


module.exports = {viewUser, createUser};