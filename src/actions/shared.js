import { getInitialData } from "../utils/api";
import { receiveUsers } from "./users";
import { receiveQuestions } from "./questions";
import { setAuthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";

const AUTHED_ID = "tylermcginnis";

export function handleInitialData() {
  console.log("initial data");
  return (dispatch) => {
    //dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      //dispatch(receiveQuestions(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
      //dispatch(hideLoading());
    });
  };
}
