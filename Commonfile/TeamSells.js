const InviteGenerationModel = require('../models/InviteGenerationModel');
const TeamSellsModel = require('../models/TeamSellsModel');
const UsdGenerateModel = require('../models/UsdGenerateModel');
const { GenerationCommision } = require('./GenerationCommision');


///////////////////////////// Usd Generate Commistion Section start


const TeamSells = async (commision, user_name) => {

    try {

        let currentData = new Date();

        const exsitfirst = await InviteGenerationModel.findOne({ generation_user_name: user_name });

        // console.log(exsitfirst);
        // Generation Section start


        if (exsitfirst !== null) {


            ///////////////// Fast Generation 

            const amount = ((5 * parseFloat(commision)) / 100);
            // console.log(amount)

            const first = { user_name: exsitfirst.user_name, generation_user_name: user_name, commision: amount, created_at: currentData };

            // await TeamSellsModel.create(first);



            /////////////////// 2 Generation 


            const existsecound = await InviteGenerationModel.findOne({ generation_user_name: exsitfirst.user_name });

            // console.log(existsecound)
            if (existsecound !== null) {

                const amount2 = ((5 * parseFloat(commision)) / 100);
                // console.log(amount)

                const secound = { user_name: existsecound.user_name, generation_user_name: user_name, commision: amount2, created_at: currentData };

                const existsecoundDeposit = await UsdGenerateModel.findOne({ user_name: existsecound.user_name });

                if (existsecoundDeposit !== null) {
                    const data = await TeamSellsModel.create(secound);

                    GenerationCommision(amount2, existsecound.user_name);
                }





                // console.log(data)

                /////////////////// 3 Generation 

                const existthird = await InviteGenerationModel.findOne({ generation_user_name: existsecound.user_name });

                if (existthird !== null) {

                    const amount3 = ((4 * parseFloat(commision)) / 100);

                    const thrid = { user_name: existthird.user_name, generation_user_name: user_name, commision: amount3, created_at: currentData };

                    const existthirdDeposit = await UsdGenerateModel.findOne({ user_name: existthird.user_name });

                    if (existthirdDeposit !== null) {
                        await TeamSellsModel.create(thrid);

                        GenerationCommision(amount3, existthird.user_name);
                    }




                    /////////////////// 4 Generation 


                    const existfour = await InviteGenerationModel.findOne({ generation_user_name: existthird.user_name });

                    if (existfour !== null) {


                        const amount4 = ((3 * parseFloat(commision)) / 100);

                        const four = { user_name: existfour.user_name, generation_user_name: user_name, commision: amount4, created_at: currentData };

                        const existfourDeposit = await UsdGenerateModel.findOne({ user_name: existfour.user_name });

                        if (existfourDeposit !== null) {
                            await TeamSellsModel.create(four);
                            GenerationCommision(amount4, existfour.user_name);
                        }




                        /////////////////// 5 Generation 


                        const existfive = await InviteGenerationModel.findOne({ generation_user_name: existfour.user_name });

                        if (existfive !== null) {

                            const amount5 = ((2 * parseFloat(commision)) / 100);

                            const five = { user_name: existfive.user_name, generation_user_name: user_name, commision: amount5, created_at: currentData };

                            const existfiveDeposit = await UsdGenerateModel.findOne({ user_name: existfive.user_name });

                            if (existfiveDeposit !== null) {
                                await TeamSellsModel.create(five);
                                GenerationCommision(amount5, existfive.user_name);
                            }





                            const existsix = await InviteGenerationModel.findOne({ generation_user_name: existfive.user_name });

                            if (existsix !== null) {

                                const amount6 = ((1 * parseFloat(commision)) / 100);

                                const six = { user_name: existsix.user_name, generation_user_name: user_name, commision: amount6, created_at: currentData };

                                const existsixDeposit = await UsdGenerateModel.findOne({ user_name: existsix.user_name });

                                if (existsixDeposit !== null) {
                                    await TeamSellsModel.create(six);

                                    GenerationCommision(amount6, amount6.user_name);
                                }









                            }



                        }

                    }


                }
            }

        }



        // for Loop section End

    } catch (error) {
        console.log(error);
    }



}





module.exports = { TeamSells };


////////////////////////////// Usd Generate Commistion Section End









