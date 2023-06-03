const UsdGenerate = require('../../models/CoinMiningModel');
const UsdGenerateCommision = require('../../models/CoinMiningCommisionModel');
const { RoiMint } = require('./../CoinMining/RoiMint');

///////////////////////////// Usd Generate Commistion Section start

const schedule = require('node-schedule');
let moment = require('moment')
const pending = moment().format('MM/DD/YYYY');


schedule.scheduleJob('1 0 * * 0-6', () => {


const CoinMiningCommsion = async (data) => {

    // console.log('Coin Minnig')
    try {

        const offDay = moment().format('dddd');
       
        // console.log(offDay === "Saturday")



        const findCoinMining = data;
        // off Day 
        if (offDay == "Saturday") {
            // console.log(offDay === "Saturday")
        }
        // off Day 
        else if (offDay !== "Sunday") {

        }
        else {

            const data = await UsdGenerate.find();



            let currentData = new Date();

            for (const userData of findCoinMining) {
                const TotalCommision = await UsdGenerateCommision.find({ package_id: userData._id });



                let AmountSum = 0
                for (let i = 0; i <= TotalCommision.length; i++) {
                    if (TotalCommision[i]) {
                        AmountSum += parseFloat(TotalCommision[i].commision);
                    }

                }

                if (userData.TotalProfit > AmountSum) {

                    const commision = ((0.5 * parseFloat(userData.package_amount)) / 100);


                    const setCommision = { user_name: userData.user_name, package_id: userData._id, time: pending, commision: commision, created_at: currentData, status: true };


                     await UsdGenerateCommision.create(setCommision);
                    // Generation Section start
                    RoiMint(commision, userData.user_name);

                }else{
                    // console.log("Amount Full")
                }






            }

        }



    } catch (error) {
        console.log(error);
    }


}
CoinMiningCommsion().catch(error => console.log(error));

});



 

////////////////////////////// Usd Generate Commistion Section End









