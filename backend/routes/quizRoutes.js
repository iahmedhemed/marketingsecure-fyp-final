const express = require('express');
const router = express.Router();
const QuizResult = require('../models/quizResult');


router.post('/results', async (req, res) => {
  try {
    const { quizType, score, totalQuestions, answers } = req.body;

    const newQuizResult = new QuizResult({
      quizType,
      score,
      totalQuestions,
      answers,
      date: new Date(),
    });

    const result = await newQuizResult.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error saving quiz results' });
  }
});

module.exports = router;