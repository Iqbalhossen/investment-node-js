const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {ViewDirectSells, viewRoiMintAccept, viewTeamSellsAccept, viewGenerationAccept , StoreBonusBalance, ViewBonusBalance, ViewCoinMiningBonusBalance, StoreCoinMiningBonusBalance} = require('./../../controller/user/BonusController');
route.get('/direct/sells/bonus/:username', checkAuth ,ViewDirectSells);
route.get('/roi/mint/bonus/:username', checkAuth, viewRoiMintAccept);
route.get('/team/sells/bonus/:username', checkAuth, viewTeamSellsAccept);
route.get('/generation/bonus/:username', checkAuth, viewGenerationAccept);


route.get('/balance/view/:username', checkAuth, ViewBonusBalance);
route.post('/balance/store/:username', checkAuth, StoreBonusBalance);


route.get('/coin/mining/balance/view/:username', checkAuth, ViewCoinMiningBonusBalance);
route.post('/coin/mining/balance/store/:username', checkAuth, StoreCoinMiningBonusBalance);


module.exports = route;