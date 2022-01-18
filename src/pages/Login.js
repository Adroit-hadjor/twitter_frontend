import React, { useState, useEffect } from "react";
import { FaTwitter } from "react-icons/fa";
import { Post } from "../api/api";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useCookies, withCookies } from "react-cookie";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [chooseName, setChooseName] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dis, setDis] = useState(false);
  const [opacityValue, setOpacityValue] = useState(0.5);
  const [modOpacityValue, setModOpacityValue] = useState(0.5);
  const [modal, setModal] = useState(false);
  const [modDis, setModDis] = useState(false);
  const [cookies, setCookie] = useCookies(["token", "user"]);
  const [token, setToken] = useState("");
  const history = useHistory();
  const [count,setCount] = useState(0)
  
  useEffect(()=>{
    
    if( Object.keys(cookies).length > 0 ){
      if(cookies?.token !==  "undefined"){
        history.push("/")
      }
     
    }
    
   
 },[count])

  useEffect(() => {
    if (username && password) {
      setOpacityValue(1);
      setDis(true);
    } else {
      setOpacityValue(0.5);
      setDis(false);
    }
  }, [password, username]);

  useEffect(() => {
    if (newUsername && newPassword && email && confirmPassword) {
      setModOpacityValue(1);
      setModDis(true);
    } else {
      setModOpacityValue(0.5);
      setModDis(false);
    }
  }, [newPassword, newUsername, email, confirmPassword]);

  const logIn = async () => {
    const url = "auth/local";
    const body = {
      identifier: username,
      password,
    };
    const response = await Post(url, body);

    setCookie("user", JSON.stringify(response.user));
    setCookie("token", response.jwt);

    if (response?.jwt) {
      history.push("/");
    } else {
      alert("Incorrect username or password ");
    }
  };

  const signup = async () => {
    const url = "auth/local/register";
    const body = {
      username: newUsername,
      password: newPassword,
      email,
    };
    const responsex = await Post(url, body);
    const response = responsex;

    if (response) {
      if (response.statusCode == 400) {
        alert(response.message[0].messages[0].message);
      } else {
        alert(responsex);

        setCookie("user", JSON.stringify(response.user));
        setCookie("token", response.jwt);
        setChooseName(true);
      }
    } else {
      alert("something went wrong");
    }
    const tok = cookies.token;
    const user = cookies.user;
    if (tok) {
      setToken(tok);
    }
  };

  const createName = async () => {
    const url = "profiles";
    const body = {
      name,
    };
    const response = await Post(url, body, token);

    if (response) {
      if (response.statusCode == 400) {
        alert(response.message[0].messages[0].message);
      } else {
        history.push("/");
      }
    } else {
      alert("something went wrong");
    }
  };

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div
      className="whole"
      style={{
        backgroundColor: "#15202B",
        color: "white",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="Login_box">
        <div className="login_icon">
          {" "}
          <FaTwitter size={30} style={{ margin: "0px !important" }} />
        </div>
        <div className="l_text">Log in to Twitter </div>
        <div className="place_holder">
          <input
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="email login_text"
            data-placeholder="phone , email or username"
            placeholder="phone , email or username "
            type="text"
          />
          <div
            className={username.length > 0 ? "place placeholder1" : "nothing "}
          >
            phone , email or username
          </div>
        </div>
        <div className="place_holder">
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="email login_text"
            data-placeholder="password"
            placeholder="password"
            type="text"
          />
          <div
            className={password.length > 0 ? "place placeholder2" : "nothing "}
          >
            password
          </div>
        </div>
        <div>
          <div
            onClick={() => {
              logIn();
            }}
            style={{
              opacity: opacityValue,
              cursor: dis ? "pointer" : "default",
            }}
            className="login_button"
          >
            Log in
          </div>
        </div>
        <div onClick={() => toggle()} className="forgot_password">
          Forgot pasword?{" "}
          <text
            style={{ color: "gray", padding: "0px 5px", fontWeight: "bold" }}
          >
            {" "}
            &middot;{" "}
          </text>{" "}
          signup for twitter
        </div>
      </div>
      <Modal
        style={{ backgroundColor: "#15202B ", color: "white" }}
        isOpen={modal}
        toggle={toggle}
        className={"mod rounded-50"}
      >
        {chooseName ? (
          <ModalBody>
            <div className="md-icon">
              <FaTwitter size={26} style={{ margin: "0px !important" }} />
            </div>
            <div className="create_account">Create a name</div>
            <div className="place_holder">
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="email login_text"
                data-placeholder="name"
                placeholder="name "
                type="text"
              />
              <div
                className={name.length > 0 ? "place placeholder1" : "nothing "}
              >
                name
              </div>
            </div>
            <div>
              <div
                onClick={() => {
                  createName();
                }}
                style={{
                  opacity: modOpacityValue,
                  cursor: modDis ? "pointer" : "default",
                  marginTop: "30px",
                }}
                className="login_button"
              >
                Sign Up
              </div>
            </div>
          </ModalBody>
        ) : (
          <ModalBody>
            <div className="md-icon">
              {" "}
              <FaTwitter size={26} style={{ margin: "0px !important" }} />
            </div>
            <div className="create_account">Create your account</div>
            <div className="place_holder">
              <input
                onChange={(e) => setNewUsername(e.target.value)}
                value={newUsername}
                className="email login_text"
                data-placeholder="username"
                placeholder="username "
                type="text"
              />
              <div
                className={
                  newUsername.length > 0 ? "place placeholder1" : "nothing "
                }
              >
                username
              </div>
            </div>
            <div className="place_holder">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="email login_text"
                data-placeholder="email"
                placeholder="email"
                type="text"
              />
              <div
                className={email.length > 0 ? "place placeholder2" : "nothing "}
              >
                email
              </div>
            </div>
            <div className="place_holder">
              <input
                onChange={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                className="email login_text"
                data-placeholder="password"
                placeholder="password"
                type="text"
              />
              <div
                className={
                  newPassword.length > 0 ? "place placeholder2" : "nothing "
                }
              >
                password
              </div>
            </div>

            <div className="place_holder">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                className="email login_text"
                data-placeholder="confirm password"
                placeholder="confirm password"
                type="text"
              />
              <div
                className={
                  confirmPassword.length > 0 ? "place placeholder2" : "nothing "
                }
              >
                confirm password
              </div>
            </div>

            <div>
              <div
                onClick={() => {
                  signup();
                }}
                style={{
                  opacity: modOpacityValue,
                  cursor: modDis ? "pointer" : "default",
                  marginTop: "30px",
                }}
                className="login_button"
              >
                Sign Up
              </div>
            </div>
          </ModalBody>
        )}
      </Modal>
    </div>
  );
};

export default withCookies(Login);
