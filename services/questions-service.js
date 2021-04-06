const questions = require('./questions.json');

// READS
const findAllQuestions = () => {
  return questions;
}
const findQuestionById = (questionId) => {
  return questions.find((question) => {
    return question._id === questionId;
  })
}

// WRITES
const createQuestion = () => {}
const updateQuestion = () => {}
const deleteQuestion = () => {}

module.exports = {
  createQuestion,
  findAllQuestions,
  findQuestionById,
  updateQuestion,
  deleteQuestion,
}