const UsdGenerate = require("./../models/UsdGenerateModel");
const UsdGenerateCommision = require("./../models/UsdGenerateCommisionModel");
const { RoiMint } = require("./USDGenerate/RoiMint");

///////////////////////////// Usd Generate Commistion Section start

let moment = require("moment");
const pending = moment().format("MM/DD/YYYY");
const schedule = require('node-schedule');

schedule.scheduleJob('1 0 * * 0-6', () => {
   

  const UsdGenerateCommsion = async (data) => {
    try {
      const offDay = moment().format("dddd");
  
  
      // off Day
      if (offDay === "Saturday") {
        // console.log( "Saturday")
      }
      // off Day
      else if (offDay === "Sunday") {
        // console.log("Sunday")
      } else {
        // console.log(" Minnig");

        const data = await UsdGenerate.find();



        let currentData = new Date();
        // for Loop section Start

        for (const userData of data) {

            const commision = ((0.5 * parseFloat(userData.package_amount)) / 100);
            // console.log(commision)

            const findUsdGenerate = await UsdGenerateCommision.find({package_id: userData._id });


            let AmountSum = 0
            for (let i = 0; i <= findUsdGenerate.length; i++) {
                if (findUsdGenerate[i]) {
                    AmountSum += parseFloat(findUsdGenerate[i].commision);
                }

            }

            if (userData.TotalProfit > AmountSum) {

              const setCommision = { user_name: userData.user_name, package_id: userData._id, commision: commision,time:pending , created_at: currentData };

              const UsdGenerate = await UsdGenerateCommision.create(setCommision);

              console.log(UsdGenerate);
  
              // Generation Section start
              RoiMint(commision, userData.user_name);


            }else{
              console.log("Amount Full")
          }

           


        }
  
          
        
      }
    } catch (error) {
      console.log(error);
    }
  };

  UsdGenerateCommsion().catch(error => console.log(error));

})





////////////////////////////// Usd Generate Commistion Section End
