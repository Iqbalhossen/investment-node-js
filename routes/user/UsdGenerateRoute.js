const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewUsdGenerate, UserUsdGenerateStore, EarningUsdGenerate, UsdGeneratePackageView, viewUsdGeneratePackage, UsdGeneratePackageViewByAmount, TotalEarningUsdGenerate, GenerationView} = require('./../../controller/user/UsdGenerateController');

route.get('/package/view', checkAuth, UsdGeneratePackageView);
route.get('/package/view/:amount', checkAuth, UsdGeneratePackageViewByAmount);
route.get('/view/:id', checkAuth, viewUsdGenerate);
route.get('/packeage/view/:usd_generate_package_amount/:userName', checkAuth, viewUsdGeneratePackage);
route.get('/earning/view/:userName/:package_id', EarningUsdGenerate);
route.get('/total/earning/view/:userName', checkAuth, TotalEarningUsdGenerate);
route.get('/generation/view/:userName', checkAuth, GenerationView);
route.post('/store', checkAuth, UserUsdGenerateStore);


module.exports = route;