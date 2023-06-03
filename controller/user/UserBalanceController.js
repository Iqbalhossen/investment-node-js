const WithdrawModel = require('../../models/WithdrawModel');
const BonusBalanceModel = require('../../models/BonusBalanceModel');
const DepositModel = require('../../models/DepositModel');
const UsdGenerateModel = require('../../models/UsdGenerateModel');
const { ObjectId } = require('mongodb');
let moment = require('moment')

const viewBalance = async (req, res) => {
    const userName = req.params.username;
    // console.log(userName)
    try {


        const data = await DepositModel.find({ User_id: userName, status: 1 });

        const Withdraw = await WithdrawModel.find({ user_name: userName, status: 1 })
        const pendingWithdraw = await WithdrawModel.find({ user_name: userName, status: 0 })

        const UsdGenerate = await UsdGenerateModel.find({ user_name: userName })
        const BonusBalance = await BonusBalanceModel.find({ user_name: userName })




        let DepositAmountSum = 0
        for (let i = 0; i <= data?.length; i++) {
            if (data[i]) {
                DepositAmountSum += parseFloat(data[i]?.amount);
            }

        }


        let WithdrawAmountSum = 0
        for (let i = 0; i <= Withdraw?.length; i++) {
            if (Withdraw[i]) {
                WithdrawAmountSum += parseFloat(Withdraw[i]?.amountWithVat);
            }

        }
        let pendingWithdrawAmountSum = 0
        for (let i = 0; i <= pendingWithdraw?.length; i++) {
            if (pendingWithdraw[i]) {
                pendingWithdrawAmountSum += parseFloat(pendingWithdraw[i]?.amountWithVat);
            }

        }

        let UsdGenerateAmountSum = 0
        for (let i = 0; i <= UsdGenerate?.length; i++) {
            if (UsdGenerate[i]) {
                UsdGenerateAmountSum += parseFloat(UsdGenerate[i]?.package_amount);
            }

        }

        let BonusBalanceAmountSum = 0
        for (let i = 0; i <= BonusBalance?.length; i++) {
            if (BonusBalance[i]) {
                BonusBalanceAmountSum += parseFloat(BonusBalance[i]?.amount);
            }

        }



        const newData =  (DepositAmountSum + BonusBalanceAmountSum - UsdGenerateAmountSum -WithdrawAmountSum - pendingWithdrawAmountSum);


        res.status(201).json({
            success: true,
            data: newData,
        });

        // console.log(newData)

    } catch (error) {
        console.log(error);
    }


};















module.exports = { viewBalance };
