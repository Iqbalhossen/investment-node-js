const CoinMiningPackage = require('../../models/CoinMiningPackageModel');
const { ObjectId } = require('mongodb');


const viewCoinMinigPackage = async (req, res) => {

    try {
        const data = await CoinMiningPackage.find();
        newData = { data }
        // console.log(data)
        res.status(201).json({
            success: true,
            data: newData,
        });


    } catch (error) {
        console.log(error);
    }


};


const storeCoinMinigPackage = async (req, res) => {
    const coinMining = req.body;
    // console.log(user)
    try {

        const coin_mining_package_amount = req.body.coin_mining_package_amount;

        const existsAmount = await CoinMiningPackage.findOne({ coin_mining_package_amount: coin_mining_package_amount });

        if (existsAmount) {
            return res.status(400).json({
                success: false,
                message: "Amount Already Exists",
            });

        }

        if (!coin_mining_package_amount) {
            return res.status(400).json({
                success: false,
                message: "Amount field Required",
            });

        }


        const data = await CoinMiningPackage.create(coinMining);
        const newData = { data }

        // console.log(newData);
        res.status(201).json({
            success: true,
            message: "Package Create successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};



const CoinMiningPackageedit = async (req, res) => {

    try {

        const newid = req.params.id;

        const query = { _id: ObjectId(newid) };

        const page = await CoinMiningPackage.find(query);

        res.status(201).json({
            success: true,
            message: "Usd Generate Delete successfully",
            data: page
        });

        // res.send(page);

    } catch (error) {
        console.log(error);
    }



};
const CoinMiningPackageUpdate = async (req, res) => {

    const page = req.body;

    try {

        const newid = req.params.id;

        const filter = { _id: ObjectId(newid) };
        const option = { upsert: true };



        const results = await CoinMiningPackage.updateOne(filter, page, option);

        // console.log(results);
        res.status(201).json({
            success: true,
            message: " Update successfully",
            data: results
        });

    } catch (error) {
        console.log(error);
    }



};
const DeleteCoinMinigPackage = async (req, res) => {

    try {

        const newid = req.params.id;

        const query = { _id: ObjectId(newid) };

        const page = await CoinMiningPackage.findByIdAndRemove(query);

        res.status(201).json({
            success: true,
            message: "Coin Mining Delete successfully",
            data: page
        });

        // res.send(page);

    } catch (error) {
        console.log(error);
    }



};



module.exports = { storeCoinMinigPackage, viewCoinMinigPackage, DeleteCoinMinigPackage, CoinMiningPackageedit, CoinMiningPackageUpdate };
