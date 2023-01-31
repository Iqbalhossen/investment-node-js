const WithdrawModel = require('../../models/WithdrawModel');
const { ObjectId } = require('mongodb');
let moment = require('moment')

const viewWithdraw = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {



        const acceptDeposit = { user_name: userId  };
        const data = await WithdrawModel.find(acceptDeposit)
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });

        // console.log(newData)

    } catch (error) {
        console.log(error);
    }


};
const PendingWithdraw = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {



        const acceptDeposit = { user_name: userId , status: 0 };
        const data = await WithdrawModel.find(acceptDeposit)
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });

        console.log(data)

    } catch (error) {
        console.log(error);
    }


};
const AcceptWithdraw = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {



        const acceptDeposit = { user_name: userId , status: 1 };
        const data = await WithdrawModel.find(acceptDeposit)
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });

        console.log(data)

    } catch (error) {
        console.log(error);
    }


};

const StoreWithdraw = async (req, res) => {
    const withdraw = req.body;
    console.log(withdraw.available);

    const withdrawWithVat = (withdraw.withdraw_balance - (withdraw.withdraw_balance * 5 )/100);

    // console.log(withdraw.withdraw_balance)

    if(((withdraw.withdraw_balance * 5 )/100 + withdraw.available) <= withdraw.withdraw_balance){
        return res.status(401).json({
            success: false,
            message: "Balance is low",
        });
    }

    const offDay = moment().format('dddd');


    if (offDay !== "Sunday" || offDay !== "Saturday") {

        const storeData = { user_name: withdraw.user_name, wallet:withdraw.withdraw_wallet , amount: withdrawWithVat, amountWithVat: withdraw.withdraw_balance, status:0, created_at: withdraw.created_at };

    // console.log(withdraw.available < (withdraw.withdraw_balance + (withdraw.withdraw_balance * 5 )/100))

    try {

        const data = await WithdrawModel.create(storeData);
        const newData = { data }
        res.status(201).json({
            success: true,
            message: "withdraw Pendding!",
            data: newData,
        });

// console.log(newData)

    } catch (error) {
        console.log(error);
    }

    }else{
        return res.status(401).json({
            success: false,
            message: "Saturday and Sunday is off day",
        });
    }
    
};




module.exports = { viewWithdraw, StoreWithdraw, PendingWithdraw, AcceptWithdraw};
