const express = require('express')
const route = express.Router();

const {adminViewDeposit, UserDepositPackageAcitve, } = require('./../../controller/admin/UserDepositPackage');

route.get('/view', adminViewDeposit);
route.post('/update/:id', UserDepositPackageAcitve);


module.exports = route;