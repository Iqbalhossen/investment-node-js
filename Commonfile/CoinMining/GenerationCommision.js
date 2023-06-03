const InviteGenerationModel = require('../../models/InviteGenerationModel');
const GenerationModel = require('../../models/CoinMiningGenerationModel');
const DepositModel = require('../../models/DepositModel');     
let moment = require('moment')

const  GenerationCommision =async(commision,user_name) => {

    try {
        
    const offDay = moment().format('dddd');

       

    let currentData = new Date();


    const exsitfirst = await InviteGenerationModel.findOne({ generation_user_name: user_name });

    // console.log(exsitfirst);
    // Generation Section start

    if (exsitfirst !== null) {


        ///////////////// Fast Generation 
    
        const amount = ((10 * parseFloat(commision)) / 100);
        // console.log(amount)
    
        const first = { user_name: exsitfirst.user_name, generation_user_name: user_name, commision: amount,  created_at: currentData };
    
        
        const exsitfirstDeposit = await DepositModel.findOne({ User_id: exsitfirst.user_name });

        if (exsitfirstDeposit !== null) {
            await GenerationModel.create(first);
        }


      
    
    
    
        /////////////////// 2 Generation 
    
    
        const existsecound = await InviteGenerationModel.findOne({ generation_user_name: exsitfirst.user_name });
    
        // console.log(existsecound)
        if (existsecound !== null) {
    
            const amount2 = ((7 * parseFloat(commision)) / 100);
            // console.log(amount)
    
            const secound = { user_name: existsecound.user_name, generation_user_name: user_name, commision: amount2, created_at: currentData };
    
            const existsecoundDeposit = await DepositModel.findOne({ User_id: existsecound.user_name });

            if (existsecoundDeposit !== null) {
                const data = await GenerationModel.create(secound);
            }

    
            // console.log(data)
    
            /////////////////// 3 Generation 
    
            const existthird = await InviteGenerationModel.findOne({ generation_user_name: existsecound.user_name });
    
            if (existthird !== null) {
    
                const amount3 = ((5 * parseFloat(commision)) / 100);
    
                const thrid = { user_name: existthird.user_name, generation_user_name: user_name, commision: amount3, created_at: currentData };

                const existthirdDeposit = await DepositModel.findOne({ User_id: existthird.user_name });

                if (existthirdDeposit !== null) {
                    await GenerationModel.create(thrid);

                }
    
    
                /////////////////// 4 Generation 
    
    
                const existfour = await InviteGenerationModel.findOne({ generation_user_name: existthird.user_name });
    
                if (existfour !== null) {
    
    
                    const amount4 = ((3 * parseFloat(commision)) / 100);
    
                    const four = { user_name: existfour.user_name, generation_user_name: user_name, commision: amount4,  created_at: currentData };

                    const existfourDeposit = await DepositModel.findOne({ User_id: existfour.user_name });

                    if (existfourDeposit !== null) {
                        await GenerationModel.create(four);

                    }
    
                    
    
                    /////////////////// 5 Generation 
    
    
                    const existfive = await InviteGenerationModel.findOne({ generation_user_name: existfour.user_name });
    
                    if (existfive !== null) {
    
                        const amount5 = ((2 * parseFloat(commision)) / 100);
    
                        const five = { user_name: existfive.user_name, generation_user_name: user_name, commision: amount5,  created_at: currentData };

                        const existfiveDeposit = await DepositModel.findOne({ User_id: existfive.user_name });

                        if (existfiveDeposit !== null) {
                            await GenerationModel.create(five);

                        }
    
    
                        /////////////////// 6 Generation 
    
    
                        const existsix = await InviteGenerationModel.findOne({ generation_user_name: existfive.user_name });
    
                        if (existsix !== null) {
    
                            const amount5 = ((1 * parseFloat(commision)) / 100);
    
                            const six = { user_name: existsix.user_name, generation_user_name: user_name, commision: amount5,  created_at: currentData };

                            const existsixDeposit = await DepositModel.findOne({ User_id: existsix.user_name });

                            if (existsixDeposit !== null) {
                                await GenerationModel.create(six);
    
                            }

    
                     
    
                            /////////////////// 7 Generation 
    
    
                            const existseven = await InviteGenerationModel.findOne({ generation_user_name: existsix.user_name });
    
                            if (existseven !== null) {
    
                                const amount5 = ((1 * parseFloat(commision)) / 100);
    
                                const seven = { user_name: existseven.user_name, generation_user_name: user_name, commision: amount5,  created_at: currentData };

                                const existsevenDeposit = await DepositModel.findOne({ User_id: existseven.user_name });

                                if (existsevenDeposit !== null) {
                                    await GenerationModel.create(seven);
        
                                }
    
                               
    
                                /////////////////// 8 Generation 
    
    
                                const existeight = await InviteGenerationModel.findOne({ generation_user_name: existseven.user_name });
                                if (existeight !== null) {
    
                                    const amount5 = ((1 * parseFloat(commision)) / 100);
    
                                    const eight = { user_name: existeight.user_name, generation_user_name: user_name, commision: amount5,  created_at: currentData };

                                    const existeightDeposit = await DepositModel.findOne({ User_id: existeight.user_name });

                                    if (existeightDeposit !== null) {
                                        await GenerationModel.create(eight);
            
                                    }
    
                                   
    
    
                                    /////////////////// 9 Generation 
    
    
                                    const existnine = await InviteGenerationModel.findOne({ generation_user_name: existeight.user_name });
    
                                    if (existnine !== null) {
                                        const amount5 = ((1 * parseFloat(commision)) / 100);
    
                                        const nine = { user_name: existnine.user_name, generation_user_name: user_name, commision: amount5, created_at: currentData };

                                        const existnineDeposit = await DepositModel.findOne({ User_id: existnine.user_name });

                                        if (existnineDeposit !== null) {
                                            await GenerationModel.create(nine);
                
                                        }
    
                                        
    
                                        /////////////////// 10 Generation 
    
    
                                        const existten = await InviteGenerationModel.findOne({ generation_user_name: existnine.user_name });
                                        if (existten !== null) {
                                            const amount5 = ((1 * parseFloat(commision)) / 100);
    
                                            const ten = { user_name: existten.user_name, generation_user_name: user_name, commision: amount5,  created_at: currentData };

                                            const existtenDeposit = await DepositModel.findOne({ User_id: existten.user_name });

                                            if (existtenDeposit !== null) {
                                                await GenerationModel.create(ten);
                    
                                            }
    
                                            
                                        }
                                    }
                                }
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





module.exports = { GenerationCommision };