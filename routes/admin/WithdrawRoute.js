const express = require('express')
const route = express.Router();

const {viewWithdraw, AcceptWithdraw, RejectWithdraw, } = require('./../../controller/admin/WithdrawController');

route.get('/view', viewWithdraw);

route.post('/accept/:id', AcceptWithdraw);
route.post('/reject/:id', RejectWithdraw);
 
module.exports = route;