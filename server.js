const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const morgan = require('morgan');
const fs = require('fs');
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a'})
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;


const hbs = exphbs.create({ });

const sess = {
  secret: 'Super secret secret',
  cookie: {
    // 150 Mins
    maxAge: 9000000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use(morgan(':method ":referrer" (:status) :response-time ms [:date[web]] :url', { stream: accessLogStream }))

sequelize.sync({ force: false, alter: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening Now Listening on port '+ PORT + ' http://localhost:3001' ));
});