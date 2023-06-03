const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewNotification, StoreNotification,DeleteNotification, viewNotificationById, UpdateNotification, SingleUserMail, MultipleUserMail} = require('./../../controller/admin/NotificationController');

route.get('/view', checkAuth, viewNotification);
route.get('/view/:id', checkAuth, viewNotificationById);
route.post('/create', StoreNotification);
route.put('/update/:id', checkAuth, UpdateNotification);
route.delete('/delete/:id', checkAuth, DeleteNotification);


// Email Send 


route.post('/single/user/mail/send', checkAuth, SingleUserMail);
route.post('/multiple/user/mail/send', checkAuth, MultipleUserMail);


module.exports = route;