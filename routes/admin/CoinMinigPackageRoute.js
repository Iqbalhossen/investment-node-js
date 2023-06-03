const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewCoinMinigPackage, storeCoinMinigPackage, DeleteCoinMinigPackage} = require('../../controller/admin/AdminCoinMinigController');

route.get('/view', checkAuth, viewCoinMinigPackage);
route.post('/store', checkAuth, storeCoinMinigPackage);
route.delete('/delete/:id',checkAuth,  DeleteCoinMinigPackage);
 

module.exports = route;