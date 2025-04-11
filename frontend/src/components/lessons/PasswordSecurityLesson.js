import React from 'react';
import { useNavigate } from 'react-router-dom';
import LessonCard from '../LessonCard';

const PasswordSecurityLesson = () => {
  const navigate = useNavigate();

  return (
    <LessonCard title="Password Security">
      <p>
        Using strong, unique passwords for each account is crucial in protecting your personal and professional data. 
        A weak or reused password can easily be guessed or stolen, especially if it's used across multiple platforms.
      </p>
      <p>
        Consider using a password manager to store and generate strong passwords for each of your accounts. This eliminates the need to remember multiple passwords and ensures that your passwords are long, random, and unique.
      </p>
      <p><strong>Scenario:</strong> A marketer uses the same password across multiple platforms. One platform gets breached, compromising all other accounts that use the same password. The attacker gains access to emails, social media accounts, and even financial information.</p>

      <h3>Questions to Consider:</h3>
      <ul>
        <li><strong>1. Is the password being used across multiple platforms?</strong><br />
          Reusing passwords across platforms increases the risk of all accounts being compromised if one platform gets breached.<br />
          <strong>Answer:</strong> Always use unique passwords for each account to mitigate risks.
        </li>

        <li><strong>2. Are the passwords strong enough?</strong><br />
          A password that is short or made up of easily guessable information (like your pet's name or "123456") can be cracked easily.<br />
          <strong>Answer:</strong> Ensure passwords are at least 12 characters long, use a mix of letters, numbers, and symbols, and avoid personal information.
        </li>

        <li><strong>3. Do you have a password manager?</strong><br />
          Using a password manager allows you to create strong, unique passwords for every account, without having to remember each one.<br />
          <strong>Answer:</strong> Invest in a reliable password manager to safely store and manage your passwords.
        </li>
      </ul>

      <h3>Signs of Weak Passwords</h3>
      <ul>
        <li>Passwords that are too short or common.</li>
        <li>Passwords reused across multiple sites.</li>
        <li>Passwords based on easily guessable personal information (e.g., birthdates, names, etc.).</li>
      </ul>

      <h3>What to Do</h3>
      <ul>
        <li>Use a password manager to store and generate unique, strong passwords for all your accounts.</li>
        <li>Enable two-factor authentication (2FA) for an added layer of security wherever possible.</li>
        <li>Regularly change your passwords, especially if you suspect any of your accounts may have been compromised.</li>
      </ul>

      <h3>Prevention Tips</h3>
      <ul>
        <li>Never share your passwords with anyone, even if they claim to be from an official source.</li>
        <li>Check your passwords' strength with an online password strength checker.</li>
        <li>Be cautious of phishing attempts that might try to steal your passwords.</li>
      </ul>

      <div className="button-container" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => navigate('/lessons/phishing')} style={{ marginRight: '15px' }}>Previous Lesson</button>
        <button onClick={() => navigate('/quizzes/password-security')} style={{ margin: '0 auto' }}>Take Quiz</button>
        <button onClick={() => navigate('/lessons/social-engineering')} style={{ marginLeft: '15px' }}>Next Lesson</button>
      </div>
    </LessonCard>
  );
};

export default PasswordSecurityLesson;