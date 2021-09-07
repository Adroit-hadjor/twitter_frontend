import React from 'react';

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
                "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-1/p240x240/33894871_1381565591989139_6877148170325852160_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeEC8K7AjVT6IFAtCEiwUVpU3J0Mu7sdjg3cnQy7ux2ODUuZMNXMK6KMqtJmUTUtZ_t8Yp5-DlZawbREa9hLrKDj&_nc_ohc=sCKyUF4hawYAX_OEc-g&_nc_ht=scontent.facc5-1.fna&oh=b5b6694317a4a1e9f264b25cc2c3ae44&oe=613C5EE5"
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