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


const viewGenegrationLevelOne = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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



const viewGenegrationLevelTwo = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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



const viewGenegrationLevelThree = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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



const viewGenegrationLevelFour = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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



const viewGenegrationLevelFive = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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


const viewGenegrationLevelSix = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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


const viewGenegrationLevelSeven = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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


const viewGenegrationLevelEight = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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


const viewGenegrationLevelNine = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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


const viewGenegrationLevelTen = async (req, res) => {
    const userId = req.params.username;
    console.log(userId)
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



module.exports = {viewGenegrationLevelOne, viewGenegrationLevelTwo, viewGenegrationLevelThree, viewGenegrationLevelFour, viewGenegrationLevelFive, viewGenegrationLevelSix, viewGenegrationLevelSeven, viewGenegrationLevelEight, viewGenegrationLevelNine, viewGenegrationLevelTen, ViewTemaMember};
