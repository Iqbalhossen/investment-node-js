const express = require('express')
const route = express.Router();

const {viewDepositPackage, DepositPackageStore, } = require('../../controller/admin/DepositPackageControler');

route.get('/view', viewDepositPackage);
route.post('/store', DepositPackageStore);


module.exports = route;