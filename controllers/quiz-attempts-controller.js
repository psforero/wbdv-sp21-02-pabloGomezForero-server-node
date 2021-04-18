module.exports = (app) => {
  const quizAttemptsDao = require('../daos/quiz-attempts-dao');

  const findAttemptsForQuiz = (req, res) => {
    quizAttemptsDao.findAttemptsForQuiz(req.params['qid'], req.body)
      .then(attempts => res.send(attempts));
  }

  const createAttempt = (req, res) => {
    quizAttemptsDao.createAttempt(req.params['qid'], req.body)
      .then(attempt => res.send(attempt));
  }

  app.get('/api/quizzes/:qid/attempts', findAttemptsForQuiz);
  app.post('/api/quizzes/:qid/attempts', createAttempt);
}