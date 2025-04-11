import React from 'react';
import { useNavigate } from 'react-router-dom';
import LessonCard from '../LessonCard';

const VishingLesson = () => {
  const navigate = useNavigate();

  return (
    <LessonCard title="Vishing (Voice Phishing)">
      <p>
        Vishing is a type of social engineering attack conducted over the phone. Attackers impersonate legitimate organizations or trusted figures, such as your bank, to trick you into revealing sensitive information like passwords or account numbers.
      </p>
      <p>
        This form of phishing relies on the human tendency to trust voice interactions, especially when the attacker pretends to be an authority figure. Vishing often involves urgent requests to manipulate the victim into compliance.
      </p>

      <p><strong>Scenario:</strong> A marketer receives a call from someone claiming to be from their bank, asking to confirm account details due to a security breach. The caller pressures the marketer to act quickly and provide personal information.</p>

      <h3>Questions to Consider:</h3>
      <ul>
        <li><strong>1. Did you verify the caller’s identity?</strong><br />
          It’s essential to ensure the caller is actually from your bank before sharing sensitive details.<br />
          <strong>Answer:</strong> Always hang up and call your bank’s official number to verify the request, rather than responding to the phone call directly.
        </li>

        <li><strong>2. Was there a sense of urgency in the call?</strong><br />
          Attackers often use a sense of urgency to pressure you into acting quickly.<br />
          <strong>Answer:</strong> Take your time and evaluate whether the request is legitimate. Authentic institutions won’t pressure you to make hasty decisions.
        </li>

        <li><strong>3. Were you asked to provide sensitive information over the phone?</strong><br />
          Banks and other legitimate organizations will never ask for personal information like passwords or PINs over the phone.<br />
          <strong>Answer:</strong> Never share sensitive information, like passwords, over the phone unless you have verified the caller’s identity.
        </li>
      </ul>

      <h3>How to Defend Against Vishing Attacks</h3>
      <ul>
        <li>Always be cautious when receiving unsolicited phone calls, especially if they ask for sensitive information.</li>
        <li>Hang up and call the official number of the organization that supposedly contacted you.</li>
        <li>Do not engage with callers who pressure you for immediate action or ask for sensitive information.</li>
        <li>If the call sounds suspicious, report it to your bank or the relevant authority.</li>
      </ul>

      <div className="button-container" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => navigate('/lessons/social-engineering')} style={{ marginRight: '15px' }}>Previous Lesson</button>
        <button onClick={() => navigate('/quizzes/vishing')} style={{ margin: '0 auto' }}>Take Quiz</button>
      </div>
    </LessonCard>
  );
};

export default VishingLesson;