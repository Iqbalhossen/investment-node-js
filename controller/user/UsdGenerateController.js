const UsdGenerate = require('../../models/UsdGenerateModel');
const UsdGenerateCommision = require('../../models/UsdGenerateCommisionModel');
const UsdGeneratePackage = require('../../models/UsdGeneratePackageModel');
const InviteGeneration = require('../../models/InviteGenerationModel');
const Deposit = require('../../models/DepositModel');
const Withdraw = require('../../models/WithdrawModel');
const BonusBalance = require('../../models/BonusBalanceModel');
const { DirectSells } = require('../../Commonfile/DirectSells');
const { RoiMint } = require('./../../Commonfile/USDGenerate/RoiMint');
const { TeamSells } = require('./../../Commonfile/TeamSells');


const { ObjectId } = require('mongodb');


const UsdGeneratePackageView = async (req, res) => {

    try {
        const newData = await UsdGeneratePackage.find();
        res.status(201).json({
            success: true,
            data: newData,
        });
        // console.log(newData)

    } catch (error) {
        console.log(error);
    }


};

const GenerationView = async (req, res) => {

    const userName = req.params.userName;

    try {
        const newData = await InviteGeneration.findOne({ generation_user_name: userName });
        res.status(201).json({
            success: true,
            data: newData,
        });

        // console.log(newData)
    } catch (error) {
        console.log(error);
    }
    // console.log(userName)

};
const UsdGeneratePackageViewByAmount = async (req, res) => {
    const amount = req.params.amount;
    try {
        const newData = await UsdGeneratePackage.find({ usd_generate_package_amount: amount });
        res.status(201).json({
            success: true,
            data: newData,
        });

        // console.log(newData)


    } catch (error) {
        console.log(error);
    }
};


const viewUsdGenerate = async (req, res) => {
    const userId = req.params.id;

    try {
        UsdGenerate.find({ user_name: userId }).sort({ _id: -1 })
            .then((results) => {
                res.send(results);
            })
            .catch();


    } catch (error) {
        console.log(error);
    }


};

const viewUsdGeneratePackage = async (req, res) => {
    const PackageAmount = req.params.usd_generate_package_amount;
    // console.log(PackageAmount)

    try {
        const data = await UsdGeneratePackage.findOne({ usd_generate_package_amount: PackageAmount })
        // newData = {data}
        res.status(201).json({
            success: true,
            message: "Generate create successfully",
            data: data,
        });
        // console.log(data)

    } catch (error) {
        console.log(error);
    }


};

const EarningUsdGenerate = async (req, res) => {
    const userId = req.params.userName;
    const package_id = req.params.package_id;

    try {

        const query = { _id: ObjectId(package_id) };

        const data = await UsdGenerateCommision.find({ user_name: userId, package_id: package_id }).sort({created_at: -1});
        const usdAmount = await UsdGenerate.findOne(query);
        // newData = {data}
        res.status(201).json({
            success: true,
            data: data,
            usdAmount: usdAmount,
        });
    } catch (error) {
        console.log(error);
    }


};

const TotalEarningUsdGenerate = async (req, res) => {
    const userId = req.params.userName;

    try {


        const data = await UsdGenerateCommision.find({ user_name: userId })
        // newData = {data}
        res.status(201).json({
            success: true,
            data: data,
        });


    } catch (error) {
        console.log(error);
    }


};

const UserUsdGenerateStore = async (req, res) => {
    const userName = req.body.user_name;
    const depositAmount = req.body.package_amount;
    try {



        

        const usdGenerateAmount = await UsdGenerate.find({user_name: userName});



        let UsdGenerateSum = 0;
        for (let i = 0; i <= usdGenerateAmount?.length; i++) {
          if (usdGenerateAmount[i]) {
            UsdGenerateSum += parseFloat(usdGenerateAmount[i]?.package_amount);
          }
        }



        const deposit = await Deposit.find({User_id: userName, status:1});




        let depositSum = 0;
        for (let i = 0; i <= deposit?.length; i++) {
          if (deposit[i]) {
            depositSum += parseFloat(deposit[i]?.amount);
          }
        }

        const pendingwithdraw = await Withdraw.find({user_name: userName, status:0});




        let pendingwithdrawSum = 0;
        for (let i = 0; i <= pendingwithdraw?.length; i++) {
          if (pendingwithdraw[i]) {
            pendingwithdrawSum += parseFloat(pendingwithdraw[i]?.amountWithVat);
          }
        }

        const withdraw = await Withdraw.find({user_name: userName, status:1});




        let withdrawSum = 0;
        for (let i = 0; i <= withdraw?.length; i++) {
          if (withdraw[i]) {
            withdrawSum += parseFloat(withdraw[i]?.amountWithVat);
          }
        }


    

        const bonusBalance = await BonusBalance.find({user_name: userName});




        let bonusBalanceSum = 0;
        for (let i = 0; i <= bonusBalance?.length; i++) {
          if (bonusBalance[i]) {
            bonusBalanceSum += parseFloat(bonusBalance[i]?.amount);
          }
        }



        const totalWithdraw = pendingwithdrawSum + withdrawSum + UsdGenerateSum + parseInt(depositAmount);
        const totalDeposit = depositSum + bonusBalanceSum;

        const totalBalance = totalDeposit - totalWithdraw;
        // console.log(totalBalance)

        if( totalBalance < 0){
            res.status(401).json({
                success: false,
                data: "Amount is low",
            });
        }else{


            let moment = require('moment')
            const sameDate = new Date();
            const Day = moment().format('MM/DD/YYYY');
    
            const package = await UsdGeneratePackage.findOne({ usd_generate_package_amount: depositAmount });
            // console.log(package)
    
            const AddUsdGenerate = { user_name: userName, package_name: package.usd_generate_package_name, package_id: package._id, package_amount: package.usd_generate_package_amount, TotalProfit: package.total_profit, status: 0, created_at: sameDate };
    
    
            const data = await UsdGenerate.create(AddUsdGenerate);
    
    
            const newData = { data }
    
            // // Generation Section start
     
    
    
            const commision = ((0.5 * parseFloat(depositAmount)) / 100);
    
            const setCommision = { user_name: userName, package_id: data._id, commision: commision, time:Day, status: 1, created_at: sameDate };
    
    
    
            const aajf = await UsdGenerateCommision.create(setCommision);
    
    
    
            //////////////////////////////// DirectSells Section Start   ////////////////////////////////////
     
    
    
            DirectSells(depositAmount, userName);
            TeamSells(depositAmount, userName);
            RoiMint(commision, userName);
            ///////////////////////////////// DirectSells Section End    //////////////////////////////////////
    
    
            // console.log(aajf)
    
    
    
            res.status(201).json({
                success: true,
                message: "Usd Generate Package buy successfully",
                data: newData,
            });
    
    




        }





    } catch (error) {
        console.log(error);
    }
};




module.exports = { viewUsdGenerate, UserUsdGenerateStore, EarningUsdGenerate, UsdGeneratePackageView, viewUsdGeneratePackage, UsdGeneratePackageViewByAmount, TotalEarningUsdGenerate, GenerationView };
