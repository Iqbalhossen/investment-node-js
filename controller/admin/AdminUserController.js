const User = require('../../models/userModels');
const { ObjectId } = require('mongodb');


const UserStore = async (req, res) => {
    const user = req.body;
console.log(user)
    try {

        const email = req.body.email;
        const userName = req.body.userName;
        const cpassword = req.body.cpassword;
        const password = req.body.password;
        const existsEmail = await User.findOne({ email: email });
        const existsuserName = await User.findOne({ userName: userName });

        if (existsEmail) {
            return res.status(400).json({
                success: false,
                message: "Email Already Exists",
            });

        }

        if (password !== cpassword) {
            return res.status(400).json({
                success: false,
                message: "Confirm password not match",
            });

        }

        if (!userName) {
            return res.status(400).json({
                success: false,
                message: "User Name is required",
            });
        }

        if (existsuserName) {
            return res.status(400).json({
                success: false,
                message: "User Name Already token",
            });
        }
      


        const data = await User.create(user);
        const newData = { data }

        // console.log(newData);
        res.status(201).json({
            success: true,
            message: "User Create successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};




module.exports = { UserStore };
