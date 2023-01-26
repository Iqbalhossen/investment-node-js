const Generation = require('../../models/GenerationModel');
const { ObjectId } = require('mongodb');


const viewGeneration = async (req, res) => {;
    try {
        Generation.find()
        .then((results) => {
            res.send(results);
        })
        .catch();


    } catch (error) {
        console.log(error);
    }
   
  
};

const StoreGeneration = async (req, res) => {
    const usdGenerate = req.body;

    try {

        const data = await Generation.create(usdGenerate);
        const newData = { data }

        // console.log((users._id).toString());
        res.status(201).json({
            success: true,
            message: "Generate create successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};




module.exports = { viewGeneration, StoreGeneration };
