import React from 'react';
import '../QuestionDisplay.css'; // We'll create this CSS file for styling

const QuestionDisplay = ({ username, timestamp }) => {
    return (
        <div className="user-message">
            <div className="user-info">
                <div className="username">{username}</div>
                <div className="timestamp">{timestamp}</div>
            </div>
            <button className="show-button">Show</button>
        </div>
    );
};

export default QuestionDisplay;