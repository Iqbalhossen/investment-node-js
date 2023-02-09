const express = require('express')
const route = express.Router();

const {UsdGenegratePackageStore, UsdGenegratePackageView, UsdGenegratePackagedelete, UsdGenegratePackageedit, UsdGenegratePackageUpdate} = require('../../controller/admin/AdminUsdGenerate');

route.get('/view', UsdGenegratePackageView);
route.get('/delete/:id', UsdGenegratePackagedelete);
route.get('/edit/:id', UsdGenegratePackageedit);
route.get('/update/:id', UsdGenegratePackageUpdate);
route.post('/create', UsdGenegratePackageStore);


module.exports = route;