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

// require('./Commonfile/UsdGenerateAutoCommsion');

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




///////////// admin route 
app.use('/api/admin/user/', AdminUserRoute);
app.use('/api/admin/generation', AdminGenerationRoute);
app.use('/api/admin/deposit/package', AdminDepositPackageRoute);
app.use('/api/admin/user/deposit/package', AdminDepositRoute);
app.use('/api/admin/usd/genegrate/package', AdminUsdGenegrateRoute);







  // user route middleware 
const userAuthRoute = require('./routes/user/userAuthRoute');
const userDepositRoute = require('./routes/user/DepositRoute');
const userUsdGenerateRoute = require('./routes/user/UsdGenerateRoute');
const UserBonusRoute = require('./routes/user/BonusRoute');



///////////// user route 
app.use('/api/user', userAuthRoute);
app.use('/api/user/deposit', userDepositRoute);
app.use('/api/user/usd/generate', userUsdGenerateRoute);
app.use('/api/user/bonus', UserBonusRoute);









// const {RoiMint} = require('./Commonfile/USDGenerate/RoiMint');


// RoiMint("i am Comming2 Roi Mint")














app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
});






