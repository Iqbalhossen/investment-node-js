const DepositPackage = require('../../models/DepositPackageModel');
const { ObjectId } = require('mongodb');


const viewDepositPackage = async (req, res) => {

    try {
        DepositPackage.find()
            .then((results) => {
                res.send(results);
            })
            .catch();


    } catch (error) {
        console.log(error);
    }


};

const DepositPackageStore = async (req, res) => {
    const depositPackage = req.body;

    try {
    const amount = req.body.amount;

        if (!amount) {
            return res.status(400).json({
                success: false,
                message: "Amount Requried",
            });

        }

        const data = await DepositPackage.create(depositPackage);
        const newData = { data }

        // console.log((users._id).toString());
        res.status(201).json({
            success: true,
            message: "Deposit Package Create successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};




module.exports = { viewDepositPackage, DepositPackageStore };
