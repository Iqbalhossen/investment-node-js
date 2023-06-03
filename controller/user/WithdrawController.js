const WithdrawModel = require('../../models/WithdrawModel');
const WithdrawEmail = require('../../models/AdminWithdrawEmail');
const { ObjectId } = require('mongodb');

const {WithdrawMail} = require('../../Commonfile/Mail/AdminMailSend')


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



        const pendingWithdraw = { user_name: userId , status: 0 };
        const findPendingWithdraw = await WithdrawModel.find(pendingWithdraw);

        let findPendingWithdrawSum = 0;
        for (let i = 0; i <= findPendingWithdraw?.length; i++) {
          if (findPendingWithdraw[i]) {
            findPendingWithdrawSum += parseFloat(findPendingWithdraw[i]?.amountWithVat);
          }
        }


        newData = {findPendingWithdraw}
        res.status(201).json({
            success: true,
            data: newData,
            totalAmount:findPendingWithdrawSum,
        });

        // console.log(findPendingWithdraw)

    } catch (error) {
        console.log(error);
    }


};
const AcceptWithdraw = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {



        const acceptWithdraw = { user_name: userId , status: 1 };
        const data = await WithdrawModel.find(acceptWithdraw);

        let findacceptWithdrawSum = 0;
        for (let i = 0; i <= data?.length; i++) {
          if (data[i]) {
            findacceptWithdrawSum += parseFloat(data[i]?.amountWithVat);
          }
        }
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
            totalAmount:findacceptWithdrawSum,
        });

        // console.log(data)

    } catch (error) {
        console.log(error);
    }


};

const StoreWithdraw = async (req, res) => {
    const withdraw = req.body;
    const user_name = req.params.username;

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

        const storeData = { user_name: user_name, wallet:withdraw.withdraw_wallet , amount: withdrawWithVat, amountWithVat: withdraw.withdraw_balance, networks: withdraw.networks , status:0, created_at: withdraw.created_at };

    // console.log(withdraw.available < (withdraw.withdraw_balance + (withdraw.withdraw_balance * 5 )/100))

    try {

        const data = await WithdrawModel.create(storeData);
        const newData = { data }

        const findWithdrawEmail = await WithdrawEmail.find();

        for (const adminEmail of findWithdrawEmail) {

            WithdrawMail(storeData, adminEmail.email);
        }

        res.status(201).json({
            success: true,
            message: "withdraw Pendding!",
            data: newData,
        });


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
