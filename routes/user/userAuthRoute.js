const express = require('express')
const route = express.Router();

const {viewUser, createUser, InviteUser, InviteUserCreate, InviteUserbyUrl, loginUser} = require('./../../controller/user/userAuthenticationController');

route.get('/view', viewUser);
route.post('/login', loginUser);
route.post('/create', createUser);
route.get('/invite/:userName/:id', InviteUser);
route.post('create/by/invite/url', InviteUserbyUrl);
route.post('create/by/invite', InviteUserCreate);
 
module.exports = route;