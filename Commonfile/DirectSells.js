const InviteGeneration = require('../models/InviteGenerationModel');
const DirectSellsModel = require('../models/DirectSellsModel');

const DirectSells = async (userCommision, user_name) => {

    try {

        // console.log(bfaafaf);


        let currentData = new Date();
        // console.log(commision)

        const exsitfirst = await InviteGeneration.findOne({ generation_user_name: user_name });

        // console.log(exsitfirst);


        if (exsitfirst !== null) {

            const amount = ((10 * parseFloat(userCommision)) / 100);
            // console.log(amount)

            const first = { user_name: exsitfirst.user_name, generation_user_name: user_name, commision: amount, created_at: currentData };

            await DirectSellsModel.create(first);



        }





    } catch (error) {
        console.log(error);
    }





}



module.exports = { DirectSells };


////////////////////////////// Usd Generate Commistion Section End
















module.exports = { DirectSells };