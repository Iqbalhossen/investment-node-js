const express = require('express')
const route = express.Router();

const {viewUser, createUser} = require('./../../controller/user/userAuthenticationController');

route.get('/test', viewUser);
route.post('/test', createUser);

module.exports = route;