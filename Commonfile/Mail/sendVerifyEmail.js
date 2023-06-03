const nodemailer = require('nodemailer');


const sendVerifyEmail = async (name, email, user_id) => {

    try {


        const transpoter = nodemailer.createTransport({

            port: 587,
            host: "smtp.gmail.com",
            secure: false,
            requireTLS: true,
            auth: {
                user: 'yumeoneverify@gmail.com',
                pass: 'qngzqzgdqbmcampi'
            }
        })

        const mailOption = {
            from: 'yumeoneverify@gmail.com',
            to: email,
            subject: 'For Account Verficaition in Yume One',
            html: '<h3> Hi! ' + name + '</h3>' + ' <p> Please Click Here <a href="https://yumeone.com/verify/account/' + user_id + user_id + '/' + user_id + '"> Verify </a></p>'
        }

        transpoter.sendMail(mailOption, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                // console.log('email send', info.response);
            }
        })

    } catch (error) {
        console.log(error);
    }





}

const ForgotPasswordSendEmail = async (name, email, user_id) => {

    try {


        const transpoter = nodemailer.createTransport({

            port: 587,
            host: "smtp.gmail.com",
            secure: false,
            requireTLS: true,
            auth: {
                user: 'yumeoneverify@gmail.com',
                pass: 'qngzqzgdqbmcampi'
            }
        })

        const mailOption = {
            from: 'yumeoneverify@gmail.com',
            to: email,
            subject: 'Reset Password in Yume One',
            html: '<h3> Hi! ' + name + '</h3>' + ' <p> Please Click Here <a href="https://yumeone.com/reset/password/' + user_id + user_id + '/' + user_id + '"> Reset Password </a></p>'
        }

        transpoter.sendMail(mailOption, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                // console.log('forgot email send', info.response);
            }
        })

    } catch (error) {
        console.log(error);
    }





}





module.exports = { sendVerifyEmail, ForgotPasswordSendEmail };