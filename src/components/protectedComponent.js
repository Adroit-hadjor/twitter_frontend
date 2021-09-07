import React from "react";
import { useCookies, withCookies } from "react-cookie";
import { Route, Redirect, useHistory } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedComponent = ({ component, ...props }) => {
  const [cookies, setCookie] = useCookies(["token", "user"]);
  const history = useHistory();
  const token = cookies?.token;

  if (cookies == "undefined" || Object.keys(cookies).length == 0) {
    return <Redirect to="/login" />;
  } else {
    if (cookies?.token == "undefined") {
      return <Redirect to="/login" />;
    }

    return component;
  }
};

export default withCookies(ProtectedComponent);
