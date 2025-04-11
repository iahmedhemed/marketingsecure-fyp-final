import React from 'react';
import { Link } from 'react-router-dom';
import './QuizzesPage.css';

const QuizzesPage = () => {
  return (
    <div className="app-wrapper">
      <h1>Cybersecurity Quizzes</h1>
      <ul>
        <li><Link to="/quizzes/phishing">Phishing Quiz</Link></li>
        <li><Link to="/quizzes/password-security">Password Security Quiz</Link></li>
        <li><Link to="/quizzes/social-engineering">Social Engineering Quiz</Link></li>
        <li><Link to="/quizzes/vishing">Vishing Quiz</Link></li>
        <li><Link to="/quizzes/final-quiz" className="quiz-link">Take the Final Quiz</Link></li>
      </ul>
    </div>
  );
};

export default QuizzesPage;