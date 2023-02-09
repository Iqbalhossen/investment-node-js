const User = require('../../models/userModels');
const InviteGeneration = require('../../models/InviteGenerationModel');
const { ObjectId } = require('mongodb');

const nodemailer = require('nodemailer');

const {sendVerifyEmail, ForgotPasswordSendEmail} = require('./../../Commonfile/Mail/sendVerifyEmail');

const viewUser = async (req, res) => {
    const userName = req.params.userName;
    const id = req.params.id;

    const query =  {_id : ObjectId(id) , userName: userName };

    const data = await User.findOne(query)
    // newData = {data}
    res.status(201).json({
        success: true,
        message: "User Show",
        data: data,
    });

// console.log(data)
}






/////////////////////// Login Section Start  ////////////////////////////////////////////////////////

const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const existsEmail = await User.findOne({ email: email });
    const status = { status: 1 }
    const existsStatus = await User.findOne(status);
    const existspassword = await User.findOne({ password: password });
    // if(!existsStatus){
    //     return   res.status(400).json({
    //            success:false,
    //            message:"Please contact Admin",
    //        });

    //    }
    // console.log(await existsEmail.isPasswordMatched(password))
    if (!existsEmail) {
        return res.status(400).json({
            success: false,
            message: "Email Invalid",
        });

    }
   

    res.status(201).json({
        success: true,
        message: "Login successful",
        data: existsEmail,
    });
};





/////////////////////// Login Section End  ////////////////////////////////////////////////////////





/////////////////////// user create by user name Section Start  ////////////////////////////////////////////////////////


const createUser = async (req, res) => {
    const user = req.body;
    // console.log(user)

    try {

        const email = req.body.email;
        const userName = req.body.userName;
        const cpassword = req.body.cpassword;
        const password = req.body.password;
        const reference = req.body.reference;
        const existsEmail = await User.findOne({ email: email });
        const existsuserName = await User.findOne({ userName: userName });
        const existsreferenceId = await User.find({ userName: reference });

        if (existsEmail) {
            return res.status(400).json({
                success: false,
                email: "Email Already Exists",
            });

        }

        if (password !== cpassword) {
            return res.status(400).json({
                success: false,
                cpassword: "Confirm password not match",
            });

        }

        if (!userName) {
            return res.status(400).json({
                success: false,
                username: "User Name is required",
            });
        }

        if (existsuserName) {
            return res.status(400).json({
                success: false,
                usernametoken: "User Name Already token",
            });
        }
        if (!existsreferenceId) {
            return res.status(400).json({
                success: false,
                Reference: "Reference Invalid",
            });
        }

        // console.log(existsreferenceId);

        // //////////// Insert Section 

        const users = await User.create(user);


        if(user){
            sendVerifyEmail(req.body.name, email, users._id ,userName)
        }

        ////////////////////////////////////// Generation Insert Start


        // const first = { user_name: reference, generation_user_name: userName, generation: "1st Gen", created_at: user.created_at };

        // await InviteGeneration.create(first);

        // const existsecount = await InviteGeneration.findOne({ generation_user_name: reference });



        // if (existsecount !== null) {

        //     const secound = { user_name: existsecount.user_name, generation_user_name: userName, generation: "2nd Gen", created_at: user.created_at };

        //     const data = await InviteGeneration.create(secound);

        //     const existthird = await InviteGeneration.findOne({ generation_user_name: existsecount.user_name });

        //     if (existthird !== null) {

        //         const third = { user_name: existthird.user_name, generation_user_name: userName, generation: "3rd Gen", created_at: user.created_at };

        //         const data = await InviteGeneration.create(third);

        //         const existfour = await InviteGeneration.findOne({ generation_user_name: existthird.user_name });

        //         if (existfour !== null) {

        //             const four = { user_name: existfour.user_name, generation_user_name: userName, generation: "4th Gen", created_at: user.created_at };

        //             const data = await InviteGeneration.create(four);

        //             const existfive = await InviteGeneration.findOne({ generation_user_name: existfour.user_name });

        //             if (existfive !== null) {
        //                 const five = { user_name: existfive.user_name, generation_user_name: userName, generation: "5th Gen", created_at: user.created_at };

        //                 const data = await InviteGeneration.create(five);

        //                 const existsix = await InviteGeneration.findOne({ generation_user_name: existfive.user_name });

        //                 if (existsix !== null) {
        //                     const six = { user_name: existsix.user_name, generation_user_name: userName, generation: "6th Gen", created_at: user.created_at };

        //                     const data = await InviteGeneration.create(six);

        //                     const existseven = await InviteGeneration.findOne({ generation_user_name: existsix.user_name });

        //                     if(existseven !== null){
        //                         const seven = { user_name: existseven.user_name, generation_user_name: userName, generation: "7th Gen", created_at: user.created_at };

        //                     const data = await InviteGeneration.create(seven);

        //                     const existeight= await InviteGeneration.findOne({ generation_user_name: existseven.user_name });
        //                     if(existeight !== null){
        //                         const eight = { user_name: existeight.user_name, generation_user_name: userName, generation: "8th Gen", created_at: user.created_at };

        //                         const data = await InviteGeneration.create(eight);
    
        //                         const existnine= await InviteGeneration.findOne({ generation_user_name: existeight.user_name });
        //                         if(existnine !== null){
        //                             const nine = { user_name: existnine.user_name, generation_user_name: userName, generation: "9th Gen", created_at: user.created_at };

        //                             const data = await InviteGeneration.create(nine);
        
        //                             const existten= await InviteGeneration.findOne({ generation_user_name: existnine.user_name });
        //                             if(existten !== null){
        //                                 const ten = { user_name: existten.user_name, generation_user_name: userName, generation: "10th Gen", created_at: user.created_at };

        //                                 const data = await InviteGeneration.create(ten);
        //                                 console.log(data)
        //                             }
        //                         }
        //                     }
        //                     }
                         

        //                 }

                        
        //             }

        //         }


        //     }
        // }

        /////////////////////////////////////////// Generation Insert End

        res.status(201).json({
            success: true,
            message: "Register successful",
            data: users,
        });



    } catch (error) {
        console.log(error);
    }


};


