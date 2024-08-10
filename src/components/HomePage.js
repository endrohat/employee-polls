import QuestionListSection from "./QuestionListSection";
import UnansweredQuestionListSection from "./UnansweredQuestionListSection";
import { useState } from "react";
import '../HomePage.css';
const HomePage = () => {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
    };

    return (
        <div className="toggle-component">
            <div className="toggle-wrapper">
                <span className={`toggle-label ${!isToggled ? 'active' : ''}`}>New Questions</span>
                <label className="switch">
                    <input type="checkbox" checked={isToggled} onChange={handleToggle} />
                    <span className="slider"></span>
                </label>
                <span className={`toggle-label ${isToggled ? 'active' : ''}`}>Completed</span>
            </div>
            {
                !isToggled ? (
                    <UnansweredQuestionListSection />
                ) : <QuestionListSection />
            }


        </div>

    )
};

export default HomePage;