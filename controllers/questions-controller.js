module.exports = (app) => {
  const questionsService = require('../services/questions-service');

  const findAllQuestions = (req, res) => {
    const questions = questionsService.findAllQuestions();
    res.send(questions);
  }

  const findQuestionById = (req, res) => {
    const questionId = req.params['questionId'];
    const question = questionsService.findQuestionById(questionId);
    res.send(question);
  }

  app.get('/api/questions', findAllQuestions);
  app.get('/api/questions/:questionId', findQuestionById);
}