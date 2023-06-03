const Notification = require('../../models/NotificationModel');
const { ObjectId } = require('mongodb');


const viewNotification = async (req, res) => {;
    try {
        const created_at = { created_at: -1 };
        Notification.find().sort(created_at)
        .then((results) => {
            res.send(results);
        })
        .catch();


    } catch (error) {
        console.log(error);
    }
   
  
};

const viewNotificationById = async (req, res) => {;
    try {
        const Id = req.params.id;
        const query =  {_id : ObjectId(Id) };
        Notification.findOne(query)
        .then((results) => {
            res.send(results);
        })
        .catch();


    } catch (error) {
        console.log(error);
    }
   
  
};

 

module.exports = { viewNotification, viewNotificationById };
