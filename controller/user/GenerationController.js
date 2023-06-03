const InviteGenerationModel = require('../../models/InviteGenerationModel');

const { ObjectId } = require('mongodb');



const ViewTemaMember = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)

    try {
        const acceptDeposit = { user_name: userId  };


        const data = await InviteGenerationModel.find(acceptDeposit)
        newData = {data}
        res.status(201).json({
            success: true,
            data: newData,
        });
        // console.log(data)


    } catch (error) {
        console.log(error);
    }


};


const viewGenerationLevelOne = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"1st Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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



const viewGenerationLevelTwo = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"2nd Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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



const viewGenerationLevelThree = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"3rd Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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



const viewGenerationLevelFour = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"4th Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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



const viewGenerationLevelFive = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"5th Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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


const viewGenerationLevelSix = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"6th Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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


const viewGenerationLevelSeven = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"7th Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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


const viewGenerationLevelEight = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"8th Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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


const viewGenerationLevelNine = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"9th Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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


const viewGenerationLevelTen = async (req, res) => {
    const userId = req.params.username;
    // console.log(userId)
    try {
        const acceptDeposit = { user_name: userId,  generation:"10th Gen"};

        const data = await InviteGenerationModel.find(acceptDeposit)
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



module.exports = {viewGenerationLevelOne, viewGenerationLevelTwo, viewGenerationLevelThree, viewGenerationLevelFour, viewGenerationLevelFive, viewGenerationLevelSix, viewGenerationLevelSeven, viewGenerationLevelEight, viewGenerationLevelNine, viewGenerationLevelTen, ViewTemaMember};
