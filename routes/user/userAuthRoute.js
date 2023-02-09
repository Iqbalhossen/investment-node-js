const express = require('express')
const route = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '/uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage })

const {viewUser, createUser, InviteUser, InviteUserCreate, InviteUserbyUrl, loginUser, verifyEmail, verifyEmailSend, ForgotPassword, ResetPassword , ChangeProfile} = require('./../../controller/user/userAuthenticationController');

route.get('/view/:userName/:id', viewUser);
route.post('/login', loginUser);
route.post('/create', createUser);
route.get('/invite/:userName/:id', InviteUser);
route.post('/create/by/invite/url', InviteUserbyUrl);
route.post('/create/by/invite', InviteUserCreate);
route.get('/verify/:id', verifyEmail);
route.get('/verify/email/send/:user_id', verifyEmailSend);
route.post('/forgot/password', ForgotPassword);
route.post('/reset/password/:id', ResetPassword);
route.post('/profle/Change/:username/:id',upload.single('picture'), ChangeProfile);
 
module.exports = route;