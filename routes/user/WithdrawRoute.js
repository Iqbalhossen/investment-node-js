const express = require('express')
const route = express.Router();

const {viewWithdraw, StoreWithdraw, PendingWithdraw, AcceptWithdraw} = require('./../../controller/user/WithdrawController');

route.get('/view/:username/:id', viewWithdraw);
route.get('/pending/view/:username/:id', PendingWithdraw);
route.get('/accept/view/:username/:id', AcceptWithdraw);
route.post('/store/:username/:id', StoreWithdraw);
 
module.exports = route;