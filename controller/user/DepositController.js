const Deposit = require('../../models/DepositModel');
const DepositEmail = require('../../models/AdminDepositEmail');
const { ObjectId } = require('mongodb');

const {depositMail} = require('../../Commonfile/Mail/AdminMailSend')


const viewDeposit = async (req, res) => {
    const userId = req.params.username;

    try {
        const pendingDeposit = { User_id: userId };

     const newData = await  Deposit.find(pendingDeposit);
            res.status(201).json({
                success: true,
                data: newData,
            });
            // console.log(newData)

    } catch (error) {
        console.log(error);
    }
};
const viewDepositPending = async (req, res) => {
    const userId = req.params.username;

    try {
        const pendingDeposit = { User_id: userId, status: 0 };

     const newData = await  Deposit.find(pendingDeposit);

     let pendingDepositSum = 0
     for (let i = 0; i <= newData?.length; i++) {
         if (newData[i]) {
            pendingDepositSum += parseFloat(newData[i]?.amount);
         }

     }

            res.status(201).json({
                success: true,
                data: newData,
                amount:pendingDepositSum,
            });
            // console.log(newData)

    } catch (error) {
        console.log(error);
    }
};

const viewDepositAccept = async (req, res) => {
    const userId = req.params.username;

    try {
        const acceptDeposit = { User_id: userId, status: 1 };

        const newData = await  Deposit.find(acceptDeposit);

        let acceptDepositSum = 0
        for (let i = 0; i <= newData?.length; i++) {
            if (newData[i]) {
                acceptDepositSum += parseFloat(newData[i]?.amount);
            }
   
        }

               res.status(201).json({
                   success: true,
                   data: newData,
                   amount:acceptDepositSum
               });
               // console.log(newData)


    } catch (error) {
        console.log(error);
    }

};

const UserDepositStore = async (req, res) => {
    const deposit = req.body;
    const amount = req.body.amount;
    // console.log(deposit); 

    try {

        if(amount < 50){
            return res.status(400).json({
                success: false,
                message: "Mimimum Deposit Amount $50",
            });
        }

        const data = await Deposit.create(deposit);
        const newData = { data }

        const findDepositEmail = await DepositEmail.find();

        for (const adminEmail of findDepositEmail) {

            depositMail(deposit, adminEmail.email);
        }


        res.status(201).json({
            success: true,
            message: "Deposit successfully",
            data: newData,
        });

// console.log(newData)

    } catch (error) {
        console.log(error);
    }
};




module.exports = { viewDepositPending, UserDepositStore, viewDepositAccept, viewDeposit };
