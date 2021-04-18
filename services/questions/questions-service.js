const questionsDao = require('../../daos/questions-dao');

const findAllQuestions = () =>
  questionsDao.findAllQuestions();

const findQuestionById = (quizId) =>
  questionsDao.findQuestionsById(quizId);

const findQuestionsForQuiz = (quizId) =>
  questionsDao.findQuestionsForQuiz(quizId);

module.exports = {
  findAllQuestions,
  findQuestionById,
  findQuestionsForQuiz
}