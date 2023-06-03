const CoinMining = require("../../models/CoinMiningModel");
const UsdGenerate = require("../../models/UsdGenerateModel");
const DepositModel = require("../../models/DepositModel");
const WithdrawModel = require("../../models/WithdrawModel");
const FakeDeposit = require("../../models/FakeDeposit");
const UsdGenerateCommision = require("../../models/UsdGenerateCommisionModel");
const {
  CoinMiningCommsion,
} = require("./../../Commonfile/CoinMining/CoinMiningAutoCommsion");
const {
  UsdGenerateCommsion,
} = require("./../../Commonfile/UsdGenerateAutoCommsion");
const { ObjectId } = require("mongodb");

let moment = require("moment");
const pending = moment().format("MM/DD/YYYY");

const packageBounsStore = async (req, res) => {
  const userId = req.params.username;
  // console.log("claim");

  try {
    const findUser = { user_name: userId };

    const data = await CoinMining.find(findUser);
    const usdData = await UsdGenerate.find(findUser);
    // console.log(data);
    // console.log(usdData);
    CoinMiningCommsion(data);
    UsdGenerateCommsion(usdData);

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};
const ClaimBtn = async (req, res) => {
  const userId = req.params.username;

  try {
    const findUser = { user_name: userId };

    const usdData = await UsdGenerateCommision.find(findUser);
    // console.log(usdData[usdData.length - 1].time);
    // if (pending === usdData[usdData.length - 1].time) {
    //   res.status(200).json({
    //     success: false,
    //   });
    // } else {
    //   res.status(200).json({
    //     success: true,
    //   });
    //   // console.log("not okk")
    // }
  } catch (error) {
    console.log(error);
  }
};

const AllTransaction = async (req, res) => {
  try {
    const findWithdraw = { status: 1 };

    const Withdraw = await WithdrawModel.find(findWithdraw);

    const findDeposit = { status: 1 };

    const Deposit = await DepositModel.find(findDeposit);

    let DepositAmountSum = 0;
    for (let i = 0; i <= Deposit?.length; i++) {
      if (Deposit[i]) {
        DepositAmountSum += parseFloat(Deposit[i]?.amount);
      }
    }

    let WithdrawAmountSum = 0;
    for (let i = 0; i <= Withdraw?.length; i++) {
      if (Withdraw[i]) {
        WithdrawAmountSum += parseFloat(Withdraw[i]?.amount);
      }
    }


    const fakeDeposit = await FakeDeposit.find();

    console.log(parseInt(fakeDeposit[0].amount))

    const AllSum = DepositAmountSum + WithdrawAmountSum + parseInt(fakeDeposit[0].amount);

    res.status(200).json({
      success: true,
      data:AllSum,
    });

  } catch (error) {
    console.log(error);
  }
};

module.exports = { packageBounsStore, ClaimBtn, AllTransaction };
