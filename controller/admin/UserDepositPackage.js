const Deposit = require('../../models/DepositModel');
const { ObjectId } = require('mongodb');


const adminViewDeposit = async (req, res) => {

    try {
        const status = {status:0}
        Deposit.find(status)
        .then((results) => {
            res.send(results);
        })
        .catch();


    } catch (error) {
        console.log(error);
    }
   
};

const UserDepositPackageAcitve = async (req, res) => {
    
    // console.log(deposit);

    try {

        const deposit =  req.params.id;
        const page = {status:1};
        const filter =  {_id : ObjectId(deposit)};
        const  option = {upsert: true};



        const results =  await Deposit.updateOne(filter, page, option);

        // const query =  {_id : ObjectId(deposit)};

        // const data = await Deposit.create(query);
        const newData = { results }
        console.log(newData)
        res.status(201).json({
            success: true,
            message: "Deposit successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};




module.exports = { adminViewDeposit, UserDepositPackageAcitve };