const verifyEmail = async (req, res) => {

    try {

    const id =  req.params.id;
    const page = {is_verified:true};
    const filter =  {_id : ObjectId(id)};
    const  option = {upsert: true};


    const findUser =  await User.findOne(filter);


    if(findUser.is_verified === false){
        
    const data =  await User.updateOne(filter, page, option);
    res.status(201).json({
        success: true,
        message: "Verify successful",
        data: data,
    });
        
    }else{
        res.status(401).json({
            success: false,
            message: "Already Verified",
        });
    }

     

    } catch (error) {
        console.log(error);
    }

   
};

const verifyEmailSend = async (req, res) => {

    try {

    const oldid =  req.params.user_id;



    const filter =  {_id : ObjectId(oldid)};

    const data =  await User.findOne(filter);
    // console.log(data)


    if(data){
        if(data.is_verified === false)
        sendVerifyEmail(data.name, data.email, data._id ,data.userName);
        res.status(201).json({
            success: true,
            message: "Please Check Your Email",
        });
    }
    else{
        res.status(201).json({
            success: false,
            message: "Already Verified Your Account!",
        });
    }

    } catch (error) {
        console.log(error);
    }

   
};



/////////////////////// user create by uer name Section end  ////////////////////////////////////////////////////////










/////////////////////// Login Section Start  ////////////////////////////////////////////////////////









/////////////////////// Login Section Start  ////////////////////////////////////////////////////////


/////////////////////// Invite Section Start  ////////////////////////////////////////////////////////


const InviteUser = async (req, res) => {
    const userName = req.params.userName;
    const userId = req.params.id;
    // const user = { _id : ObjectId(newid)};
    const user = await User.findOne({ _id: ObjectId(userId) });
    const existsUser = await User.findOne({ userName: userName });
    if (!existsUser) {

        res.json({
            message: 'user name Invalid',
            success: false,
        });


    } else {

        if (user) {
            res.json({
                message: 'Invlite',
                success: true,
            });
        } else {
            res.json({
                message: 'Reference Invalid',
                success: false,
            });
        }

    }
};




/////////////////////// Invie Section end  ////////////////////////////////////////////////////////






