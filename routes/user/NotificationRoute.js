const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewNotification, } = require('./../../controller/user/NotificationController');

route.get('/view', checkAuth, viewNotification);
route.get('/view/:id', checkAuth, viewNotification);



module.exports = route;