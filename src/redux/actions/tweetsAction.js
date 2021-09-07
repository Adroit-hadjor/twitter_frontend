import { ActionTypes } from "../constants/action-types";

export const setTweets = (tweets) => {
  return {
    type: ActionTypes.SET_TWEETS,
    payload: tweets,
  };
};

export const selectedTweet = (tweet) => {
  return {
    type: ActionTypes.SELECTED_TWEET,
    payload: tweet,
  };
};
export const removeSelectedTweet = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_TWEET,
  };
};
