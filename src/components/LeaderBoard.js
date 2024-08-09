import React from 'react';
import '../LeaderBoard.css';
import { connect } from 'react-redux';

const LeaderBoard = ({ users }) => {
  // Convert the users object into an array and calculate the score for each user
  const sortedUsers = Object.values(users)
    .map(user => ({
      ...user,
      answerCount: Object.keys(user.answers).length,
      questionCount: user.questions.length,
      totalScore: Object.keys(user.answers).length + user.questions.length,
    }))
    .sort((a, b) => b.totalScore - a.totalScore); // Sort by totalScore descending

  return (
    <div className="leaderboard-container">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
            <th>Total Score</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(user => (
            <tr key={user.id}>
              <td>
                <img src={user.avatarURL || 'https://via.placeholder.com/40'} alt={user.name} className="avatar-leaderboard" />
                <div className="user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-id">{user.id}</span>
                </div>
              </td>
              <td>{user.answerCount}</td>
              <td>{user.questionCount}</td>
              <td>{user.totalScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
const mapStateToProps = ({ users}) => ({
  users: users
});
export default connect(mapStateToProps)(LeaderBoard);
