import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Row, Col, Container, Button } from "reactstrap";
import {
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaDev,
  FaSearch,
} from "react-icons/fa";
import { GrImage } from "react-icons/gr";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import DATA from "./api/tweets";
import LeftColumn from "./components/leftColumn";
import RightColumn from "./components/rightColumn";
import MiddleColumn from "./components/middleColumn";
import QuotedReplies from "./pages/QuotedReplies";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Main";
import OpenedTweet from "./pages/OpenedTweet";
import { useDispatch, useSelector } from "react-redux";
import { setTweets } from "./redux/actions/tweetsAction";
import ProtectedComponent from "./components/protectedComponent";
import Login from "./pages/Login";
function App() {
  const [icon_color, seticon_color] = useState("grey");
  const [focus, setFocus] = useState(false);

  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.allTweets.tweets);

 /*  useEffect(() => {
    dispatch(setTweets(DATA));
  }, []); */

  return (
    <Router>
      <Switch>

      <Route  path={"/login"}>{<Login />}</Route>

        <Route exact path={"/"}>
          <ProtectedComponent component={<Main />} />
        </Route>

        <Route path={"/tweet"} >
        
          <ProtectedComponent component={<OpenedTweet />} />
        </Route>

        <Route path={"/quotes"} >
        
          <ProtectedComponent component={<QuotedReplies />} />
        </Route>

       
      </Switch>
    </Router>
  );
}

export default App;
