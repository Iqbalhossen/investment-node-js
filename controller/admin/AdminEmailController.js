const depositEmail = require('../../models/AdminDepositEmail');
const withdrawEmail = require('../../models/AdminWithdrawEmail');
const { ObjectId } = require('mongodb');


const viewDepositEmail = async (req, res) => {

    try {
        const data = await depositEmail.find();
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


const StoreDepositEmail = async (req, res) => {
    const DepositEmail = req.body;
    try {

       
       
        if (!DepositEmail.name) {
            return res.status(400).json({
                success: false,
                message: "name field Required",
            });

        }
        if (!DepositEmail.email) {
            return res.status(400).json({
                success: false,
                message: "Email field Required",
            });

        }
        const data = await depositEmail.create(DepositEmail);
        const newData = { data }

        // console.log(newData);
        res.status(201).json({
            success: true,
            message: "Deposit Email Create successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};



const DeleteDepositEmail = async (req, res) => {

    try {

        const newid = req.params.id;

        const query = { _id: ObjectId(newid) };

        const page = await depositEmail.findByIdAndRemove(query);

        res.status(201).json({
            success: true,
            message: "Deposit Email Delete successfully",
            data: page
        });

        // res.send(page);

    } catch (error) {
        console.log(error);
    }



};


const viewWithdrawEmail = async (req, res) => {

    try {
        const data = await withdrawEmail.find();
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


const StoreWithdrawEmail = async (req, res) => {
    const DepositEmail = req.body;
    try {

       
       
        if (!DepositEmail.name) {
            return res.status(400).json({
                success: false,
                message: "name field Required",
            });

        }
        if (!DepositEmail.email) {
            return res.status(400).json({
                success: false,
                message: "Email field Required",
            });

        }
        const data = await withdrawEmail.create(DepositEmail);
        const newData = { data }

        // console.log(newData);
        res.status(201).json({
            success: true,
            message: "withdraw Email Create successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};



const DeleteWithdrawEmail = async (req, res) => {

    try {

        const newid = req.params.id;

        const query = { _id: ObjectId(newid) };

        const page = await withdrawEmail.findByIdAndRemove(query);

        res.status(201).json({
            success: true,
            message: "withdraw Email Delete successfully",
            data: page
        });

        // res.send(page);

    } catch (error) {
        console.log(error);
    }



};



module.exports = { StoreDepositEmail, viewDepositEmail, DeleteDepositEmail, viewWithdrawEmail, StoreWithdrawEmail, DeleteWithdrawEmail };
