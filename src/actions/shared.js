import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";

import { showLoading, hideLoading } from "react-redux-loading-bar";


export function handleInitialData() {
  console.log("initial data");
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      //dispatch(setAuthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}
