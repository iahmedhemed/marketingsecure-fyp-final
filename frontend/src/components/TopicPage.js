import React from 'react';
import { Link } from 'react-router-dom';
import './TopicPage.css';

const TopicPage = () => {
  return (
    <div className="app-wrapper">
      <h1>Cybersecurity Lessons</h1>
      <ul>
        <li><Link to="/lessons/phishing">Phishing</Link></li>
        <li><Link to="/lessons/password-security">Password Security</Link></li>
        <li><Link to="/lessons/social-engineering">Social Engineering</Link></li>
        <li><Link to="/lessons/vishing">Vishing</Link></li>
      </ul>
    </div>
  );
};

export default TopicPage;