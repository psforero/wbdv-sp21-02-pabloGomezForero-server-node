const questionsModel = require('../../models/questionsModel/questionsModel-model');

// READS
const findAllQuestions = () => {
  return questionsModel.find();
}

const findQuestionsForQuiz = (quizId) => {
  return questionsModel.find({quizId: quizId})
}

const findQuestionById = (questionId) => {
  return questionsModel.find((question) => {
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