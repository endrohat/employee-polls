import logo from './logo.svg';
import './App.css';
import QuestionsListSection from './components/QuestionListSection';
import Poll from './components/Poll';

function App() {

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

  return (
    <div className="App">
      <header className="App-header">
      <Poll author={pollData.author} avatar={pollData.avatar} options={pollData.options} />
      </header>
    </div>
  );
}

export default App;
