const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {UsdGenegratePackageStore, UsdGenegratePackageView, UsdGenegratePackagedelete, UsdGenegratePackageedit, UsdGenegratePackageUpdate} = require('../../controller/admin/AdminUsdGenerate');

route.get('/view', checkAuth, UsdGenegratePackageView);
route.get('/delete/:id', checkAuth, UsdGenegratePackagedelete);
route.get('/edit/:id', checkAuth, UsdGenegratePackageedit);
route.get('/update/:id', checkAuth, UsdGenegratePackageUpdate);
route.post('/create', checkAuth, UsdGenegratePackageStore);

 
module.exports = route;