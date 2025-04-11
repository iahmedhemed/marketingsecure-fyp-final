import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    } else {
      setIsDarkMode(false);
      document.body.classList.remove('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-title">Marketing Secure</Link>
      </div>
      
      <div className="navbar-right">
        <Link to="/topics" className="navbar-link">Topics</Link> {}
        <Link to="/quizzes" className="navbar-link">Quizzes</Link> {}
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;