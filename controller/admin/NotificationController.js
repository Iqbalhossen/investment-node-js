const Notification = require('../../models/NotificationModel');
const User = require('../../models/userModels');
const { ObjectId } = require('mongodb');

const {SingleUserMailSend, MultipleUserMailSend} = require('../../Commonfile/Mail/AdminMailSend')

const viewNotification = async (req, res) => {;
    try {
        const created_at = { created_at: -1 };
      await  Notification.find().sort(created_at)
        .then((results) => {
            res.status(201).json({
                success: true,
                data: results,
            });
        })
        .catch();


    } catch (error) {
        console.log(error);
    }
   
  
};

const viewNotificationById = async (req, res) => {
    const id = req.params.id;
    try {
      await  Notification.findOne({ _id: ObjectId(id) })
        .then((results) => {
            res.status(201).json({
                success: true,
                data: results,
            });
        })
        .catch();
    } catch (error) {
        console.log(error);
    }
   
  
};


const StoreNotification = async (req, res) => {
    const usdNotification = req.body;

    try {

        if (!req.body.Title) {
            return res.status(400).json({
                success: false,
                message: "Title Field is required",
            });

        }
        if (!req.body.messages) {
            return res.status(400).json({
                success: false,
                message: "messages Field is required",
            });

        }

        const data = await Notification.create(usdNotification);
        const newData = { data }

        // console.log((users._id).toString());
        res.status(201).json({
            success: true,
            message: "Notification create successfully",
            data: newData,
        });



    } catch (error) {
        console.log(error);
    }
};


const UpdateNotification = async (req, res) => {
    // console.log(deposit);
  
    try {
      const id = req.params.id;
      const page = req.body;
      const filter = { _id: ObjectId(id) };
      const option = { upsert: true };
  
      const results = await Notification.updateOne(filter, page, option);
  
      const newData = { results };
      // console.log(newData)
      res.status(201).json({
        success: true,
        message: "Notification update successfully",
        data: newData,
      });
    } catch (error) {
      console.log(error);
    }
  };




const DeleteNotification = async (req, res) => {

    try {

        const notification = req.params.id;

        const query = { _id: ObjectId(notification) };

        const data = await Notification.findByIdAndRemove(query);

        res.status(201).json({
            success: true,
            message: "Notification Delete successfully",
            data: data
        });

        // res.send(page);

    } catch (error) {
        console.log(error);
    }



};


const SingleUserMail = async (req, res) => {
    const MailMessage = req.body;

    try {

        if (!MailMessage.email) {
            return res.status(400).json({
                success: false,
                message: "User name Field is required",
            });

        }
        if (!MailMessage.subject) {
            return res.status(400).json({
                success: false,
                message: "subject Field is required",
            });

        }


        if (!MailMessage.messages) {
            return res.status(400).json({
                success: false,
                message: "messages Field is required",
            });

        }

        SingleUserMailSend(MailMessage);

       
        res.status(201).json({
            success: true,
            message: "Mail Send successfully",
        });



    } catch (error) {
        console.log(error);
    }
};
const MultipleUserMail = async (req, res) => {
    const MailMessage = req.body;

    try {
        if (!MailMessage.subject) {
            return res.status(400).json({
                success: false,
                message: "subject Field is required",
            });

        }


        if (!MailMessage.messages) {
            return res.status(400).json({
                success: false,
                message: "messages Field is required",
            });

        }


        const findUser = await User.find();

        for (const userData of findUser) {

            MultipleUserMailSend(MailMessage, userData.email);
        }
       

        res.status(201).json({
            success: true,
            message: "Mail Send successfully",
        });



    } catch (error) {
        console.log(error);
    }
};



module.exports = { viewNotification, StoreNotification, DeleteNotification, viewNotificationById, UpdateNotification, SingleUserMail, MultipleUserMail,};
