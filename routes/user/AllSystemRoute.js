const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {packageBounsStore, ClaimBtn , AllTransaction} = require('./../../controller/user/AllSystemController');
route.post('/create/:username', checkAuth, packageBounsStore);
route.get('/claim/btn/:username/:id', checkAuth, ClaimBtn);
route.get('/all/transaction', checkAuth, AllTransaction);


module.exports = route;