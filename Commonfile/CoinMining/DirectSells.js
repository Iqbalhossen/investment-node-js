const InviteGeneration = require('../../models/InviteGenerationModel');
const DirectSellsModel = require('../../models/CoinMiningDirectSellsModel');
const DepositModel = require('../../models/DepositModel');
const { GenerationCommision } = require('./GenerationCommision');


const DirectSells = async (userCommision, user_name) => {

    try {

        // console.log(userCommision);
        // console.log(`DirectSells Commision ${userCommision}`);

        let currentData = new Date();
        // console.log(commision)

        const exsitfirst = await InviteGeneration.findOne({ generation_user_name: user_name });

        // console.log(exsitfirst);


        if (exsitfirst !== null) {

            const amount = ((10 * parseFloat(userCommision)) / 100);
            // console.log(amount)

            const first = { user_name: exsitfirst.user_name, generation_user_name: user_name, commision: amount, created_at: currentData };

            const exsitDeposit = await DepositModel.findOne({ User_id: exsitfirst.user_name });

            if (exsitDeposit !== null) {
                await DirectSellsModel.create(first);
                GenerationCommision(amount, exsitfirst.user_name);
            }






        }





    } catch (error) {
        console.log(error);
    }





}



module.exports = { DirectSells };


////////////////////////////// Usd Generate Commistion Section End

