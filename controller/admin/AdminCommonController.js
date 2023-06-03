const WithdrawModel = require('../../models/WithdrawModel');
const DepositModel = require('../../models/DepositModel');
const userModels = require('../../models/userModels');

const { ObjectId } = require('mongodb');




const viewWithdraw = async (req, res) => {

    try {
        const data = await WithdrawModel.find({status:1}).sort({
            created_at: -1,
          });
        let WithdrawAmountSum = 0;
        for (let i = 0; i <= data.length; i++) {
          if (data[i]) {
            WithdrawAmountSum += parseFloat(data[i].amount);
          }
        }  
        res.status(201).json({
            success: true,
            data: WithdrawAmountSum,
        });


    } catch (error) {
        console.log(error);
    }


};

const viewDeposit = async (req, res) => {

    try {
        const data = await DepositModel.find({status:1}).sort({
            created_at: -1,
          });
        let DepositAmountSum = 0;
        for (let i = 0; i <= data.length; i++) {
          if (data[i]) {
            DepositAmountSum += parseFloat(data[i].amount);
          }
        }  
        res.status(201).json({
            success: true,
            data: DepositAmountSum,
        });


    } catch (error) {
        console.log(error);
    }


};

const viewUser = async (req, res) => {

    try {
        const data = await userModels.find().sort({
            created_at: -1,
          });
       const userLenght = data.length;
        res.status(201).json({
            success: true,
            data: data,
            length:userLenght,
        });


    } catch (error) {
        console.log(error);
    }


};


const viewVerifyUser = async (req, res) => {

    try {
        const data = await userModels.find({is_verified:true}).sort({
            created_at: -1,
          });
       const userLenght = data.length;
        res.status(201).json({
            success: true,
            data: data,
            length:userLenght,
        });


    } catch (error) {
        console.log(error);
    }


};


const viewInactiveUser = async (req, res) => {

    try {
        const data = await userModels.find({status:false}).sort({
            created_at: -1,
          });
       const userLenght = data.length;
        res.status(201).json({
            success: true,
            data: data,
            length:userLenght,
        });


    } catch (error) {
        console.log(error);
    }


};


const viewActiveUser = async (req, res) => {

    try {
        const data = await userModels.find({status:true}).sort({
            created_at: -1,
          });
       const userLenght = data.length;
        res.status(201).json({
            success: true,
            data: data,
            length:userLenght,
        });


    } catch (error) {
        console.log(error);
    }


};






module.exports = {viewWithdraw, viewDeposit, viewUser, viewActiveUser, viewInactiveUser, viewVerifyUser};
