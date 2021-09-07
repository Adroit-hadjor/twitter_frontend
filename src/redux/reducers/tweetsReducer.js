import { ActionTypes } from "../constants/action-types";
const intialState = {
  Tweets: [],
};

export const tweetsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_TWEETS:
      return { ...state, tweets: payload };
    default:
      return state;
  }
};

export const selectedTweetsReducer = (state = {}, { type, payload }) => {
  //console.log(type);
  switch (type) {
    case ActionTypes.SELECTED_TWEET:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_TWEET:
      return {};
    default:
      return state;
  }
};
