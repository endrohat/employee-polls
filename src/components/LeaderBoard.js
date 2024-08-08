
import React from 'react';
import '../LeaderBoard.css';

const Leaderboard = ({ users }) => {
  return (
    <div className="leaderboard-container">
      <table>
        <thead>
          <tr>
            <th>Users</th>
            <th>Answered</th>
            <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>
                <img src={user.avatar} alt={user.name} className="avatar" />
                <div className="user-info">
                  <span className="user-name">{user.name}</span>
                  <span className="user-id">{user.id}</span>
                </div>
              </td>
              <td>{user.answered}</td>
              <td>{user.created}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
