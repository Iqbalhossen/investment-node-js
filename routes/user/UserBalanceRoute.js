const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewBalance,} = require('./../../controller/user/UserBalanceController');

route.get('/balance/view/:username', checkAuth, viewBalance);



module.exports = route;