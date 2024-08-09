import logo from './logo.svg';
import './App.css';
import QuestionsListSection from './components/QuestionListSection';
import UnansweredQuestionListSection from './components/UnansweredQuestionListSection';
import Poll from './components/Poll';
import CreatePoll from './components/CreatePoll';
import Leaderboard from './components/LeaderBoard';
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "./actions/shared";
import Login from './components/Login';
import Nav from './components/Nav';
import { Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';

const App = (props) => {

  useEffect(() => {
    console.log(props)
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <div className="App">
        <header className="App-header">
        <div className="container">
          <Nav />
 
          <Routes>
            <Route path="/" exact element={ <HomePage />} />
            <Route path="/Poll/:id" element={<Poll />} />
            <Route path="/new" element={<CreatePoll />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>

          
          </div>
        </header>
      </div>
    </Fragment>

  );
};
const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
