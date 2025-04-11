import React from 'react';
import { useNavigate } from 'react-router-dom';
import LessonCard from '../LessonCard';

const PhishingLesson = () => {
  const navigate = useNavigate();

  return (
    <LessonCard title="Phishing Attacks">
      <p>
        Phishing is a type of cyberattack where attackers impersonate legitimate organizations to trick individuals 
        into revealing sensitive information such as passwords or credit card details. This often happens through 
        emails, fake websites, or phone calls.
      </p>
      <p><strong>Scenario:</strong> You receive an email that appears to be from your CEO, asking you to urgently buy gift cards for a charity event. 
        The email looks legitimate, but the request seems unusual. The message is pressing and claims that it’s an emergency. What do you do?</p>

      <h3>Questions to Consider:</h3>
      <ul>
        <li><strong>1. Does the email address look legitimate?</strong><br />
          Check if the email address matches the official one used by your CEO. Phishing emails often come from addresses that are similar but slightly altered (e.g. ceo@marketingcompany.com vs ceo@maketingcompany.com).<br />
          <strong>Answer:</strong> Always verify the sender's email address before trusting the content.
        </li>

        <li><strong>2. Is the request urgent?</strong><br />
          Phishing emails often create a false sense of urgency to trick you into acting without thinking. In this case, is the request really an emergency, or could it wait?<br />
          <strong>Answer:</strong> Never act on an urgent request without confirming its authenticity.
        </li>

        <li><strong>3. Should you click on the link or open any attachments?</strong><br />
          If there are any links or attachments in the email, they could lead to malicious websites or contain malware.<br />
          <strong>Answer:</strong> Never click on links or open attachments from unknown or suspicious sources.
        </li>

        <li><strong>4. How can you verify the request?</strong><br />
          If you’re unsure, contact the person directly using a trusted method (like a phone call or in-person) to verify the request.<br />
          <strong>Answer:</strong> Always use a verified contact method to confirm suspicious requests.
        </li>
      </ul>

      <h3>Signs of a Phishing Attempt</h3>
      <ul>
        <li>Unfamiliar or suspicious sender email addresses.</li>
        <li>Urgent language or requests for personal information.</li>
        <li>Links that lead to unfamiliar or incorrect websites.</li>
        <li>Spelling and grammar mistakes in the message.</li>
      </ul>

      <h3>What to Do</h3>
      <ul>
        <li>Do not click any links or download attachments from suspicious emails.</li>
        <li>Verify the sender through trusted contact methods.</li>
        <li>Report phishing attempts to your organization or relevant authorities.</li>
      </ul>

      <h3>Prevention Tips</h3>
      <ul>
        <li>Use strong, unique passwords and enable two-factor authentication (2FA) where possible.</li>
        <li>Keep your software up to date and use security filters in your email service.</li>
      </ul>

      <div className="button-container" style={{ marginTop: '30px' }}>
        <button onClick={() => navigate('/quizzes/phishing')}>Take Quiz</button>
        <button onClick={() => navigate('/lessons/password-security')}>Next Lesson</button>
      </div>
    </LessonCard>
  );
};

export default PhishingLesson;