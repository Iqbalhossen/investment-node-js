const express = require('express')
const route = express.Router();
const {checkAuth} = require('../../middlewares/userAuth');

const {UserStore, AllUserShow, InactiveUser, UserDelete, activeUser, UserView} = require('./../../controller/admin/AdminUserController');


route.get('/all/view', checkAuth, AllUserShow);
route.put('/inactive/:id', checkAuth, InactiveUser);
route.put('/active/:id', checkAuth, activeUser);
route.post('/create', checkAuth, UserStore);
route.delete('/delete/:id', checkAuth, UserDelete);
route.get('/view/:id', checkAuth, UserView);
 

module.exports = route;