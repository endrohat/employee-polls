import { ADD_ANSWER_TO_USER, RECEIVE_USERS } from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };

    case ADD_ANSWER_TO_USER:
      let userId = action.userId
      let qid = action.qid
      let answer = action.answer
      console.log(action)
      return {
        ...state,
        [userId]: {
          ...state[userId],
          answers: {
            ...state[userId].answers,
            [qid]: answer
          }
        }
      }
      
    default:
      return state;
  }
}
