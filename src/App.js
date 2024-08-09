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

const App = (props) => {

  useEffect(() => {
    console.log(props)
    props.dispatch(handleInitialData());
  }, []);

  const questions = [
    { username: 'mtsamis', timestamp: '4:11PM 11/23/2021' },
    { username: 'sarahedo', timestamp: '5:22PM 3/3/2017' },
    { username: 'tylermcginnis', timestamp: '6:42AM 12/24/2016' },
    { username: 'sarahedo', timestamp: '10:21PM 6/28/2016' },
  ];

  const pollData = {
    author: 'sarahedo',
    avatar: 'https://via.placeholder.com/150', // Replace with actual image URL if available
    options: [
      { text: 'Build our new application with Javascript', buttonText: 'Click' },
      { text: 'Build our new application with Typescript', buttonText: 'Click' },
    ],
  };

  const users = [
    {
      name: 'Sarah Edo',
      id: 'sarahedo',
      avatar: 'https://via.placeholder.com/40',
      answered: 4,
      created: 2,
    },
    {
      name: 'Mike Tsamis',
      id: 'mtsamis',
      avatar: 'https://via.placeholder.com/40',
      answered: 3,
      created: 3,
    },
    {
      name: 'Tyler McGinnis',
      id: 'tylermcginnis',
      avatar: 'https://via.placeholder.com/40',
      answered: 2,
      created: 2,
    },
    {
      name: 'Zenobia Oshikanlu',
      id: 'zoshikanlu',
      avatar: 'https://via.placeholder.com/40',
      answered: 1,
      created: 0,
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
       
      <UnansweredQuestionListSection/>
      <QuestionsListSection/>
      <Poll id = "loxhs1bqm25b708cmbf3g"></Poll>
      <Login users={users} />
      <CreatePoll></CreatePoll>
      </header>
    </div>
  );
};
const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
