const quizzesModel = require('../../models/quizzes/quizzes-model')

// READS
const findAllQuizzes = () => {
  return quizzesModel.find();
}

const findQuizById = (quizId) => {
  return quizzesModel.findById(quizId)
}

// WRITES
const createQuiz = (quiz) => {
  return quizzesModel.create(quiz);
}
const updateQuiz = (quizId, quiz) => {
  return quizzesModel.findByIdAndUpdate(quizId, quiz, {new: true});
}
const deleteQuiz = (quizId) => {
  return quizzesModel.findByIdAndRemove(quizId);
}

module.exports = {
  createQuiz,
  findAllQuizzes,
  findQuizById,
  updateQuiz,
  deleteQuiz,
}