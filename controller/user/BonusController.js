const DirectSells = require('../../models/DirectSellsModel');
const Generation = require('../../models/GenerationModel');
const RoiMint = require('../../models/RoiMintModel');
const TeamSells = require('../../models/TeamSellsModel');

const { ObjectId } = require('mongodb');




const ViewDirectSells = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)

    try {
        const acceptDeposit = { user_name: userId  };


        const data = await DirectSells.find(acceptDeposit)
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });
        console.log(data)


    } catch (error) {
        console.log(error);
    }


};
const viewGenerationAccept = async (req, res) => {
    const userId = req.params.username;

    try {


        const data = await Generation.find({ user_name: userId })
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });

        // console.log(newData)

    } catch (error) {
        console.log(error);
    }


};
const viewTeamSellsAccept = async (req, res) => {
    const userId = req.params.username;

    try {


        const data = await TeamSells.find({ user_name: userId })
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });

        // console.log(newData)

    } catch (error) {
        console.log(error);
    }


};
const viewRoiMintAccept = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
    try {
        const acceptDeposit = { user_name: userId  };

        const data = await RoiMint.find(acceptDeposit)
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });

        // console.log(newData)

    } catch (error) {
        console.log(error);
    }


};




module.exports = {ViewDirectSells, viewRoiMintAccept, viewTeamSellsAccept, viewGenerationAccept };
