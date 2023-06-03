const FakeDeposit = require("./../models/FakeDeposit");
const FakeUser = require("./../models/FakeUser");
const { ObjectId } = require('mongodb');
///////////////////////////// Fake data Section start

const schedule = require("node-schedule");

schedule.scheduleJob("*/59 * * * *", () => {

  const FakeData = async () => {
    try {
      let min = 30;
      let max = 50;
      let rand = min + Math.random() * (max - min);

      const findFakeUser = await FakeUser.find();


      if (findFakeUser.length !== 0) {

        const filter = { _id: ObjectId(findFakeUser[0]._id) };
        const option = { upsert: true };
        const page = {user : parseInt(findFakeUser[0].user) + Math.round(rand)};
        const results = await FakeUser.updateOne(filter, page, option);
    


      } else {

        const data = await FakeUser.create({user: Math.round(rand)})
    
      }




      const findFakeDeposit = await FakeDeposit.find();
      let minDeposit = 100;
      let maxDeposit = 200;
      let randDeposit = minDeposit + Math.random() * (maxDeposit - minDeposit);


      if (findFakeDeposit.length !== 0) {

        const filter = { _id: ObjectId(findFakeDeposit[0]._id) };
        const option = { upsert: true };
        const page = {amount : parseInt(findFakeDeposit[0].amount) + Math.round(randDeposit)};
        const results = await FakeDeposit.updateOne(filter, page, option);

      } else {

        const data = await FakeDeposit.create({amount: Math.round(randDeposit)})
    
      }

    } catch (error) {
      console.log(error);
    }
  };

  FakeData().catch((error) => console.log(error));
});

////////////////////////////// Fake data Section End
