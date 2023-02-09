const User = require('../../models/userModels');
const { ObjectId } = require('mongodb');

const AllUserShow = async (req, res) => {
    try {

        const data = await User.find()
        newData = { data }
        res.status(201).json({
            success: true,
            data: newData,
        });


    } catch (error) {
        console.log(error);
    }


};
const InactiveUser = async (req, res) => {
    try {

        const userId =  req.params.id;
        console.log(userId);
        const page = {status:false};
        const filter =  {_id : ObjectId(userId)};
        const  option = {upsert: true};



        const results =  await User.updateOne(filter, page, option);
        const newData = { results }
        console.log(newData)
        res.status(201).json({
            success: true,
            message: "Deposit successfully",
            data: newData,
        });

console.log(results)

    } catch (error) {
        console.log(error);
    }

};

const UserStore = async (req, res) => {
    const user = req.body;
    // console.log(user)
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




module.exports = { UserStore, AllUserShow, InactiveUser };
