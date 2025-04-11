import React, { useState } from 'react';
import './PasswordSecurityQuiz.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const PasswordSecurityQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question: 'What is the best way to create a strong password?',
      options: [
        { text: 'Use a combination of letters, numbers, and special characters.', correct: true },
        { text: 'Use your name and birthdate.', correct: false },
        { text: 'Use the same password for all accounts.', correct: false },
        { text: 'Make it simple and easy to remember.', correct: false }
      ]
    },
    {
      id: 2,
      question: 'How often should you change your password?',
      options: [
        { text: 'Every 6 months', correct: true },
        { text: 'Once every few years', correct: false },
        { text: 'Once a month', correct: false },
        { text: 'Never change it', correct: false }
      ]
    },
    {
      id: 3,
      question: 'What is two-factor authentication (2FA)?',
      options: [
        { text: 'A method to add an extra layer of security to your login.', correct: true },
        { text: 'A new type of password.', correct: false },
        { text: 'A security question asked during login.', correct: false },
        { text: 'A way to remember your passwords.', correct: false }
      ]
    },
    {
      id: 4,
      question: 'Which of the following is a good practice to secure your online accounts?',
      options: [
        { text: 'Enable two-factor authentication', correct: true },
        { text: 'Use the same password for all accounts', correct: false },
        { text: 'Avoid using special characters in your password', correct: false },
        { text: 'Share your passwords with friends for safety', correct: false }
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
    navigate('/lessons/password-security'); // Redirect to this lesson
  };

  const handleNextLesson = () => {
    navigate('/lessons/social-engineering'); // Redirect to the next lesson
  };

  const submitQuizResults = async () => {
    try {
      const resultData = {
        quizType: 'Password Security',  // Specify the quiz type
        score: correctAnswers,
        totalQuestions: questions.length,
        answers: questions.map((question, index) => ({
          questionId: question.id,
          selectedAnswer: question.options[selectedOption].text,
          correct: question.options[selectedOption].correct
        }))
      };
      await axios.post('/api/quiz/results', resultData);  // Post to backend
    } catch (error) {
      console.error('Error submitting quiz results', error);
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-card">
      <h2>Password Security Quiz</h2>
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
              <p>Congratulations! You've passed the course.</p>
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

export default PasswordSecurityQuiz;