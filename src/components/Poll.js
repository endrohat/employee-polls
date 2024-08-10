
import React from 'react';
import '../Poll.css';
import { connect } from "react-redux";
import { handleAddAnswer } from '../actions/questions';
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ErrorPage from './ErrorPage';

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Poll = ({ question, user, authedUser, dispatch }) => {
  if (question == null || Object.keys(question).length === 0) {
    return (<ErrorPage/>)
  }

  if (user == null || Object.keys(user).length === 0) {
    return (<ErrorPage/>)
  }

  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

  const getPercentage = (optionVotes) => {
    return totalVotes === 0 ? 0 : ((optionVotes.length / totalVotes) * 100).toFixed(2);
  };

  const handleVote = (option) => {
    console.log(option);

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

const mapStateToProps = ({ questions , users, authedUser}, props) => {
  const { id } = props.router.params;

  if (questions == null || Object.keys(questions).length === 0) {
    return {}
  }

  if (users == null || Object.keys(users).length === 0) {
    return {}
  }

  
  if (questions[id] == null) {
    return {}
  }

   return {
  question: questions[id],
  user: users[questions[id].author],
  authedUser : authedUser
}};
export default withRouter(connect(mapStateToProps)(Poll));

