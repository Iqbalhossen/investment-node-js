const nodemailer = require('nodemailer');
const sendVerifyEmail = async (name, email, user_id) => {

    try {


        const transpoter = nodemailer.createTransport({

            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'miller5547l@gmail.com',
                pass: 'iyovthtehuaolhmu'
            }
        })

        const mailOption = {
            from: 'miller5547l@gmail.com',
            to: email,
            subject: 'For Acoount Verficition in Yume One',
            html: '<h3> Hi! ' + name + '</h3>' + ' <p> Please Click Here <a href="http://localhost:3000/verify/account/'+user_id + user_id +'/'+ user_id +'"> Verify </a></p>'
        }

        transpoter.sendMail(mailOption, function (error,info) {
            if(error){
                console.log(error);
            }else{
                console.log('email send',info.response);
            }
        })

    } catch (error) {
        console.log(error);
    }





}





module.exports = { sendVerifyEmail };