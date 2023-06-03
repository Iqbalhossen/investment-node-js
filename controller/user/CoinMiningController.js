const UsdGenerate = require('../../models/CoinMiningModel');
const UsdGenerateCommision = require('../../models/CoinMiningCommisionModel');
const UsdGeneratePackage = require('../../models/CoinMiningPackageModel');
const InviteGeneration = require('../../models/InviteGenerationModel');
const { DirectSells } = require('../../Commonfile/CoinMining/DirectSells');
const { RoiMint } = require('./../../Commonfile/CoinMining/RoiMint');
const { TeamSells } = require('./../../Commonfile/CoinMining/TeamSells');


const { ObjectId } = require('mongodb');


const CoinMinigPackageView = async (req, res) => {

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
const CoinMinigPackageViewByAmount = async (req, res) => {
    const amount = req.params.amount;
    try {
        const newData = await UsdGeneratePackage.find({ coin_mining_package_amount: amount });
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
    const userName = req.params.usd_generate_package_amount;
    const PackageAmount = req.params.userName;
    // console.log(PackageAmount)

    try {
        const data = await UsdGeneratePackage.findOne({ usd_generate_package_amount: userName })
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

        const data = await UsdGenerateCommision.find({ user_name: userId, package_id: package_id })
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

        // console.log(data)

    } catch (error) {
        console.log(error);
    }


};

const CoinMinigStore = async (req, res) => {
    const userName = req.body.user_name;
    const depositAmount = req.body.package_amount;
    // console.log(usdGenerate)
    try {
        let moment = require('moment')
        const sameDate = new Date();
        const Day = moment().format('MM/DD/YYYY');

        const package = await UsdGeneratePackage.findOne({ coin_mining_package_amount: depositAmount });
        // console.log(package)

        const AddUsdGenerate = { user_name: userName, package_name: package.coin_mining_package_name, package_id: package._id, package_amount: package.coin_mining_package_amount, TotalProfit: package.total_profit, status: 1, created_at: sameDate };


        const data = await UsdGenerate.create(AddUsdGenerate);
 


        const newData = { data }

        // Generation Section start



        const commision = ((0.5 * parseFloat(depositAmount)) / 100);
        // console.log(data)

        const setCommision = { user_name: userName, package_id: data._id, commision: commision, time:Day, status: 1, created_at: sameDate };




        const aajf = await UsdGenerateCommision.create(setCommision);


        // console.log(aajf)

        ////////////////////////////////// DirectSells Section Start   ////////////////////////////////////



        DirectSells(depositAmount, userName);
        TeamSells(depositAmount, userName);
        RoiMint(commision, userName);

        /////////////////////////////////// DirectSells Section End    //////////////////////////////////////





        res.status(201).json({
            success: true,
            message: "Coin Mining Package buy successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};




module.exports = { viewUsdGenerate, CoinMinigStore, EarningUsdGenerate, CoinMinigPackageView, viewUsdGeneratePackage, CoinMinigPackageViewByAmount, TotalEarningUsdGenerate, GenerationView };
