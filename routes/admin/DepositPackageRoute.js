const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewDepositPackage, DepositPackageStore, } = require('../../controller/admin/DepositPackageControler');

route.get('/view', checkAuth, viewDepositPackage);
route.post('/store', checkAuth, DepositPackageStore);


module.exports = route;