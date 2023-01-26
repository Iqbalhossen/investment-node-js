const express = require('express')
const route = express.Router();

const {viewUsdGenerate, UserUsdGenerateStore, EarningUsdGenerate, UsdGeneratePackageView, viewUsdGeneratePackage, UsdGeneratePackageViewByAmount, TotalEarningUsdGenerate} = require('./../../controller/user/UsdGenerateController');

route.get('/package/view', UsdGeneratePackageView);
route.get('/package/view/:amount', UsdGeneratePackageViewByAmount);
route.get('/view/:id', viewUsdGenerate);
route.get('/packeage/view/:usd_generate_package_amount/:userName', viewUsdGeneratePackage);
route.get('/earning/view/:userName/:package_id', EarningUsdGenerate);
route.get('/total/earning/view/:userName', TotalEarningUsdGenerate);
route.post('/store', UserUsdGenerateStore);


module.exports = route;