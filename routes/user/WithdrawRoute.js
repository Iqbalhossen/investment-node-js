const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewWithdraw, StoreWithdraw, PendingWithdraw, AcceptWithdraw} = require('./../../controller/user/WithdrawController');

route.get('/view/:username/:id', checkAuth, viewWithdraw);
route.get('/pending/view/:username/:id', checkAuth, PendingWithdraw);
route.get('/accept/view/:username/:id', checkAuth, AcceptWithdraw);
route.post('/store/:username/:id', checkAuth, StoreWithdraw);
 
module.exports = route;