const express = require('express')
const route = express.Router();

const {ViewDirectSells, viewRoiMintAccept, viewTeamSellsAccept, viewGenerationAccept , StoreBonusBalance, ViewBonusBalance} = require('./../../controller/user/BonusController');
route.get('/direct/sells/bonus/:username', ViewDirectSells);
route.get('/roi/mint/bonus/:username', viewRoiMintAccept);
route.get('/team/sells/bonus/:username', viewTeamSellsAccept);
route.get('/generation/bonus/:username', viewGenerationAccept);
route.get('/balance/view/:username', ViewBonusBalance);
route.post('/balance/store/:username', StoreBonusBalance);


module.exports = route;