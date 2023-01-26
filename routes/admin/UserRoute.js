const express = require('express')
const route = express.Router();

const {UserStore, } = require('./../../controller/admin/AdminUserController');

route.post('/create', UserStore);


module.exports = route;