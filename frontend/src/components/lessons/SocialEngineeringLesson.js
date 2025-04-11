import React from 'react';
import { useNavigate } from 'react-router-dom';
import LessonCard from '../LessonCard';

const SocialEngineeringLesson = () => {
  const navigate = useNavigate();

  return (
    <LessonCard title="Social Engineering">
      <p>
        Social engineering is a psychological manipulation technique used by cybercriminals to trick individuals into divulging confidential information, making security breaches easier. Attackers often prey on human emotions like trust, fear, and urgency.
      </p>
      <p>
        These attacks can happen through various channels such as emails, phone calls, or even in-person interactions. The goal is to exploit natural human behaviors to bypass security measures.
      </p>

      <p><strong>Scenario:</strong> A marketer receives a phone call from someone claiming to be from the IT department, asking for their login credentials to perform a system update. They provide the requested credentials without verifying the caller’s identity.</p>

      <h3>Questions to Consider:</h3>
      <ul>
        <li><strong>1. Did you verify the caller’s identity?</strong><br />
          It’s critical to verify any unsolicited request for sensitive information, especially over the phone.<br />
          <strong>Answer:</strong> Never share credentials or sensitive information over the phone unless you are certain of the person’s identity.
        </li>

        <li><strong>2. Did the caller pressure you for immediate action?</strong><br />
          Attackers often create a sense of urgency to lower your defenses and make hasty decisions.<br />
          <strong>Answer:</strong> Always take your time to verify requests, especially if they seem urgent or out of the ordinary.
        </li>

        <li><strong>3. Did you verify the request with your organization?</strong><br />
          It’s important to confirm any system updates or requests through official communication channels.<br />
          <strong>Answer:</strong> Contact your organization’s IT department directly to verify the legitimacy of the request.
        </li>
      </ul>

      <h3>Types of Social Engineering Attacks:</h3>
      <ul>
        <li><strong>Pretexting:</strong> The attacker creates a fabricated story or pretext to obtain information or access.</li>
        <li><strong>Baiting:</strong> The attacker offers something enticing (like free software) to lure the victim into downloading malicious content.</li>
        <li><strong>Tailgating:</strong> The attacker gains physical access to secure areas by following authorized personnel.</li>
      </ul>

      <h3>How to Defend Against Social Engineering Attacks</h3>
      <ul>
        <li>Always be skeptical of unsolicited requests for personal or company information.</li>
        <li>Verify the identity of anyone asking for sensitive information, even if they seem legitimate.</li>
        <li>Never click on suspicious links or download unknown files, especially from unsolicited emails or messages.</li>
        <li>If in doubt, contact your organization’s IT department directly using trusted contact details.</li>
      </ul>

      <div className="button-container" style={{ marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button onClick={() => navigate('/lessons/password-security')} style={{ marginRight: '15px' }}>Previous Lesson</button>
        <button onClick={() => navigate('/quizzes/social-engineering')} style={{ margin: '0 auto' }}>Take Quiz</button>
        <button onClick={() => navigate('/lessons/vishing')} style={{ marginLeft: '15px' }}>Next Lesson</button>
      </div>
    </LessonCard>
  );
};

export default SocialEngineeringLesson;