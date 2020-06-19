require('dotenv').config();

const express = require('express');
const app = express();

const user = require('./controllers/usercontroller');
const BatAvg = require('./controllers/batavgcontroller');

const sequelize = require('./db');
sequelize.sync(); 
app.use(express.json());
app.use(require('./middlewares/headers'))


app.listen(process.env.PORT, ()=> console.log(`app is listening on ${process.env.PORT}`)); 

app.use('/user', user); 
app.use(require('./middlewares/validate-session')); 
app.use('/log', BatAvg);