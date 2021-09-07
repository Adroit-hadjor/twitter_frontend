import { combineReducers } from "redux";
import { tweetsReducer, selectedTweetsReducer } from "./tweetsReducer";
const reducers = combineReducers({
  allTweets: tweetsReducer,
  tweet: selectedTweetsReducer,
});
export default reducers;
