const express = require('express')
const route = express.Router();
const multer = require('multer')
const {imageUpload} = require('./../../helpers/filehelper');
const {checkAuth} = require('../../middlewares/userAuth');

const { viewUser, createUser, InviteUser, InviteUserCreate, InviteUserbyUrl, loginUser, verifyEmail, verifyEmailSend, ForgotPassword, ResetPassword, ChangeImage, ChangeProfile, ChangePassword } = require('./../../controller/user/userAuthenticationController');

route.get('/view/:userName/:id', checkAuth, viewUser);
route.post('/login', checkAuth, loginUser);
route.post('/create', checkAuth, createUser);
route.get('/invite/:userName/:id', checkAuth, InviteUser);
route.post('/create/by/invite/url', checkAuth, InviteUserbyUrl);
route.post('/create/by/invite', checkAuth, InviteUserCreate);
route.get('/verify/:id', checkAuth, verifyEmail);
route.get('/verify/email/send/:user_id', checkAuth, verifyEmailSend);
route.post('/forgot/password', checkAuth, ForgotPassword);
route.post('/reset/password/:id', checkAuth, ResetPassword);
route.put('/photo/change/:username/:id', imageUpload.single('picture'), checkAuth, ChangeImage);
route.put('/profile/change/:username/:id', checkAuth, ChangeProfile);
route.put('/password/change/:username/:id', checkAuth, ChangePassword);

module.exports = route;