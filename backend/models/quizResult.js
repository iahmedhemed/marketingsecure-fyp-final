const mongoose = require('mongoose');

const quizResultSchema = new mongoose.Schema({
  quizType: { type: String, required: true },  // To distinguish between quizzes (e.g., 'Phishing', 'Password-Security', etc.)
  score: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  answers: [
    {
      questionId: { type: Number, required: true },
      selectedAnswer: { type: String, required: true },
      correct: { type: Boolean, required: true }
    }
  ],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('QuizResult', quizResultSchema);