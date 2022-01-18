import React from 'react';
import avi from "../images/spiderman.jpg"

const WhoToFollow = () => {
    return (
        
      <div className="minitab_follow">
      <div className="topics_to_follow">
        <div className="topics">Who To follow</div>
        <div></div>
      </div>
      <div className="tab">
        <div className="tab_left">
          <div className="tab_left_avi">
            <img
              src={
                avi
              }
              className="wh_avi"
            />
          </div>
          <div className="tab_left_name">
            <text>Emmanuel</text>
            <text style={{ color: "rgb(136, 153, 166)" }}>@osei</text>
          </div>
        </div>
        <div className="tab_right">
          <text className="follow_text">Follow</text>
        </div>
      </div>

      <div
        className="tab tab_1"
        style={{ borderBottomLeftRadius: "20px !important" }}
      >
        <div className="tab_lef">
          <div style={{ padding: "5px 0px", color: "rgb(29, 161, 242)" }}>
            Show me
          </div>
        </div>
        <div className="tab_right"></div>
      </div>
    </div>
    );
};

export default WhoToFollow;