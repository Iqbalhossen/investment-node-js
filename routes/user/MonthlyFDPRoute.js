const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const { UserMonthlyPackageStore, viewMonthlyPackage, ViewDirectSells, viewTeamSells, viewGeneration, viewMonthlyDeposit, viewMonthlyFDP, StoreMonthlyFDP, viewMonthlyPackageBysingle} = require('./../../controller/user//MonthlyFDPController');

route.post('/store', UserMonthlyPackageStore);

route.get('/view/:username', checkAuth, viewMonthlyPackage);
route.get('/view/by/single/:username/:id', checkAuth, viewMonthlyPackageBysingle);
route.get('/ftp/view/:username/:id', checkAuth, viewMonthlyFDP);
route.get('/depoist/view/:username/:id', checkAuth, viewMonthlyDeposit);
route.get('/direct/sells/bonus/:username', checkAuth, ViewDirectSells);
route.get('/team/sells/bonus/:username', checkAuth, viewTeamSells);
route.get('/generation/bonus/:username', checkAuth, viewGeneration);
route.post('/fdp/montly/:username/:id', checkAuth, StoreMonthlyFDP);
// route.get('/view/:username', viewDeposit);


module.exports = route;