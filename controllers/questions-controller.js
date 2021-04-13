module.exports = (app) => {
  const questionsService = require('../services/questions/questions-service');

  const findAllQuestions = (req, res) => {
    const questions = questionsService.findAllQuestions();
    res.send(questions);
  }

  const findQuestionsForQuiz = (req, res) => {
    const quizId = req.params['quizId'];
    const questions = questionsService.findQuestionsForQuiz(quizId);
    res.send(questions);
  }

  const findQuestionById = (req, res) => {
    const questionId = req.params['questionId'];
    const question = questionsService.findQuestionById(questionId);
    res.send(question);
  }

  app.get('/api/questions', findAllQuestions);
  app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz);
  app.get('/api/questions/:questionId', findQuestionById);
}