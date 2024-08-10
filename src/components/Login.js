
import React, { useState } from 'react';
import '../Login.css';
import { connect } from 'react-redux';
import { LoadingBar } from 'react-redux-loading-bar';
import setAuthedUser from '../actions/authedUser';
const Login = ({ users, dispatch }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    //console.log('Selected User:', selectedUser);
    dispatch(setAuthedUser(selectedUser))
  };
  if (users === null) {
    return (<LoadingBar />)
  }

  return (
    <div className="login-container">
      <h1>Employee Polls</h1>
      <img
        src="images/pollsHeader.png"
        alt="Employee Polls"
        className="login-image"
      />
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select User</label>
          <select data-testid="user-select"
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="" disabled>
              Select a user
            </option>
            {Object.keys(users).map(userId => (
              <option key={userId} value={userId}>
                {users[userId].name}
              </option>
            ))}

          </select>
        </div>
        <button type="submit" disabled={!selectedUser} data-testid="submit-button" >
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser, users
});


export default connect(mapStateToProps)(Login);
