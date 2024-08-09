import logo from './logo.svg';
import './App.css';
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
import LoadingBar from "react-redux-loading-bar";

const App = (props) => {

  useEffect(() => {
    //console.log(props)
    props.dispatch(handleInitialData());
  }, []);

  if(!props.loggedIn) {
    return (<Login></Login>)
  }

  return (
    <Fragment>
      <LoadingBar />
      <div className="App">
        <header className="App-header">
          <div className="container">
            <Nav />
            {props.loading === true ? null : (
              <Routes>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/Poll/:id" element={<Poll />} />
                <Route path="/new" element={<CreatePoll />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
              </Routes>
            )}
          </div>
        </header>
      </div>
    </Fragment>

  );
};
const mapStateToProps = ({ authedUser }) => ({
  loggedIn: authedUser !== null,

});

export default connect(mapStateToProps)(App);
