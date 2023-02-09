const UsdGenegratePackage = require('../../models/UsdGeneratePackageModel');
const { ObjectId } = require('mongodb');


const UsdGenegratePackageView = async (req, res) => {

    try {
        const data = await UsdGenegratePackage.find();
        newData = { data }
        console.log(data)
        res.status(201).json({
            success: true,
            data: newData,
        });


    } catch (error) {
        console.log(error);
    }


};


const UsdGenegratePackageStore = async (req, res) => {
    const UsdGenegrate = req.body;
    // console.log(user)
    try {

        const usd_generate_package_amount = req.body.usd_generate_package_amount;

        const existsAmount = await UsdGenegratePackage.findOne({ usd_generate_package_amount: usd_generate_package_amount });

        if (existsAmount) {
            return res.status(400).json({
                success: false,
                message: "Amount Already Exists",
            });

        }

        if (!usd_generate_package_amount) {
            return res.status(400).json({
                success: false,
                message: "Amount field Required",
            });

        }


        const data = await UsdGenegratePackage.create(UsdGenegrate);
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



const UsdGenegratePackageedit = async (req, res) => {

    try {

        const newid = req.params.id;

        const query = { _id: ObjectId(newid) };

        const page = await UsdGenegratePackage.find(query);

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
const UsdGenegratePackageUpdate = async (req, res) => {

    const page = req.body;

    try {

        const newid = req.params.id;

        const filter = { _id: ObjectId(newid) };
        const option = { upsert: true };



        const results = await UsdGenegratePackage.updateOne(filter, page, option);

        console.log(results);
        res.status(201).json({
            success: true,
            message: " Update successfully",
            data: results
        });

    } catch (error) {
        console.log(error);
    }



};
const UsdGenegratePackagedelete = async (req, res) => {

    try {

        const newid = req.params.id;

        const query = { _id: ObjectId(newid) };

        const page = await UsdGenegratePackage.findByIdAndRemove(query);

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



module.exports = { UsdGenegratePackageStore, UsdGenegratePackageView, UsdGenegratePackagedelete, UsdGenegratePackageedit, UsdGenegratePackageUpdate };
