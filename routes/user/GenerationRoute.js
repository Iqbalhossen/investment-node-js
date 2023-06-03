const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewGenerationLevelOne, viewGenerationLevelTwo, viewGenerationLevelThree, viewGenerationLevelFour, viewGenerationLevelFive, viewGenerationLevelSix, viewGenerationLevelSeven, viewGenerationLevelEight, viewGenerationLevelNine, viewGenerationLevelTen, ViewTemaMember} = require('../../controller/user/GenerationController');

route.get('/team/view/:username', checkAuth, ViewTemaMember);
route.get('/levelOne/view/:username', checkAuth, viewGenerationLevelOne);
route.get('/leveltwo/view/:username', checkAuth, viewGenerationLevelTwo);
route.get('/levelthree/view/:username', checkAuth, viewGenerationLevelThree);
route.get('/levelfour/view/:username', checkAuth, viewGenerationLevelFour);
route.get('/levelfive/view/:username', checkAuth, viewGenerationLevelFive);
route.get('/levelsix/view/:username', checkAuth, viewGenerationLevelSix);
route.get('/levelseven/view/:username', checkAuth, viewGenerationLevelSeven);
route.get('/leveleight/view/:username', checkAuth, viewGenerationLevelEight);
route.get('/levelnine/view/:username', checkAuth, viewGenerationLevelNine);
route.get('/levelten/view/:username', checkAuth, viewGenerationLevelTen);




module.exports = route;