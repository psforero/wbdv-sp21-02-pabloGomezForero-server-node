module.exports = (app) => {
  const questionsService = require('../services/questions/questions-service');

  const findAllQuestions = (req, res) => {
    questionsService.findAllQuestions()
      .then((questions) => {
        res.json(questions);
      })
  }

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['quizId'];
    questionsService.findQuestionsForQuiz(quizId)
      .then((questions) => {
        res.json(questions);
      })
  }

  const findQuestionById = (req, res) => {
    const questionId = req.params['questionId'];
    questionsService.findQuestionById(questionId)
      .then((question) => {
        res.json(question);
      })
  }

  app.get('/api/questions', findAllQuestions);
  app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz);
  app.get('/api/questions/:questionId', findQuestionById);
}