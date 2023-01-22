const { urlencoded } = require('body-parser');
const bodyParser = require('body-parser');
const express = require('express');
const database = require('./config/database');
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
database();

app.use(express.urlencoded({extended: true}));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

const userAuthRoute = require('./routes/user/userAuthRoute');



app.use('/api/user', userAuthRoute);


























app.listen(PORT, () => {
    console.log(`server is running at PORT ${PORT}`);
});

