const express = require('express')
const route = express.Router();

const {viewGeneration, StoreGeneration, } = require('./../../controller/admin/GenerationController');

route.get('/view', viewGeneration);
route.post('/store', StoreGeneration);


module.exports = route;