import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-header">
        <h1>Marketing Secure</h1>
        <p className="tagline">Empowering marketing professionals to defend against cyber threats.</p>
        <Link to="/topics" className="start-button">Begin</Link>
      </div>
    </div>
  );
};

export default Home;