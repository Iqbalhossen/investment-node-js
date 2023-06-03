const Deposit = require("../../models/DepositModel");
const { ObjectId } = require("mongodb");
let moment = require("moment");
const adminViewDeposit = async (req, res) => {
  try {
    Deposit.find()
      .sort({ created_at: -1 })
      .then((results) => {
        res.send(results);
      })
      .catch();
  } catch (error) {
    console.log(error);
  }
};

const adminViewDepositPending = async (req, res) => {
  try {
    const data = await Deposit.find({ status: 0 }).sort({ created_at: -1 });

    let DepositAmountSum = 0;
    for (let i = 0; i <= data?.length; i++) {
      if (data[i]) {
        DepositAmountSum += parseFloat(data[i]?.amount);
      }
    }

    newData = { data };
    res.status(201).json({
      success: true,
      data: newData,
      total: DepositAmountSum,
    });

    // Deposit.find({status:0}).sort({created_at: -1})
    // .then((results) => {
    //     res.send(results);
    // })
    // .catch();
  } catch (error) {
    console.log(error);
  }
};

const adminViewDepositAccept = async (req, res) => {
  try {
    const data = await Deposit.find({ status: 1 }).sort({ created_at: -1 });

    let DepositAmountSum = 0;
    for (let i = 0; i <= data?.length; i++) {
      if (data[i]) {
        DepositAmountSum += parseFloat(data[i]?.amount);
      }
    }

    newData = { data };
    res.status(201).json({
      success: true,
      data: newData,
      total: DepositAmountSum,
    });
  } catch (error) {
    console.log(error);
  }
};

const adminViewDepositReject = async (req, res) => {
  try {
    Deposit.find({ status: 2 })
      .sort({ created_at: -1 })
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
    const deposit = req.params.id;
    const page = { status: 1 };
    const filter = { _id: ObjectId(deposit) };
    const option = { upsert: true };

    const results = await Deposit.updateOne(filter, page, option);

    // const query =  {_id : ObjectId(deposit)};

    // const data = await Deposit.create(query);
    const newData = { results };
    // console.log(newData)
    res.status(201).json({
      success: true,
      message: "Deposit successfully",
      data: newData,
    });
  } catch (error) {
    console.log(error);
  }
};
const UserDepositReject = async (req, res) => {
  // console.log(deposit);

  try {
    const deposit = req.params.id;
    const page = { status: 2 };
    const filter = { _id: ObjectId(deposit) };
    const option = { upsert: true };

    const results = await Deposit.updateOne(filter, page, option);
    const newData = { results };
    // console.log(newData)
    res.status(201).json({
      success: true,
      message: "Deposit Reject successfully",
      data: newData,
    });
  } catch (error) {
    console.log(error);
  }
};
const UserDepositDelete = async (req, res) => {
  try {
    const newid = req.params.id;

    const query = { _id: ObjectId(newid) };

    const page = await Deposit.findByIdAndRemove(query);

    res.status(201).json({
      success: true,
      message: "Dessposit Delete successfully",
      data: page,
    });

    // res.send(page);
  } catch (error) {
    console.log(error);
  }
};

const adminViewDepositMonthly = async (req, res) => {
  try {
    const data = await Deposit.find({ status: 1 }).sort({ created_at: -1 });

    let DepositAmountSum = 0;
    for (let i = 0; i <= data?.length; i++) {
      if (data[i]) {
        const Month = moment(data[i].created_at).format("MMMM");
        const currentMonth = moment().format("MMMM");
        const year = moment(data[i].created_at).format("YYYY");
        const currentYear = moment().format("YYYY");

        if(Month === currentMonth &&  year ===  currentYear){
            DepositAmountSum += parseFloat(data[i]?.amount);

        }
      }
    }

    res.status(201).json({
        success: true,
        total: DepositAmountSum,
      });




  } catch (error) {
    console.log(error);
  }
};

const adminViewDepositYearly = async (req, res) => {
    try {
      const data = await Deposit.find({ status: 1 }).sort({ created_at: -1 });
      let DepositAmountSum = 0;
      for (let i = 0; i <= data?.length; i++) {
        if (data[i]) {
          const year = moment(data[i].created_at).format("YYYY");
          const currentYear = moment().format("YYYY");
          if(year ===  currentYear){
              DepositAmountSum += parseFloat(data[i]?.amount);
  
          }
        }
      }
  
      res.status(201).json({
          success: true,
          total: DepositAmountSum,
        });
  
  
  
  
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {
  adminViewDeposit,
  UserDepositPackageAcitve,
  UserDepositReject,
  UserDepositDelete,
  adminViewDepositPending,
  adminViewDepositAccept,
  adminViewDepositReject,
  adminViewDepositMonthly,
  adminViewDepositYearly,
};
