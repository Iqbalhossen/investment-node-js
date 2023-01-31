const WithdrawModel = require('../../models/WithdrawModel');

const { ObjectId } = require('mongodb');




const viewWithdraw = async (req, res) => {
    // console.log(userId)

    try {
        const data = await WithdrawModel.find({status:0})
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });
        // console.log(data)


    } catch (error) {
        console.log(error);
    }


};




const AcceptWithdraw = async (req, res) => {
    
    // console.log(deposit);

    try {

        const deposit =  req.params.id;
        const page = {status:1};
        const filter =  {_id : ObjectId(deposit)};
        const  option = {upsert: true};



        const results =  await WithdrawModel.updateOne(filter, page, option);

        const newData = { results }
        console.log(newData)
        res.status(201).json({
            success: true,
            message: "Accept successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};
const RejectWithdraw = async (req, res) => {
    
    // console.log(deposit);

    try {

        const deposit =  req.params.id;
        const page = {status:3};
        const filter =  {_id : ObjectId(deposit)};
        const  option = {upsert: true};



        const results =  await WithdrawModel.updateOne(filter, page, option);
        const newData = { results }
        // console.log(newData)
        res.status(201).json({
            success: true,
            message: "Reject successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};



module.exports = {viewWithdraw, AcceptWithdraw, RejectWithdraw,};
