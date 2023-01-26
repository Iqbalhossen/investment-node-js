const express = require('express')
const route = express.Router();

const {ViewDirectSells, viewRoiMintAccept, viewTeamSellsAccept, viewGenerationAccept } = require('./../../controller/user/BonusController');
route.get('/direct/sells/bonus/:username', ViewDirectSells);
route.get('/roi/mint/bonus/:username', viewRoiMintAccept);
route.get('/team/sells/bonus/:username', viewTeamSellsAccept);
route.get('/generation/bonus/:username', viewGenerationAccept);


module.exports = route;