import React, { useState } from 'react';
import './PhishingQuiz.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PhishingQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question: 'What should you do if you receive a suspicious phishing email?',
      options: [
        { text: 'Click the link immediately.', correct: false },
        { text: 'Verify the email sender before clicking.', correct: true },
        { text: 'Forward the email to your IT department and wait for instructions.', correct: false },
        { text: 'Ignore the email and carry on as usual.', correct: false }
      ]
    },
    {
      id: 2,
      question: 'Which of the following is a common sign of phishing?',
      options: [
        { text: 'A suspiciously urgent message', correct: true },
        { text: 'The email is personalized with your full name', correct: false },
        { text: 'The email domain matches the legitimate company', correct: false },
        { text: 'The email contains a friendly greeting', correct: false }
      ]
    },
    {
      id: 3,
      question: 'How can you verify if a link in an email is legitimate?',
      options: [
        { text: 'Hover over the link and check the URL', correct: true },
        { text: 'Click on it to see where it redirects', correct: false },
        { text: 'Check if the link is from a known email address', correct: false },
        { text: 'None of the above', correct: false }
      ]
    },
    {
      id: 4,
      question: 'If you have clicked on a phishing link, what should you do?',
      options: [
        { text: 'Change your password immediately', correct: true },
        { text: 'Ignore it and move on', correct: false },
        { text: 'Wait for the attacker to contact you again', correct: false },
        { text: 'Report it to IT if possible', correct: true }
      ]
    }
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

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
      setSelectedOption(null);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setQuizCompleted(false);
    setSelectedOption(null);
  };

  const handleReturnToLesson = () => {
    navigate('/lessons/phishing');
  };

  const handleNextLesson = () => {
    navigate('/lessons/password-security');
  };

  const submitQuizResults = async () => {
    try {
      const resultData = {
        quizType: 'Phishing',
        score: correctAnswers,
        totalQuestions: questions.length,
        answers: questions.map((question, index) => ({
          questionId: question.id,
          selectedAnswer: question.options[selectedOption].text,
          correct: question.options[selectedOption].correct
        }))
      };
      await axios.post('/api/quiz/results', resultData);
    } catch (error) {
      console.error('Error submitting quiz results', error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-card">
      <h2>Phishing Attack Quiz</h2>
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
              <button onClick={handlePreviousQuestion}>
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
          {correctAnswers === questions.length ? (
            <div className="result-buttons">
              <p>Great job! You've passed this module.</p>
              <button onClick={handleNextLesson} className="next-lesson-btn">
                Next Lesson
              </button>
              <button onClick={handleRetry} className="retry-btn">
                Retry Quiz
              </button>
            </div>
          ) : (
            <div className="result-buttons">
              <button onClick={handleRetry} className="retry-btn">
                Retry Quiz
              </button>
              <button onClick={handleReturnToLesson} className="return-btn">
                Return to Lesson
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PhishingQuiz;