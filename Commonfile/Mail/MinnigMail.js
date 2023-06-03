const nodemailer = require('nodemailer');

const SendEmailByMinning = async (name, email) => {

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
            subject: 'Visit Yume One',
            html: '<h3> Hi! ' + name + '</h3>' + ' <p> Please visit yume one web site </p>'
        }

        transpoter.sendMail(mailOption, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                // console.log('Minning email send', info.response);
            }
        })

    } catch (error) {
        console.log(error);
    }





}





module.exports = { SendEmailByMinning };