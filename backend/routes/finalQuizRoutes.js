const express = require('express');
const FinalQuiz = require('../models/finalQuizModel');
const router = express.Router();

// Get the final quiz
router.get('/', async (req, res) => {
  try {
    const finalQuiz = await FinalQuiz.findOne();
    res.status(200).json(finalQuiz);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;