const express = require('express')
const route = express.Router();

const {UsdGenegratePackageStore} = require('../../controller/admin/AdminUsdGenerate');

route.post('/create', UsdGenegratePackageStore);


module.exports = route;