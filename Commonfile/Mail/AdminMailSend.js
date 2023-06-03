const nodemailer = require('nodemailer');

const SingleUserMailSend = async (data) => {

    try {

        const {email, subject, messages} = data;
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
            subject: subject,
            html: '<p> ' + messages + '</p>'
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



const MultipleUserMailSend = async (data, email) => {

    try {

        const {subject, messages} = data;

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
            subject: subject,
            html: '<p> ' + messages + '</p>'
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

const depositMail = async (data, email) => {

    try {

        const {User_id, amount} = data;

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
            subject:  "User deposit",
            html: '<p> ' + User_id + ' is deposit the amount ' + '$'+amount  + '. Check Admin Panel </p>'
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


const WithdrawMail = async (data, email) => {

    try {

        const {user_name, amount} = data;

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
            subject: "User Withdraw",
            html: '<p> ' + user_name + ' is withdraw the amount ' + '$'+amount  + '. Check Admin Panel </p>'
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





module.exports = { SingleUserMailSend, MultipleUserMailSend, depositMail, WithdrawMail};