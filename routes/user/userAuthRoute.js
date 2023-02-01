const express = require('express')
const route = express.Router();

const {viewUser, createUser, InviteUser, InviteUserCreate, InviteUserbyUrl, loginUser, verifyEmail, verifyEmailSend} = require('./../../controller/user/userAuthenticationController');

route.get('/view/:userName/:id', viewUser);
route.post('/login', loginUser);
route.post('/create', createUser);
route.get('/invite/:userName/:id', InviteUser);
route.post('/create/by/invite/url', InviteUserbyUrl);
route.post('/create/by/invite', InviteUserCreate);
route.get('/verify/:id', verifyEmail);
route.get('/verify/email/send/:user_id', verifyEmailSend);
 
module.exports = route;