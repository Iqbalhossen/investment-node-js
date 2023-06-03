const WithdrawModel = require("../../models/WithdrawModel");
const { ObjectId } = require("mongodb");
let moment = require("moment");

const viewWithdraw = async (req, res) => {
  // console.log(userId)

  try {
    const data = await WithdrawModel.find().sort({ created_at: -1 });
    newData = { data };
    res.status(201).json({
      success: true,
      data: newData,
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

const viewWithdrawPending = async (req, res) => {
  // console.log(userId)

  try {
    const data = await WithdrawModel.find({ status: 0 }).sort({
      created_at: -1,
    });


    let WithdrawAmountSum = 0;
    for (let i = 0; i <= data?.length; i++) {
      if (data[i]) {
        WithdrawAmountSum += parseFloat(data[i]?.amountWithVat);
      }
    }


    newData = { data };
    res.status(201).json({
      success: true,
      data: newData,
      total:WithdrawAmountSum
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

const viewWithdrawAccept = async (req, res) => {
  // console.log(userId)

  try {
    const data = await WithdrawModel.find({ status: 1 }).sort({
      created_at: -1,
    });

    let WithdrawAmountSum = 0;
    for (let i = 0; i <= data?.length; i++) {
      if (data[i]) {
        WithdrawAmountSum += parseFloat(data[i]?.amountWithVat);
      }
    }



    newData = { data };
    res.status(201).json({
      success: true,
      data: newData,
      total:WithdrawAmountSum
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

const viewWithdrawReject = async (req, res) => {
  // console.log(userId)

  try {
    const data = await WithdrawModel.find({ status: 3 }).sort({
      created_at: -1,
    });
    newData = { data };
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
    const deposit = req.params.id;
    const page = { status: 1 };
    const filter = { _id: ObjectId(deposit) };
    const option = { upsert: true };

    const results = await WithdrawModel.updateOne(filter, page, option);

    const newData = { results };
    // console.log(newData)
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
    const deposit = req.params.id;
    const page = { status: 3 };
    const filter = { _id: ObjectId(deposit) };
    const option = { upsert: true };

    const results = await WithdrawModel.updateOne(filter, page, option);
    const newData = { results };
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

const adminViewWithdrawMonthly = async (req, res) => {
  try {
    const data = await WithdrawModel.find({ status: 1 }).sort({
      created_at: -1,
    });

    let WithdrawAmountSum = 0;
    for (let i = 0; i <= data?.length; i++) {
      if (data[i]) {
        const Month = moment(data[i].created_at).format("MMMM");
        const currentMonth = moment().format("MMMM");
        const year = moment(data[i].created_at).format("YYYY");
        const currentYear = moment().format("YYYY");

        if (Month === currentMonth && year === currentYear) {
          WithdrawAmountSum += parseFloat(data[i]?.amountWithVat);
        }
      }
    }

    res.status(201).json({
      success: true,
      total: WithdrawAmountSum,
    });
  } catch (error) {
    console.log(error);
  }
};

const adminViewWithdrawYearly = async (req, res) => {
  try {
    const data = await WithdrawModel.find({ status: 1 }).sort({
      created_at: -1,
    });
    let WithdrawAmountSum = 0;
    for (let i = 0; i <= data?.length; i++) {
      if (data[i]) {
        const year = moment(data[i].created_at).format("YYYY");
        const currentYear = moment().format("YYYY");
        if (year === currentYear) {
          WithdrawAmountSum += parseFloat(data[i]?.amountWithVat);
        }
      }
    }
    res.status(201).json({
      success: true,
      total: WithdrawAmountSum,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  viewWithdraw,
  AcceptWithdraw,
  RejectWithdraw,
  viewWithdrawReject,
  viewWithdrawAccept,
  viewWithdrawPending,
  adminViewWithdrawMonthly, adminViewWithdrawYearly,
};
