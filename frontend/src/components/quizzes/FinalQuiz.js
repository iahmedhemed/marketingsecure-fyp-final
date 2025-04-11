import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FinalQuiz.css';
import axios from 'axios';

const FinalQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    // Final quiz questions
    {
      id: 1,
      question: "What is phishing?",
      options: [
        { text: "A fraudulent attempt to obtain sensitive information", correct: true },
        { text: "A type of social engineering attack", correct: false },
        { text: "A kind of computer virus", correct: false },
        { text: "All of the above", correct: false },
      ],
    },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswerSelection = (index) => {
    setSelectedOption(index);
  };

  const handleNextQuestion = () => {
    if (selectedOption !== null) {
      const currentQuestion = questions[currentQuestionIndex];
      if (currentQuestion.options[selectedOption].correct) {
        setCorrectAnswers((prev) => prev + 1);
      }

      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
        setSelectedOption(null);
      } else {
        setQuizCompleted(true);
        submitQuizResults();
      }
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuizCompleted(false);
    setSelectedOption(null);
  };

  const submitQuizResults = async () => {
    try {
      const resultData = {
        quizType: 'Final Quiz',
        score: correctAnswers,
        totalQuestions: questions.length,
        answers: questions.map((question, index) => ({
          questionId: question.id,
          selectedAnswer: selectedOption !== null ? question.options[selectedOption].text : '',
          correct: selectedOption !== null ? question.options[selectedOption].correct : false,
        }))
      };
      await axios.post('/api/quiz/results', resultData);
    } catch (error) {
      console.error('Error submitting quiz results:', error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-card">
      <h2>Final Quiz</h2>
      {!quizCompleted ? (
        <>
          <div className="question">
            <p>{currentQuestion.question}</p>
          </div>
          <div className="options">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = option.correct && isSelected;
              const isWrong = !option.correct && isSelected;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelection(index)}
                  className={
                    isSelected
                      ? isCorrect
                        ? 'selected correct'
                        : 'selected wrong'
                      : ''
                  }
                >
                  {option.text}
                </button>
              );
            })}
          </div>
          <div className="navigation-buttons">
            {currentQuestionIndex > 0 && (
              <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}>
                Previous Question
              </button>
            )}
            <button onClick={handleNextQuestion}>Next Question</button>
          </div>
        </>
      ) : (
        <div className="result">
          <h3>Quiz Finished!</h3>
          <p>You got {correctAnswers} out of {questions.length} correct.</p>
          <div className="result-buttons">
            <button onClick={handleRetry}>Retry Quiz</button>
            <button onClick={() => navigate('/')} className="return-btn">
              Return to Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FinalQuiz;