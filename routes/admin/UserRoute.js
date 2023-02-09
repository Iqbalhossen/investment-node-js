const express = require('express')
const route = express.Router();

const {UserStore, AllUserShow, InactiveUser} = require('./../../controller/admin/AdminUserController');

route.get('/all/view', AllUserShow);
route.put('/inactive/:id', InactiveUser);
route.post('/create', UserStore);


module.exports = route;