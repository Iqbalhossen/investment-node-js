const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {ViewDirectSells, viewRoiMintAccept, viewTeamSellsAccept, viewGenerationAccept , StoreBonusBalance, ViewBonusBalance} = require('./../../controller/user/CoinMiningBonusController');
route.get('/direct/sells/bonus/:username', checkAuth, ViewDirectSells);
route.get('/roi/mint/bonus/:username', checkAuth, viewRoiMintAccept);
route.get('/team/sells/bonus/:username', checkAuth, viewTeamSellsAccept);
route.get('/generation/bonus/:username', checkAuth, viewGenerationAccept);
route.get('/balance/view/:username', checkAuth, ViewBonusBalance);
route.post('/balance/store/:username', checkAuth, StoreBonusBalance);


module.exports = route;