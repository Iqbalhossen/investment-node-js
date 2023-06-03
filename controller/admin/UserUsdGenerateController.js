const UsdGenerateModel = require('../../models/UsdGenerateModel');
const UsdGenerateCommision = require('../../models/UsdGenerateCommisionModel');

const { ObjectId } = require('mongodb');




const UsdGenegrateView = async (req, res) => {

    try {
        const data = await UsdGenerateModel.find().sort({ created_at: -1 });
        let AmountSum = 0;
        for (let i = 0; i <= data.length; i++) {
          if (data[i]) {
            AmountSum += parseFloat(data[i].package_amount);
          }
        }  
        res.status(201).json({
            success: true,
            data:data,
            total:AmountSum,
            length: data.length,
        });


    } catch (error) {
        console.log(error);
    }


};

const UsdGenegrateCommissionView = async (req, res) => {
  const id = req.params.id;
    try {
        const data = await UsdGenerateCommision.find({package_id:id}).sort({ created_at: -1 });
        const UsdGenerate = await UsdGenerateModel.findOne({ _id: ObjectId(id) });
        let AmountSum = 0;
        for (let i = 0; i <= data.length; i++) {
          if (data[i]) {
            AmountSum += parseFloat(data[i].commision);
          }
        }  
        res.status(201).json({
            success: true,
            UsdGenerate:UsdGenerate,
            data:data,
            total:AmountSum,
            length: data.length,
        });


    } catch (error) {
        console.log(error);
    }


};







module.exports = {UsdGenegrateView, UsdGenegrateCommissionView};
