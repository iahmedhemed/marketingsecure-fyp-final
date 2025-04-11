import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Topics from './components/TopicPage';
import QuizzesPage from './components/QuizzesPage';
import PhishingLesson from './components/lessons/PhishingLesson';
import PasswordSecurityLesson from './components/lessons/PasswordSecurityLesson';
import SocialEngineeringLesson from './components/lessons/SocialEngineeringLesson';
import VishingLesson from './components/lessons/VishingLesson';
import PhishingQuiz from './components/quizzes/PhishingQuiz';
import PasswordSecurityQuiz from './components/quizzes/PasswordSecurityQuiz';
import SocialEngineeringQuiz from './components/quizzes/SocialEngineeringQuiz';
import VishingQuiz from './components/quizzes/VishingQuiz';
import Navbar from './components/Navbar';
import FinalQuiz from './components/quizzes/FinalQuiz';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/topics" element={<Topics />} />
        <Route path="/quizzes" element={<QuizzesPage />} />
        <Route path="/lessons/phishing" element={<PhishingLesson />} />
        <Route path="/lessons/password-security" element={<PasswordSecurityLesson />} />
        <Route path="/lessons/social-engineering" element={<SocialEngineeringLesson />} />
        <Route path="/lessons/vishing" element={<VishingLesson />} />
        <Route path="/quizzes/phishing" element={<PhishingQuiz />} />
        <Route path="/quizzes/password-security" element={<PasswordSecurityQuiz />} />
        <Route path="/quizzes/social-engineering" element={<SocialEngineeringQuiz />} />
        <Route path="/quizzes/vishing" element={<VishingQuiz />} />
        <Route path="/quizzes/final-quiz" element={<FinalQuiz />} />
      </Routes>
    </Router>
  );
}

export default App;