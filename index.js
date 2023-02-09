const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const database = require('./config/database');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
database();
app.use(cors());


app.use(express.urlencoded({extended: true}));
app.use(express.json())


// common file 

require('./Commonfile/UsdGenerateAutoCommsion');

app.get('/', (req, res) => {
    res.send('Hello World!')
  })


  // const nDate = new Date().toLocaleString('en-US', {
  //   timeZone: 'Japan'
  // });
  
  // console.log(nDate);

  // Admin route middleware 
  const AdminGenerationRoute = require('./routes/admin/GenerationRoute');
  const AdminDepositPackageRoute = require('./routes/admin/DepositPackageRoute');
  const AdminUserRoute = require('./routes/admin/UserRoute');
  const AdminDepositRoute = require('./routes/admin/UserDepositPackage');
  const AdminUsdGenegrateRoute = require('./routes/admin/UsdGenegrateRoute');
  const AdminWithdraw = require('./routes/admin/WithdrawRoute');




///////////// admin route 
app.use('/api/admin/user', AdminUserRoute);
app.use('/api/admin/generation', AdminGenerationRoute);
app.use('/api/admin/deposit/package', AdminDepositPackageRoute);
app.use('/api/admin/user/deposit/package', AdminDepositRoute);
app.use('/api/admin/usd/genegrate/package', AdminUsdGenegrateRoute);
app.use('/api/admin/withdraw', AdminWithdraw);



const now = new Date();
let moment = require('moment')

const offDay = moment().format('dddd');




  // user route middleware 
const userAuthRoute = require('./routes/user/userAuthRoute');
const userDepositRoute = require('./routes/user/DepositRoute');
const userUsdGenerateRoute = require('./routes/user/UsdGenerateRoute');
const UserBonusRoute = require('./routes/user/BonusRoute');
const UserGenegrationRoute = require('./routes/user/GenegrationRoute');
const WithdrawRoute = require('./routes/user/WithdrawRoute');



///////////// user route 
app.use('/api/user', userAuthRoute);
app.use('/api/user/deposit', userDepositRoute);
app.use('/api/user/usd/generate', userUsdGenerateRoute);
app.use('/api/user/bonus', UserBonusRoute);
app.use('/api/user/genegration', UserGenegrationRoute);
app.use('/api/user/withdraw', WithdrawRoute);



app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
});


const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

const handler = (req, res) => {
  const d = new Date()
  res.end(d.toString())
}

module.exports = allowCors(handler)


