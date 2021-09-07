import React from "react";
import TrendsForYou from "./TrendsForYou";
import TopicsToFollow from "./TopicsToFollow";
import SearchComponent from "./searchComponent";
import WhoToFollow from "./WhoToFollow"
function RightColumn() {
  return (
    <div className="right_side">
      <SearchComponent />

      <TrendsForYou />

      <WhoToFollow/>

      <TopicsToFollow />

      <div>&nbsp;</div>
    </div>
  );
}

export default RightColumn;
