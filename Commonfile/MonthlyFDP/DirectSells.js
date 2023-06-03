const InviteGeneration = require('../../models/InviteGenerationModel');
const MonthlyFDPDirectSells = require('./../../models/MonthlyFDPDirectSellsModel');
const DepositModel = require('../../models/DepositModel');
const { GenerationCommision } = require('./GenerationCommision');


const DirectSells = async (userCommision, user_name) => {

    try {

        // console.log("Monthly Direct Running", userCommision, user_name);


        let currentData = new Date();

        const exsitfirst = await InviteGeneration.findOne({ generation_user_name: user_name });
        if (exsitfirst !== null) {
            const amount = ((10 * parseFloat(userCommision)) / 100);
            const first = { user_name: exsitfirst.user_name, generation_user_name: user_name, commision: amount, created_at: currentData };
            const exsitDeposit = await DepositModel.findOne({ User_id: exsitfirst.user_name });
            if (exsitDeposit !== null) {
                await MonthlyFDPDirectSells.create(first);
                GenerationCommision(amount, exsitfirst.user_name);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = { DirectSells };

////////////////////////////// Usd Generate Commistion Section End

