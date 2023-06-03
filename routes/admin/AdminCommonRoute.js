const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewWithdraw, viewDeposit, viewUser, viewActiveUser, viewInactiveUser, viewVerifyUser} = require('./../../controller/admin/AdminCommonController');

route.get('/all/withdraw/view', checkAuth, viewWithdraw);
route.get('/all/deposit/view', checkAuth,  viewDeposit);
route.get('/all/user/view', checkAuth,  viewUser);
route.get('/active/user/view', checkAuth,  viewActiveUser);
route.get('/inactive/user/view', checkAuth,  viewInactiveUser);
route.get('/verify/user/view', checkAuth,  viewVerifyUser);

 

module.exports = route;