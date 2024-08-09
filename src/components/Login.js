
import React, { useState } from 'react';
import '../Login.css';

const Login = ({ users }) => {
  const [selectedUser, setSelectedUser] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Selected User:', selectedUser);
  };

  return (
    <div className="login-container">
      <h1>Employee Polls</h1>
      <img
        src="https://via.placeholder.com/300"
        alt="Employee Polls"
        className="login-image"
      />
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Select User</label>
          <select
            value={selectedUser}
            onChange={(e) => setSelectedUser(e.target.value)}
          >
            <option value="" disabled>
              Select a user
            </option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" disabled={!selectedUser}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
