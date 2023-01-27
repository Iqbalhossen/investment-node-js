const UsdGenerate = require('../../models/UsdGenerateModel');
const UsdGenerateCommision = require('../../models/UsdGenerateCommisionModel');
const UsdGeneratePackage = require('../../models/UsdGeneratePackageModel');
const { GenerationCommision } = require('../../Commonfile/GenerationCommision');
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
        // console.log(usdAmount);

        // UsdGenerateCommision.find({ user_name: userId, package_id: package_id })
        //     .then((results) => {
        //         res.send(results);
        //     })
        //     .catch();


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
    // console.log(usdGenerate)
    try {
        const sameDate = new Date();

        const package = await UsdGeneratePackage.findOne({ usd_generate_package_amount: depositAmount });
        console.log(package)

        const AddUsdGenerate = { user_name: userName, package_name: package.usd_generate_package_name, package_id: package._id, package_amount: package.usd_generate_package_amount, TotalProfit: package.total_profit, status: 0, created_at: sameDate };


        const data = await UsdGenerate.create(AddUsdGenerate);



        const newData = { data }

        // Generation Section start



        const commision = ((0.5 * parseFloat(depositAmount)) / 100);
        // console.log(data)

        const setCommision = { user_name: userName, package_id: data._id, commision: commision, created_at: sameDate };




        const aajf = await UsdGenerateCommision.create(setCommision);


        
        ////////////////////////////////// DirectSells Section Start   ////////////////////////////////////



        DirectSells(depositAmount, userName);
        TeamSells(depositAmount, userName);
        RoiMint(commision, userName);
        GenerationCommision(commision, userName);

        /////////////////////////////////// DirectSells Section End    //////////////////////////////////////


        // console.log(aajf)



        res.status(201).json({
            success: true,
            message: "Usd Generate Package buy successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};




module.exports = { viewUsdGenerate, UserUsdGenerateStore, EarningUsdGenerate, UsdGeneratePackageView, viewUsdGeneratePackage, UsdGeneratePackageViewByAmount, TotalEarningUsdGenerate };
