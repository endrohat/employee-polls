import React from 'react';
import '../QuestionDisplay.css'; // We'll create this CSS file for styling

function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

const QuestionDisplay = ({ username, timestamp }) => {
    
    return (
        <div className="user-message">
            <div className="user-info">
                <div className="username">{username}</div>
                <div className="timestamp">{formatDate(timestamp)}</div>
            </div>
            <button className="show-button">Show</button>
        </div>
    );
};

export default QuestionDisplay;