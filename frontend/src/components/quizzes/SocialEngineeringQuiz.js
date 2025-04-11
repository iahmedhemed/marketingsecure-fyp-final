import React, { useState } from 'react';
import './SocialEngineeringQuiz.css'; 
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialEngineeringQuiz = () => {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question: 'What is social engineering in cybersecurity?',
      options: [
        { text: 'Programming a firewall', correct: false },
        { text: 'Tricking people into revealing confidential information', correct: true },
        { text: 'Using antivirus software', correct: false },
        { text: 'Encrypting your data', correct: false }
      ]
    },
    {
      id: 2,
      question: 'Which of the following is an example of social engineering?',
      options: [
        { text: 'Sending a fake email to gather passwords', correct: true },
        { text: 'Brute force password attack', correct: false },
        { text: 'Installing security patches', correct: false },
        { text: 'Updating your system regularly', correct: false }
      ]
    },
    {
      id: 3,
      question: 'What should you do if someone asks for your login details over the phone?',
      options: [
        { text: 'Give it if they claim to be IT support', correct: false },
        { text: 'Politely decline and report the incident', correct: true },
        { text: 'Ask them to send an email instead', correct: false },
        { text: 'Ignore and hang up', correct: false }
      ]
    },
    {
      id: 4,
      question: 'Why is social engineering effective?',
      options: [
        { text: 'It exploits human trust', correct: true },
        { text: 'It uses powerful malware', correct: false },
        { text: 'It’s based on complex coding techniques', correct: false },
        { text: 'It avoids all user interaction', correct: false }
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
    navigate('/lessons/social-engineering');
  };

  const handleNextLesson = () => {
    navigate('/lessons/vishing');
  };

  const submitQuizResults = async () => {
    try {
      const resultData = {
        quizType: 'Social Engineering',
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
      <h2>Social Engineering Quiz</h2>
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

export default SocialEngineeringQuiz;