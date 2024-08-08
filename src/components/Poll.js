
import React from 'react';
import '../Poll.css';

const Poll = ({ author, avatar, options }) => {
  return (
    <div className="poll-container">
      <h2>Poll by {author}</h2>
      <img src={avatar} alt="User Avatar" className="avatar" />
      <h3>Would You Rather</h3>
      <div className="options">
        {options.map((option, index) => (
          <div className="option" key={index}>
            <p>{option.text}</p>
            <button>{option.buttonText}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Poll;
