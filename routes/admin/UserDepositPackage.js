const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {adminViewDeposit, UserDepositPackageAcitve, UserDepositReject,UserDepositDelete, adminViewDepositPending, adminViewDepositAccept, adminViewDepositReject, adminViewDepositMonthly, adminViewDepositYearly } = require('./../../controller/admin/UserDepositPackage');

route.get('/view', checkAuth, adminViewDeposit);

route.get('/pending/view', checkAuth, adminViewDepositPending);
route.get('/accept/view', checkAuth, adminViewDepositAccept);
route.get('/reject/view', checkAuth, adminViewDepositReject);


route.put('/accept/:id', checkAuth, UserDepositPackageAcitve);
route.put('/reject/:id', checkAuth, UserDepositReject);
route.delete('/delete/:id', checkAuth, UserDepositDelete);


route.get('/monthly/view', checkAuth, adminViewDepositMonthly);
route.get('/yearly/view', checkAuth, adminViewDepositYearly);


module.exports = route;