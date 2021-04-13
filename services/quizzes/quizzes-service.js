const quizzes = require('./quizzes.json');

// READS
const findAllQuizzes = () => {
  return quizzes;
}
const findQuizById = (quizId) => {
  return quizzes.find((quiz) => {
    return quiz._id === quizId;
  })
}

// WRITES
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
  createQuiz,
  findAllQuizzes,
  findQuizById,
  updateQuiz,
  deleteQuiz,
}