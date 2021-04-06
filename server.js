const express = require('express');
const app = express();

// const demos = require('./controllers/demos-controller');
// demos(app);

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

app.listen(4000);