/////////////////////// Login Section Start  ////////////////////////////////////////////////////////



const InviteUserCreate = async (req, res) => {
    const email = req.body.email;
    const userName = req.body.userName;
    // const email = req.body.email;
    const existsEmail = await User.findOne({ userName: userName });
    if (!existsEmail) {

        res.json({
            message: 'Invite',
            success: true,
        });

    } else {
        res.json({
            message: 'user name Invalid',
            success: false,
        });
    }
};







const InviteUserbyUrl = async (req, res) => {
    const email = req.body.email;
    const userName = req.body.userName;
    const existsEmail = await User.findOne({ email: email });
    const existsuserName = await User.findOne({ userName: userName });
    if (!existsEmail) {

        if (!existsuserName) {
            const newUser = User.create(req.body);
            res.json(newUser);
        } else {
            res.json({
                message: 'User name already token',
                success: false,
            });


        }

    } else {
        res.json({
            message: 'Email Already Exists',
            success: false,
        });
    }
};


const ForgotPassword = async (req, res) => {
    const email = req.body.email;
    const existsEmail = await User.findOne({ email: email });
    if (existsEmail) {

        ForgotPasswordSendEmail(existsEmail.name, existsEmail.email, existsEmail._id);
        res.status(201).json({
            message: 'Check Your Email',
            success: true,
        });

    } else {
        res.status(401).json({
            message: 'Email Not Register',
            success: false,
        });
    }
};

const ResetPassword = async (req, res) => {
    const id =  req.params.id;
    const password =  req.body.password;
    const cpassword =  req.body.cpassword;
    const page = {password:password};
    const filter =  {_id : ObjectId(id)};
    const  option = {upsert: true};

    const existsEmail = await User.findOne(filter);
    if (existsEmail) {

        if(password === cpassword){
            
        const data =  await User.updateOne(filter, page, option);
        res.status(201).json({
            success: true,
            message: "Password Reset Successful",
            data: data,
        });
        }else{
            res.status(401).json({
                message: 'Confirm password does not match!',
                success: false,
            });

        }



    } else {
        res.status(401).json({
            message: 'Email Not Register',
            success: false,
        });
    }
};
const ChangeProfile = async (req, res , next) => {


    try {
        const id =  req.params.id;
        const email =  req.body.email;
        const image =  `${req?.file?.path ? req?.file?.path : null}`;
        const filter =  {_id : ObjectId(id)};
        const existsUser = await User.findOne(filter);
        const existsEmail = await User.findOne({email:email});

        if (existsEmail) {
            return res.status(400).json({
                success: false,
                message: "Email Already Token",
            });
    
        }
        
console.log(req.body)
        const  option = {upsert: true};
        if(!image && existsUser){

            if(!email){
                const user = {name: req.body.name}
                const data =  await User.updateOne(filter, user, option);
                res.status(201).json({
                    success: true,
                    message: "Profile Update Successful",
                    data: existsEmail,
                });
            }else{
                const user = {name: req.body.name ,  email:`${req.body.email ? req.body.email :existsEmail.email }`, is_verified:false }
                const data =  await User.updateOne(filter, user, option);
                res.status(201).json({
                    success: true,
                    message: "Profile Update Successful",
                    data: existsEmail,
                });
            }
           
    
        }else{

            if(!email && !picture){
                const user = {name: req.body.name  }
                const data =  await User.updateOne(filter, user, option);
                res.status(201).json({
                    success: true,
                    message: "Profile Update Successful",
                    data: existsEmail,
                });
            }else{
                const user = {name: `${req.body.name ? req.body.name : existsEmail.name }` , email:`${req.body.email ? req.body.email :existsEmail.email }`, picture:image, is_verified:false }
                const data =  await User.updateOne(filter, user, option);
                res.status(201).json({
                    success: true,
                    message: "Profile Update Successful",
                    data: existsEmail,
                });
            }

        }

        

    } catch (error) {
        console.log(error);
    }
// console.log(image)
   
};


module.exports = { viewUser, createUser, InviteUser, InviteUserCreate, InviteUserbyUrl, loginUser, verifyEmail, verifyEmailSend ,ForgotPassword, ResetPassword, ChangeProfile};