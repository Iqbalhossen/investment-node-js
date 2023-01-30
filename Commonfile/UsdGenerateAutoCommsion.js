const UsdGenerate = require('../models/UsdGenerateModel');
const UsdGenerateCommision = require('../models/UsdGenerateCommisionModel');
const { RoiMint } = require('./USDGenerate/RoiMint');


// RoiMint("i am Comming2 Roi Mint")

///////////////////////////// Usd Generate Commistion Section start

const schedule = require('node-schedule');
const sameDate = new Date();
let moment = require('moment')

schedule.scheduleJob('*/60 * * * *', () => {

    async function run() {



        try {

            const offDay = moment().format('dddd');



            if (offDay !== "Sunday" || offDay !== "Saturday") {


                const data = await UsdGenerate.find();

                // console.log(data);


                let currentData = new Date();
                // for Loop section Start

                for (const userData of data) {

                    // const TotalCommision = await UsdGenerateCommision.find(setCommision);

                    // let AmountSum = 0
                    // for (let i = 0; i <= TotalCommision.length; i++) {
                    //     if (TotalCommision[i]) {
                    //         AmountSum += parseFloat(TotalCommision[i].commision);
                    //     }

                    // }

                    // if(userData.total_profit === AmountSum){

                    // }

                    const commision = ((0.5 * parseFloat(userData.package_amount)) / 100);
                    // console.log(commision)

                    const setCommision = { user_name: userData.user_name, package_id: userData._id, commision: commision, created_at: currentData };

                    const UsdGenerate = await UsdGenerateCommision.create(setCommision);




                    // console.log(exsitfirst);
                    // Generation Section start
                    RoiMint(commision, userData.user_name);


                }

                // for Loop section End



            }



        } catch (error) {
            console.log(error);
        }
    }

    run().catch(error => console.log(error));





})






////////////////////////////// Usd Generate Commistion Section End









