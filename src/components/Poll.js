
import React from 'react';
import '../Poll.css';
import { connect } from "react-redux";

const Poll = ({ question, user }) => {
  if (question == null || Object.keys(question).length === 0) {
    return (<div></div>)
  }

  if (user == null || Object.keys(user).length === 0) {
    return (<div></div>)
  }

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

  const getPercentage = (optionVotes) => {
    return totalVotes === 0 ? 0 : ((optionVotes.length / totalVotes) * 100).toFixed(2);
  };

  return (
    <div className="poll-container">
      <h2>Poll by {user.name}</h2>
      <img src={user.avatarURL} alt="User Avatar" className="avatar" />
      <h3>Would You Rather</h3>
      <div className="options">
        <div className="option">
          <p>{question.optionOne.text}</p>
          {question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0 ? (
            <p>{getPercentage(question.optionOne.votes)}% voted</p>
          ) : (
            <button>Click</button>
          )}
        </div>
        <div className="option">
          <p>{question.optionTwo.text}</p>
          {question.optionOne.votes.length > 0 || question.optionTwo.votes.length > 0 ? (
            <p>{getPercentage(question.optionTwo.votes)}% voted</p>
          ) : (
            <button>Click</button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions , users}, id) => {
  if (questions === null || Object.keys(questions).length === 0) {
    return {}
  }

  if (users === null || Object.keys(users).length === 0) {
    return {}
  }

   return {
  question: questions[id.id],
  user: users[questions[id.id].author]
}};
export default connect(mapStateToProps)(Poll);

