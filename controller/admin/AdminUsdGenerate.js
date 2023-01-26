const UsdGenegratePackage = require('../../models/UsdGeneratePackageModel');
const { ObjectId } = require('mongodb');


const UsdGenegratePackageView = async (req, res) => {

    try {
        UsdGenegratePackageView.find()
            .then((results) => {
                res.send(results);
            })
            .catch();


    } catch (error) {
        console.log(error);
    }


};


const UsdGenegratePackageStore = async (req, res) => {
    const UsdGenegrate = req.body;
// console.log(user)
    try {

        const usd_generate_package_amount = req.body.usd_generate_package_amount;

        const existsAmount= await UsdGenegratePackage.findOne({ usd_generate_package_amount: usd_generate_package_amount });

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




module.exports = { UsdGenegratePackageStore, UsdGenegratePackageView };
