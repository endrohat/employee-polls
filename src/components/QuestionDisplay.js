import React from 'react';
import '../QuestionDisplay.css'; 
import { Navigate, useNavigate } from 'react-router-dom';

function formatDate (timestamp) {
    const d = new Date(timestamp)
    const time = d.toLocaleTimeString('en-US')
    return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}



const QuestionDisplay = ({ username, timestamp, qid }) => {
 
    const navigate = useNavigate();
    const handleClick = () => { 
        navigate(`/Poll/${qid}`);
    }
    
    return (
        <div className="user-message">
            <div className="user-info">
                <div className="username">{username}</div>
                <div className="timestamp">{formatDate(timestamp)}</div>
            </div>
            <button className="show-button" onClick={() => handleClick()}>Show</button>
        </div>
    );
};

export default QuestionDisplay;