const express = require('express')
const route = express.Router();

const {viewDepositPending, UserDepositStore, viewDepositAccept } = require('./../../controller/user/DepositController');

route.post('/store', UserDepositStore);

route.get('/pending/view/:username', viewDepositPending);
route.get('/accept/view/:username', viewDepositAccept);


module.exports = route;