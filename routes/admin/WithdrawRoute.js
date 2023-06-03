const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewWithdraw, AcceptWithdraw, RejectWithdraw, viewWithdrawAccept, viewWithdrawReject, viewWithdrawPending, adminViewWithdrawMonthly,  adminViewWithdrawYearly} = require('./../../controller/admin/WithdrawController');

route.get('/view', checkAuth, viewWithdraw);
route.get('/pending/view', checkAuth, viewWithdrawPending);
route.get('/accept/view', checkAuth, viewWithdrawAccept);
route.get('/reject/view', checkAuth, viewWithdrawReject);

route.put('/accept/:id', checkAuth, AcceptWithdraw);
route.put('/reject/:id', checkAuth, RejectWithdraw);
  

route.get('/monthly/view', checkAuth, adminViewWithdrawMonthly);
route.get('/yearly/view', checkAuth, adminViewWithdrawYearly);




module.exports = route;