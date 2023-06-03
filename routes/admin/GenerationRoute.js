const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewGeneration, StoreGeneration, } = require('./../../controller/admin/GenerationController');

route.get('/view', checkAuth, viewGeneration);
route.post('/store', checkAuth, StoreGeneration);


module.exports = route;