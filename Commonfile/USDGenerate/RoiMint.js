const RoiMintModel = require('../../models/RoiMintModel');
const InviteGenerationModel = require('../../models/InviteGenerationModel');
const UsdGenerateModel = require('../../models/UsdGenerateModel');

///////////////////////////// Usd Generate Commistion Section start


const  RoiMint =async(commision,user_name) => {

    try {
        
    

        let currentData = new Date();


            // console.log(`roi Mint Commision ${commision}`);
            // console.log(`roi Mint user_name ${user_name}`);

            const exsitfirst = await InviteGenerationModel.findOne({ generation_user_name: user_name });

            // console.log(exsitfirst);
            // Generation Section start


            if (exsitfirst !== null) {


                ///////////////// Fast Generation 

                const amount = ((3* parseFloat(commision)) / 100);
                // console.log(amount)

                const first = { user_name: exsitfirst.user_name, generation_user_name: user_name, commision: amount,  created_at: currentData };

                const exsitfirstDeposit = await UsdGenerateModel.findOne({ user_name: exsitfirst.user_name });

                if (exsitfirstDeposit !== null) {
                    await RoiMintModel.create(first);

                }



                /////////////////// 2 Generation 


                const existsecound = await InviteGenerationModel.findOne({ generation_user_name: exsitfirst.user_name });

                // console.log(existsecound)
                if (existsecound !== null) {

                    const amount2 = ((2 * parseFloat(commision)) / 100);
                    // console.log(amount)

                    const secound = { user_name: existsecound.user_name, generation_user_name: user_name, commision: amount2,  created_at: currentData };

                    const existsecoundDeposit = await UsdGenerateModel.findOne({ user_name: existsecound.user_name });

                    if (existsecoundDeposit !== null) {
                        const data = await RoiMintModel.create(secound);
    
                    }

                    

                    // console.log(data)

                    /////////////////// 3 Generation 

                    const existthird = await InviteGenerationModel.findOne({ generation_user_name: existsecound.user_name });

                    if (existthird !== null) {

                        const amount3 = ((1 * parseFloat(commision)) / 100);

                        const thrid = { user_name: existthird.user_name, generation_user_name: user_name, commision: amount3, created_at: currentData };

                        const existthirdDeposit = await UsdGenerateModel.findOne({ user_name: existthird.user_name });

                    if (existthirdDeposit !== null) {
                        await RoiMintModel.create(thrid);
    
                    }


                        /////////////////// 4 Generation 


                        const existfour = await InviteGenerationModel.findOne({ generation_user_name: existthird.user_name });

                        if (existfour !== null) {


                            const amount4 = ((1 * parseFloat(commision)) / 100);

                            const four = { user_name: existfour.user_name, generation_user_name: user_name, commision: amount4,  created_at: currentData };

                            const existfourDeposit = await UsdGenerateModel.findOne({ user_name: existfour.user_name });

                            if (existfourDeposit !== null) {
                                await RoiMintModel.create(four);
            
                            }
                            

                            /////////////////// 5 Generation 


                            const existfive = await InviteGenerationModel.findOne({ generation_user_name: existfour.user_name });

                            if (existfive !== null) {

                                const amount5 = ((1 * parseFloat(commision)) / 100);

                                const five = { user_name: existfive.user_name, generation_user_name: user_name, commision: amount5, created_at: currentData };

                                const existfiveDeposit = await UsdGenerateModel.findOne({ user_name: existfive.user_name });

                                if (existfiveDeposit !== null) {
                                    await RoiMintModel.create(five);
                
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





module.exports = { RoiMint };


////////////////////////////// Usd Generate Commistion Section End









