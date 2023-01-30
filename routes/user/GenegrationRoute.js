const express = require('express')
const route = express.Router();

const {viewGenegrationLevelOne, viewGenegrationLevelTwo, viewGenegrationLevelThree, viewGenegrationLevelFour, viewGenegrationLevelFive, viewGenegrationLevelSix, viewGenegrationLevelSeven, viewGenegrationLevelEight, viewGenegrationLevelNine, viewGenegrationLevelTen, ViewTemaMember} = require('./../../controller/user/GenegrationController');

route.get('/team/view/:username', ViewTemaMember);
route.get('/levelOne/view/:username', viewGenegrationLevelOne);
route.get('/leveltwo/view/:username', viewGenegrationLevelTwo);
route.get('/levelthree/view/:username', viewGenegrationLevelThree);
route.get('/levelfour/view/:username', viewGenegrationLevelFour);
route.get('/levelfive/view/:username', viewGenegrationLevelFive);
route.get('/levelsix/view/:username', viewGenegrationLevelSix);
route.get('/levelseven/view/:username', viewGenegrationLevelSeven);
route.get('/leveleight/view/:username', viewGenegrationLevelEight);
route.get('/levelnine/view/:username', viewGenegrationLevelNine);
route.get('/levelten/view/:username', viewGenegrationLevelTen);




module.exports = route;