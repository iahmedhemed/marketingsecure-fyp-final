import React from 'react';
import './LessonCard.css';

const LessonCard = ({ title, children }) => {
  return (
    <div className="lesson-card">
      <h2>{title}</h2>
      <div className="lesson-content">{children}</div>
    </div>
  );
};

export default LessonCard;