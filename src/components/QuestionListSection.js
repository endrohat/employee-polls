import React from 'react';
import QuestionDisplay from './QuestionDisplay';
import '../QuestionListSection.css';

const QuestionsListSection = ({ questions }) => {
  return (
    <div className="new-questions-section">
      <h2 className="section-title">New Questions</h2>
      <div className="questions-grid">
        {questions.map((question, index) => (
          <QuestionDisplay
            key={index}
            username={question.username}
            timestamp={question.timestamp}
          />
        ))}
      </div>
    </div>
  );
};

export default QuestionsListSection;