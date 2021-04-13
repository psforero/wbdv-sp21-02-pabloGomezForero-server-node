const questions = require('./questions.json');

// READS
const findAllQuestions = () => {
  return questions;
}

const findQuestionsForQuiz = (quizId) => {
  return questions.filter((question) => {
    return question.quizId === quizId;
  })
}

const findQuestionById = (questionId) => {
  return questions.find((question) => {
    return question._id === questionId;
  })
}

// WRITES
const createQuestion = () => {}
const createQuestionForQuiz = () => {}
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
  findAllQuestions,
  findQuestionsForQuiz,
  findQuestionById,
  createQuestion,
  createQuestionForQuiz,
  updateQuestion,
  deleteQuestion,
}