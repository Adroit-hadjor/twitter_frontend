import React from 'react';
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";

const TrendsForYou = () => {
    return (
        <div className="minitab">
        <div className="topics_to_follow">
          <div className="topics">Trends for you</div>
          <div>
            <AiOutlineSetting
              color={"rgb(29, 161, 242)"}
              style={{ marginRight: "10px" }}
              size={23}
            />
          </div>
        </div>
        <div className="tab">
          <div className="tab_lef">
            <div className="trending_text">ligue1.trending</div>
            <div>lille</div>

            <div className="number_of_tweets_text">20.8k tweets</div>
          </div>
          <div className="tab_right">
            <BsThreeDots
              color="grey"
              size={20}
              style={{ marginRight: "5px" }}
            />
          </div>
        </div>
        <div className="tab">
          <div className="tab_lef">
            <div className="trending_text">unemployment.trending</div>
            <div>Nana Aba</div>
          </div>
          <div className="tab_right">
            <BsThreeDots
              color="grey"
              size={20}
              style={{ marginRight: "5px" }}
            />
          </div>
        </div>
        <div className="tab">
          <div className="tab_lef">
            <div className="trending_text">corruption.trending</div>
            <div>FIX GHANA NOW!!</div>

            <div className="number_of_tweets_text">20.8k tweets</div>
          </div>
          <div className="tab_right">
            <BsThreeDots
              color="grey"
              size={20}
              style={{ marginRight: "5px" }}
            />
          </div>
        </div>
        <div className="tab">
          <div className="tab_lef">
            <div className="trending_text">movie.trending</div>
            <div>Thanos</div>

            <div className="number_of_tweets_text">20.8k tweets</div>
          </div>
          <div className="tab_right">
            <BsThreeDots
              color="grey"
              size={20}
              style={{ marginRight: "5px" }}
            />
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

export default TrendsForYou;