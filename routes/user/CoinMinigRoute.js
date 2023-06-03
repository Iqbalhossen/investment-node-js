const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewUsdGenerate, CoinMinigStore, EarningUsdGenerate, CoinMinigPackageView, viewUsdGeneratePackage, CoinMinigPackageViewByAmount, TotalEarningUsdGenerate, GenerationView} = require('./../../controller/user/CoinMiningController');

route.get('/package/view', checkAuth, CoinMinigPackageView);
route.get('/package/view/:amount', checkAuth, CoinMinigPackageViewByAmount);
route.get('/view/:id', checkAuth, viewUsdGenerate);
route.get('/packeage/view/:usd_generate_package_amount/:userName', checkAuth, viewUsdGeneratePackage);
route.get('/earning/view/:userName/:package_id', checkAuth, EarningUsdGenerate);
route.get('/total/earning/view/:userName', checkAuth, TotalEarningUsdGenerate);
route.get('/generation/view/:userName', checkAuth, GenerationView);
route.post('/store', checkAuth, CoinMinigStore);

 

module.exports = route;