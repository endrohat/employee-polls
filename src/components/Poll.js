
import React from 'react';
import '../Poll.css';
import { connect } from "react-redux";
import { handleAddAnswer } from '../actions/questions';

const Poll = ({ question, user, authedUser, dispatch }) => {
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

  const handleVote = (option) => {
    console.log(option);
    // Implement vote handling logic here
    // Example: Update the state or call a function to update the poll
    dispatch(handleAddAnswer({
      qid: question.id,
      answer : option
    }))
  };

  const hasUserVoted = question.optionOne.votes.includes(authedUser) || question.optionTwo.votes.includes(authedUser);

  return (
    <div className="poll-container">
      <h2>Poll by {user.name}</h2>
      <img src={user.avatarURL} alt="User Avatar" className="avatar" />
      <h3>Would You Rather</h3>
      <div className="options">
        <div className="option">
          <p>{question.optionOne.text}</p>
          {hasUserVoted? (
            <p>{getPercentage(question.optionOne.votes)}% voted</p>
          ) : (
           <button onClick={() => handleVote('optionOne')}>Click</button>
          )}
        </div>
        <div className="option">
          <p>{question.optionTwo.text}</p>
          {hasUserVoted? (
            <p>{getPercentage(question.optionTwo.votes)}% voted</p>
          ) : (
            <button onClick={() => handleVote('optionTwo')}>Click</button>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ questions , users, authedUser}, id) => {
  if (questions === null || Object.keys(questions).length === 0) {
    return {}
  }

  if (users === null || Object.keys(users).length === 0) {
    return {}
  }

   return {
  question: questions[id.id],
  user: users[questions[id.id].author],
  authedUser : authedUser
}};
export default connect(mapStateToProps)(Poll);

