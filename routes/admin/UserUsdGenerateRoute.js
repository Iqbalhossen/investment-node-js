const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {UsdGenegrateView, UsdGenegrateCommissionView} = require('../../controller/admin/UserUsdGenerateController');

route.get('/view', checkAuth, UsdGenegrateView);
route.get('/commision/view/:id', checkAuth, UsdGenegrateCommissionView);


 
module.exports = route;