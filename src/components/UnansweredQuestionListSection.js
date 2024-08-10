import React from 'react';
import QuestionDisplay from './QuestionDisplay';
import '../QuestionListSection.css';
import { connect } from "react-redux";


const UnansweredQuestionListSection = ({ questions , authedUser}) => {

  if (questions === null || Object.keys(questions).length === 0) {
    return (<div></div>);
  }

  let passedString = authedUser
  console.log(passedString)
  let result = Object.entries(questions)
  .filter(([key, value]) => {
    const { optionOne, optionTwo } = value;
    return !(optionOne.votes.includes(passedString) || optionTwo.votes.includes(passedString));
  }).map(([key, value]) => {
    return {
      id: key,
      author: value.author,
      timestamp: value.timestamp
    };
  });

  result.sort((a, b) => b.timestamp - a.timestamp);
  
  return (
    <div className="new-questions-section">
      <h2 className="section-title">New Questions Section</h2>
      <div className="questions-grid">
        {result.map((question, index) => (
          <QuestionDisplay
            key={index}
            username={question.author}
            timestamp={question.timestamp}
            qid = {question.id}
          />
        ))}
      </div>
    </div>
  );
  
};

const mapStateToProps = ({ questions , authedUser}) => ({
  questions: questions,
  authedUser: authedUser
});
export default connect(mapStateToProps)(UnansweredQuestionListSection);
