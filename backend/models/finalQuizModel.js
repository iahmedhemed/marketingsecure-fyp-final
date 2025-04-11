const mongoose = require('mongoose');

const finalQuizSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Final Quiz - Marketing Secure',
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

const FinalQuiz = mongoose.model('FinalQuiz', finalQuizSchema);

module.exports = FinalQuiz;