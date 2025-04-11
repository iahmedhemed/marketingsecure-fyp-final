const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  scores: {
    phishingQuiz: {
      type: Number,
      default: 0,
    },
    passwordSecurityQuiz: {
      type: Number,
      default: 0,
    },
    socialEngineeringQuiz: {
      type: Number,
      default: 0,
    },
    vishingQuiz: {
      type: Number,
      default: 0,
    },
    finalQuiz: {
      type: Number,
      default: 0,
    },
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;