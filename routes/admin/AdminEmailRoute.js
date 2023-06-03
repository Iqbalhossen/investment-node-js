const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {viewDepositEmail, StoreDepositEmail, DeleteDepositEmail, viewWithdrawEmail, StoreWithdrawEmail, DeleteWithdrawEmail } = require('../../controller/admin/AdminEmailController');

route.get('/deposit/view', checkAuth, viewDepositEmail);
route.post('/deposit/add', checkAuth, StoreDepositEmail);
route.delete('/deposit/delete/:id', checkAuth, DeleteDepositEmail);

 

route.get('/withdraw/view', checkAuth, viewWithdrawEmail);
route.post('/withdraw/add', checkAuth, StoreWithdrawEmail);
route.delete('/withdraw/delete/:id', checkAuth, DeleteWithdrawEmail);

 

module.exports = route;