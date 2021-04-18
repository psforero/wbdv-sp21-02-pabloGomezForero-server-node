module.exports = (app) => {
  const quizzesService = require('../services/quizzes/quizzes-service')

  const findAllQuizzes = (req, res) => {
    // Hardcoded version
    // const quizzes = quizzesService.findAllQuizzes();
    // res.send(quizzes);

    quizzesService.findAllQuizzes()
      .then((quizzes) => {
        res.send(quizzes);
      })
  }

  const findQuizById = (req, res) => {
    const qId = req.params['quizId'];
    quizzesService.findQuizById(qId)
      .then((quiz) => {
        res.send(quiz);
      })
  }

  app.get('/api/quizzes', findAllQuizzes);
  app.get('/api/quizzes/:quizId', findQuizById);
}