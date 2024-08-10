import { saveLikeToggle, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { addAnswerToUser, addQuestionToUser } from "./users";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question : question,
  };
}

function addQuestionAnswer(questionAnswer) {
  return {
    type: ADD_ANSWER,
    questionAnswer : questionAnswer,
  };
}

export function handleAddQuestion(question) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());

    return saveQuestion({
      ...question,
      author: authedUser
    })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToUser({qid : question.id, authedUser : authedUser}))
      })
     
      .then(() => dispatch(hideLoading()));
  };
} 

export function handleAddAnswer({qid, answer}) {

  return (dispatch, getState) => {
    const { authedUser } = getState();
   
    //dispatch(showLoading());
    let questionAnswer = {
      qid : qid,
      authedUser: authedUser,
      answer :answer
    }
    return saveQuestionAnswer(questionAnswer)
      .then(() => dispatch(addQuestionAnswer(questionAnswer)))
      .then(() => dispatch(addAnswerToUser({userId : authedUser, qid:qid, answer:answer})));
  };
} 

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions : questions,
  };
}

