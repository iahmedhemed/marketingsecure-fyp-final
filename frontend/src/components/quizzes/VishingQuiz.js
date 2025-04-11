import React, { useState } from 'react';
import './VishingQuiz.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const VishingQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question: 'What is vishing?',
      options: [
        { text: 'Email phishing', correct: false },
        { text: 'Voice phishing using phone calls', correct: true },
        { text: 'Text message phishing', correct: false },
        { text: 'Social media scamming', correct: false }
      ]
    },
    {
      id: 2,
      question: 'Which of the following is a sign of a vishing attack?',
      options: [
        { text: 'An unknown caller asking for sensitive info', correct: true },
        { text: 'Your friend calling to chat', correct: false },
        { text: 'An email from your boss', correct: false },
        { text: 'A message from IT support about updates', correct: false }
      ]
    },
    {
      id: 3,
      question: 'What should you do if someone asks for personal info over the phone?',
      options: [
        { text: 'Provide it if they sound trustworthy', correct: false },
        { text: 'Hang up and verify the request with the company directly', correct: true },
        { text: 'Give them minimal information', correct: false },
        { text: 'Ignore and continue the call', correct: false }
      ]
    },
    {
      id: 4,
      question: 'How can organizations protect against vishing attacks?',
      options: [
        { text: 'Train employees to recognize suspicious calls', correct: true },
        { text: 'Install antivirus software only', correct: false },
        { text: 'Ignore unknown phone calls', correct: false },
        { text: 'Only use email for communication', correct: false }
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
    navigate('/lessons/vishing');
  };

  const handleReturnHome = () => {
    navigate('/');
  };

  const submitQuizResults = async () => {
    try {
      const resultData = {
        quizType: 'Vishing',
        score: correctAnswers,
        totalQuestions: questions.length,
        answers: questions.map((question, index) => ({
          questionId: question.id,
          selectedAnswer: selectedOption !== null ? question.options[selectedOption].text : '',
          correct: selectedOption !== null ? question.options[selectedOption].correct : false
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
      <h2>Vishing Quiz</h2>
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
              <button onClick={handlePreviousQuestion}>Previous Question</button>
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
              <p>Great job! You've passed this module. Now, are you ready for the final quiz?</p>
              <button onClick={handleReturnHome} className="next-lesson-btn">
                Return to Home
              </button>
              <button onClick={handleRetry} className="retry-btn">
                Retry Quiz
              </button>
              <button
                onClick={() => navigate('/quizzes/final-quiz')}
                className="final-quiz-btn"
              >
                Start Final Quiz
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

export default VishingQuiz;