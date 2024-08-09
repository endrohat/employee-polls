import QuestionListSection from "./QuestionListSection";
import UnansweredQuestionListSection from "./UnansweredQuestionListSection";

const HomePage = () => {

    return (
        <div>
            <UnansweredQuestionListSection />
            <QuestionListSection />
        </div>

    )
};

export default HomePage;