const Deposit = require('../../models/DepositModel');
const { ObjectId } = require('mongodb');


const viewDeposit = async (req, res) => {
    const userId = req.params.username;

    try {
        const pendingDeposit = { User_id: userId };

     const newData = await  Deposit.find(pendingDeposit);
            res.status(201).json({
                success: true,
                data: newData,
            });
            console.log(newData)

    } catch (error) {
        console.log(error);
    }
};
const viewDepositPending = async (req, res) => {
    const userId = req.params.username;

    try {
        const pendingDeposit = { User_id: userId, status: 0 };

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

const viewDepositAccept = async (req, res) => {
    const userId = req.params.username;

    try {
        const acceptDeposit = { User_id: userId, status: 1 };

        const newData = await  Deposit.find(acceptDeposit);
               res.status(201).json({
                   success: true,
                   data: newData,
               });
               // console.log(newData)


    } catch (error) {
        console.log(error);
    }

};

const UserDepositStore = async (req, res) => {
    const deposit = req.body;
    // console.log(deposit);

    try {

        const data = await Deposit.create(deposit);
        const newData = { data }
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
