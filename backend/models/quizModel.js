const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [
    {
      question: {
        type: String,
        required: true,
      },
      options: [
        {
          text: {
            type: String,
            required: true,
          },
          correct: {
            type: Boolean,
            required: true,
          },
        },
      ],
    },
  ],
});

const Quiz = mongoose.model('Quiz', quizSchema);

module.exports = Quiz;