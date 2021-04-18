const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/whiteboard-02',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

const db = mongoose.connection;
db.on('error', (error) => console.log(error))
db.once('open', () => console.log('Connected to database'))

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers',
    'Content-Type, X-Requested-With, Origin');
  res.header('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});

// const quizzesController = require('./controllers/quizzess-controller');
// quizzesController(app); // equivalent to lines below

require('./controllers/quizzes-controller')(app);
require('./controllers/questions-controller')(app);
require('./controllers/quiz-attempts-controller')(app);

app.listen(4000);