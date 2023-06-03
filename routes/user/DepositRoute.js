const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewDepositPending, UserDepositStore, viewDepositAccept, viewDeposit } = require('./../../controller/user/DepositController');

route.post('/store', checkAuth, UserDepositStore);

route.get('/pending/view/:username', checkAuth,  viewDepositPending);
route.get('/accept/view/:username', checkAuth, viewDepositAccept);
route.get('/view/:username', checkAuth, viewDeposit);


module.exports = route;