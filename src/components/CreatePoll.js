// src/components/CreatePollComponent.js
import React, { useState } from 'react';
import '../CreatePoll.css';

const CreatePoll= () => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Option One:', optionOne);
    console.log('Option Two:', optionTwo);
  };

  return (
    <div className="create-poll-container">
      <h2>Would You Rather</h2>
      <h3>Create Your Own Poll</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Option</label>
          <input
            type="text"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
            placeholder="Option One"
          />
        </div>
        <div className="form-group">
          <label>Second Option</label>
          <input
            type="text"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
            placeholder="Option Two"
          />
        </div>
        <button type="submit" disabled={!optionOne || !optionTwo}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePoll;
