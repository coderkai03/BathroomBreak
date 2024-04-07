import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

const ExamForm = () => {
    const history = useHistory()

  // State to store user's answers
  const [answers, setAnswers] = useState({
    mcq1: '',
    mcq2: '',
    mcq3: '',
    mcq4: '',
    mcq5: '',
    essay1: '',
    essay2: ''
  });

  // Function to handle multiple-choice answer changes
  const handleMCQChange = (question, option) => {
    setAnswers({ ...answers, [question]: option });
  };

  // Function to handle essay answer changes
  const handleEssayChange = (question, value) => {
    setAnswers({ ...answers, [question]: value });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Process and submit answers as needed
    console.log(answers);
    history.goBack()
    // Reset form or navigate to next page
  };

  return (
    <div className="exam-form-container">
      <div className="exam-form">
        <h1>Domestic Violence Awareness Exam</h1>
        <form onSubmit={handleSubmit}>
          {/* Multiple Choice Questions */}
          <div className="question">
          <p>1. What is the most common form of domestic violence?</p>
          <label>
            <input
              type="radio"
              name="mcq1"
              value="a"
              checked={answers.mcq1 === 'a'}
              onChange={() => handleMCQChange('mcq1', 'a')}
            />
            Physical abuse
          </label>
          <label>
            <input
              type="radio"
              name="mcq1"
              value="b"
              checked={answers.mcq1 === 'b'}
              onChange={() => handleMCQChange('mcq1', 'b')}
            />
            Emotional abuse
          </label>
          {/* Add more options as needed */}
        </div>
        {/* Add more multiple-choice questions similarly */}
        <div className="question">
          <p>2. What is the cycle of violence?</p>
          <label>
            <input
              type="radio"
              name="mcq2"
              value="a"
              checked={answers.mcq2 === 'a'}
              onChange={() => handleMCQChange('mcq2', 'a')}
            />
            Tension-building, explosion, honeymoon
          </label>
          <label>
            <input
              type="radio"
              name="mcq2"
              value="b"
              checked={answers.mcq2 === 'b'}
              onChange={() => handleMCQChange('mcq2', 'b')}
            />
            Calm, tension, explosion
          </label>
          {/* Add more options as needed */}
        </div>
        <div className="question">
          <p>3. What are common signs of an abusive relationship?</p>
          <label>
            <input
              type="radio"
              name="mcq3"
              value="a"
              checked={answers.mcq3 === 'a'}
              onChange={() => handleMCQChange('mcq3', 'a')}
            />
            Isolation, jealousy, manipulation
          </label>
          <label>
            <input
              type="radio"
              name="mcq3"
              value="b"
              checked={answers.mcq3 === 'b'}
              onChange={() => handleMCQChange('mcq3', 'b')}
            />
            Trust, communication, respect
          </label>
          {/* Add more options as needed */}
        </div>
        <div className="question">
          <p>4. What is the purpose of a safety plan?</p>
          <label>
            <input
              type="radio"
              name="mcq4"
              value="a"
              checked={answers.mcq4 === 'a'}
              onChange={() => handleMCQChange('mcq4', 'a')}
            />
            To ensure the victim stays in the relationship
          </label>
          <label>
            <input
              type="radio"
              name="mcq4"
              value="b"
              checked={answers.mcq4 === 'b'}
              onChange={() => handleMCQChange('mcq4', 'b')}
            />
            To provide steps for safety when leaving an abusive relationship
          </label>
          {/* Add more options as needed */}
        </div>
        <div className="question">
          <p>5. What is the role of a 911 responder in a domestic violence call?</p>
          <label>
            <input
              type="radio"
              name="mcq5"
              value="a"
              checked={answers.mcq5 === 'a'}
              onChange={() => handleMCQChange('mcq5', 'a')}
            />
            To judge the situation and assign blame
          </label>
          <label>
            <input
              type="radio"
              name="mcq5"
              value="b"
              checked={answers.mcq5 === 'b'}
              onChange={() => handleMCQChange('mcq5', 'b')}
            />
            To assess safety, provide support, and connect to resources
          </label>
          {/* Add more options as needed */}
        </div>

          {/* Essay Questions */}
          <div className="question">
            <p>6. Describe a situation where you had to respond to a domestic violence call. What were the challenges?</p>
            <textarea
              value={answers.essay1}
              onChange={(e) => handleEssayChange('essay1', e.target.value)}
              rows="4"
              cols="50"
              placeholder="Your response..."
              
            />
          </div>
          <div className="question">
            <p>7. What measures can be taken to prevent domestic violence in the community?</p>
            <textarea
              value={answers.essay2}
              onChange={(e) => handleEssayChange('essay2', e.target.value)}
              rows="4"
              cols="50"
              placeholder="Your response..."
              
            />
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ExamForm;
