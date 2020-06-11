
const sequelize = require('./db');
sequelize.sync(); 
app.use(express.json());
app.use(require('./middleware/headers'));

app.listen(process.env.DATABASE_URL, ()=> console.log(`app is listening on ${process.env.DATABASE_URL}`)); 

app.use('/user', user); 
app.use(require('./middleware/validate-session')); 
app.use('/log', BatAvg);