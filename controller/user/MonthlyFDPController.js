const MonthlyFDPPackage = require("../../models/MonthlyFDPPackageModel");
const MonthlyFDP = require("../../models/MonthlyFDPModel");
const MonthlyFDPDirectSells = require("../../models/MonthlyFDPDirectSellsModel");
const MonthlyFDPTeamSells = require("../../models/MonthlyFDPTeamSellsModel");
const MonthlyFDPGeneration = require("../../models/MonthlyFDPGenerationModel");
const { DirectSells } = require("../../Commonfile/MonthlyFDP/DirectSells");
const { TeamSells } = require("./../../Commonfile/MonthlyFDP/TeamSells");

const { ObjectId } = require("mongodb");

const UserMonthlyPackageStore = async (req, res) => {
  const userName = req.body.user_name;
  const depositAmount = req.body.amount;
  try {
    let moment = require("moment");
    const sameDate = new Date();
    const MonthlyPackageTime = moment(sameDate, "DD-MM-YYYY")
    .add("years", 3).format("DD-MM-YYYY");
    const time = moment().format("DD-MM-YYYY");
    const year = moment().format("YYYY");
    const Day = moment().format("DD");
    const month = moment().format("MM");

    // console.log(parseInt(Dayaa))

    const userdate = `${Day}-${month}-${parseInt(year) + 3}`;

    // console.log( time < userdate)

    if (depositAmount <= 9) {
      return res.status(401).json({
        success: false,
        message: "minimum $10 deposit",
      });
    }

    const AddMonthlyPackage = {
      user_name: userName,
      package_amount: depositAmount,
      TotalProfit: depositAmount * 3,
      time: MonthlyPackageTime,
      status: true,
      fixed_time: userdate,
      created_at: sameDate,
    };

    const package = await MonthlyFDPPackage.create(AddMonthlyPackage);
    // console.log(AddMonthlyPackage)

    const AddMonthlyDepsit = {
      user_name: userName,
      package_amount: depositAmount,
      package_id: package._id,
      TotalProfit: depositAmount * 3,
      time: time,
      status: true,
      created_at: sameDate,
    };

    const data = await MonthlyFDP.create(AddMonthlyDepsit);

    const newData = { data };

    // Generation Section start

    //////////////////////////////// DirectSells Section Start   ////////////////////////////////////

    DirectSells(depositAmount, userName);
    TeamSells(depositAmount, userName);

    ///////////////////////////////// DirectSells Section End    //////////////////////////////////////

    res.status(201).json({
      success: true,
      message: "Monthly Fixed Deposit Package buy successfully",
      data: newData,
    });
  } catch (error) {
    console.log(error);
  }
};

const viewMonthlyPackage = async (req, res) => {
  const userName = req.params.username;
  try {
    const data = await MonthlyFDPPackage.find({ user_name: userName });
    res.status(201).json({
      success: true,
      data: data,
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};
const viewMonthlyDeposit = async (req, res) => {
  const userName = req.params.username;
  const id = req.params.id;
  try {
    const data = await MonthlyFDP.find({ package_id: id, user_name: userName });
    res.status(201).json({
      success: true,
      data: data,
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

// Bouns Section

const ViewDirectSells = async (req, res) => {
  const userName = req.params.username;
  try {
    const data = await MonthlyFDPDirectSells.find({ user_name: userName });
    res.status(201).json({
      success: true,
      data: data,
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

const viewTeamSells = async (req, res) => {
  const userName = req.params.username;
  try {
    const data = await MonthlyFDPTeamSells.find({ user_name: userName });
    res.status(201).json({
      success: true,
      data: data,
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

const viewGeneration = async (req, res) => {
  const userName = req.params.username;
  try {
    const data = await MonthlyFDPGeneration.find({ user_name: userName });
    res.status(201).json({
      success: true,
      data: data,
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};
const viewMonthlyFDP = async (req, res) => {
  const userName = req.params.username;
  const id = req.params.id;
  try {
    const data = await MonthlyFDP.find({ package_id: id, user_name: userName });
    res.status(201).json({
      success: true,
      data: data,
    });
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const viewMonthlyPackageBysingle = async (req, res) => {
  const userName = req.params.username;
  const id = req.params.id;
  try {
    const data = await MonthlyFDPPackage.findOne({
      _id: ObjectId(id),
      user_name: userName,
    });
    res.status(201).json({
      success: true,
      data: data,
    });
    // console.log(data)
  } catch (error) {
    console.log(error);
  }
};

const StoreMonthlyFDP = async (req, res) => {
  const id = req.params.id;
  const userName = req.body.user_name;
  const package_id = req.body.package_id;

  try {
    let moment = require("moment");
    const sameDate = new Date();
    const time = moment().format("DD-MM-YYYY");
    const year = moment().format("YYYY");

    const MonthlyPackage = await MonthlyFDPPackage.findOne({
      _id: ObjectId(id),
    });

    // console.log(MonthlyPackage.package_amount)
    // console.log(MonthlyPackage.TotalProfit)

    const data = await MonthlyFDP.find({ package_id: id, user_name: userName });

    const aaa = `${MonthlyPackage.time[0]}${MonthlyPackage.time[1]}-${
      data[data.length - 1].time[3]
    }${data[data.length - 1].time[4]}-${year}`;
    // console.log(aaa);

    var new_date = moment(aaa, "DD-MM-YYYY")
      .add("days", 6)
      .format("YYYY-MM-DD");
    var new_Month = moment(time, "DD-MM-YYYY").format("YYYY-MM-DD");

    const x = new Date(`${new_date}`);
    const y = new Date(`${new_Month}`);

    if (x < y) {
      const AddMonthlyDepsit = {
        user_name: userName,
        package_amount:
          parseInt(MonthlyPackage.package_amount) +
          (MonthlyPackage.package_amount * 5) / 100,
        package_id: MonthlyPackage._id,
        TotalProfit: MonthlyPackage.TotalProfit,
        time: time,
        status: true,
        created_at: sameDate,
      };

      const data = await MonthlyFDP.create(AddMonthlyDepsit);

      DirectSells(MonthlyPackage.package_amount, userName);
      TeamSells(MonthlyPackage.package_amount, userName);

      res.status(201).json({
        success: true,
        message: "Monthly Package successfully",
        data: data,
      });
    } else {
      const AddMonthlyDepsit = {
        user_name: userName,
        package_amount: MonthlyPackage.package_amount,
        package_id: MonthlyPackage._id,
        TotalProfit: MonthlyPackage.TotalProfit,
        time: time,
        status: true,
        created_at: sameDate,
      };

      const data = await MonthlyFDP.create(AddMonthlyDepsit);

      DirectSells(MonthlyPackage.package_amount, userName);
      TeamSells(MonthlyPackage.package_amount, userName);

      res.status(201).json({
        success: true,
        message: "Monthly Package successfully",
        data: data,
      });
    }

    ///////////////////////////////// DirectSells Section End    //////////////////////////////////////
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  UserMonthlyPackageStore,
  viewMonthlyPackage,
  ViewDirectSells,
  viewTeamSells,
  viewGeneration,
  viewMonthlyDeposit,
  viewMonthlyFDP,
  StoreMonthlyFDP,
  viewMonthlyPackageBysingle,
};
