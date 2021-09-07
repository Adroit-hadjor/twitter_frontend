import React, { useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Tooltip } from "reactstrap";
import { FaTwitter } from "react-icons/fa";
import { List } from "./list";

import { useHistory } from "react-router-dom";
function LeftColumn() {
  
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [cookies, removeCookie] = useCookies(["user", "token"]);
  const history = useHistory();


  const signOut = ()=>{
    removeCookie("token")
    removeCookie("user")
    history.push("/login")
    
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        padding: "10px",
      }}
      className="left_column"
    >
      <div className="list">
        <div className="list_item_icon">
          <FaTwitter size={30} style={{ margin: "0px !important" }} />
        </div>

        <List
          comps={[]}
          link=""
          linkName="Home"
          id="home"
          svgPath="M67.74 22.05L37.425 5.691C36.534 5.211 35.463 5.211 34.575 5.691L4.27501 22.05C2.81701 
        22.842 2.27401 24.66 3.06001 26.118C3.60001 27.123 4.63501 27.693
         5.70001 27.693C6.18001 27.693 6.67201 27.579 7.12501
          27.333L9.32701 26.145L14.097 59.895C14.745 63.537 18.027 66.081 
          22.077 66.081H49.923C53.973 66.081 57.255 63.537 57.909 59.817L62.673
           26.142L64.884 27.336C66.339 28.125 68.16 27.582 68.946 26.124C69.735 
           24.666 69.186 22.845 67.734 22.059L67.74 22.05ZM36 46.305C30.615 46.305 26.25 41.94 26.25 36.555C26.25 31.17 30.615 26.805 36 26.805C41.385 26.805 45.75 31.17 45.75
            36.555C45.75 41.94 41.385 46.305 36 46.305Z"
          width={25}
          height={25}
          fill={false}
          strokeWidth={5}
        />
        <List
          comps={[]}
          link=""
          linkName="Explore"
          id="explore"
          svgPath="M63 22.011H51.21L52.326 9.195C52.434 7.959 51.516 6.87 50.28 6.759C49.029 6.669 47.952 7.569 47.844 8.808L46.695 22.008H27.735L28.845 9.198C28.956 7.959 28.035 6.87 26.805 6.759C25.545 6.669 24.474 7.569 24.366 8.808L23.22 22.008H11.346C10.104 22.008 9.096 23.019 9.096 24.258C9.096 25.497 10.104 26.508 11.346 26.508H22.83L21.18 45.489H9C7.758 45.489 6.75 46.497 6.75 47.739C6.75 48.981 7.758 49.989 9 49.989H20.79L19.674 62.805C19.566 64.041 20.484 65.13 21.72 65.241L21.918 65.25C23.073 65.25 24.054 64.365 24.156 63.192L25.305 49.992H44.265L43.155 62.802C43.047 64.041 43.965 65.13 45.201 65.241L45.399 65.25C46.554 65.25 47.535 64.365 47.637 63.192L48.783 49.992H60.654C61.893 49.992 62.904 48.981 62.904 47.742C62.904 46.503 61.893 45.492 60.654 45.492H49.17L50.82 26.511H63C64.242 26.511 65.25 25.503 65.25 24.261C65.25 23.019 64.242 22.011 63 22.011V22.011ZM44.655 45.489H25.695L27.345
           26.511H46.305L44.655 45.489Z"
          width={24}
          height={25}
          fill={true}
          strokeWidth={1}
        />

        <List
          comps={[]}
          link=""
          linkName="Notifications"
          id="Notifications"
          svgPath="M60.091 44.404C60.031 44.356 53.671 39.484 53.782 26.314C53.842 18.718 51.346 11.968 46.741 7.30898C42.616 3.12998 37.03 0.819978 31.015 0.789978H30.976C24.964 0.819978 19.378 3.12998 15.25 7.31198C10.648 11.971 8.14602 18.718 8.21202 26.314C8.32302 39.304 2.15202 44.215 1.90602 44.404C1.12602 44.983 0.808016 45.994 1.11102 46.918C1.41702 47.842 2.28102 48.463 3.24702 48.463H18.007C18.313 55.393 23.998 60.943 30.997 60.943C37.996 60.943 43.675 55.393 43.978 48.463H58.744C59.71 48.463 60.574 47.845 60.874 46.921C61.183 46 60.865 44.986 60.085 44.407L60.091 44.404ZM31 56.434C26.485 56.434 22.81 52.903 22.516 48.46H39.484C39.184 52.9 35.515 56.44 31 56.44V56.434ZM8.14002 43.96C10.36 40.564 12.784 34.876 12.712 26.272C12.658 19.792 14.644 14.326 18.451 10.471C21.73 7.14998 26.191 5.31098 31 5.28998C35.809 5.31398 40.261 7.14998 43.54 10.474C47.35 14.329 49.339 19.792 49.285 26.275C49.213 34.879 51.64 40.57 53.86 43.963H8.14002V43.96Z"
          width={24}
          height={25}
          fill={true}
          strokeWidth={1}
        />

        <List
          comps={[]}
          link=""
          linkName="Messages"
          id="Messages"
          width={24}
          height={25}
          fill={true}
          strokeWidth={0.5}
          svgPath="M54.1562 0.431244H8.84375C4.10313 0.431244 0.25 4.28749 0.25 9.03124V48.0781C0.25 52.8219 4.10313 56.6812 8.84375 56.6812H54.1562C58.8969 56.6812 62.75 52.8219 62.75 48.0781V9.03124C62.75 4.28749 58.8969 0.431244 54.1562 0.431244ZM8.84375 5.11874H54.1562C56.3125 5.11874 58.0625 6.86874 58.0625 9.02499V11.2562L32.9062 28.0281C32.0531 28.5906 30.95 28.5969 30.0938 28.0219L4.9375 11.2562V9.02499C4.9375 6.86874 6.6875 5.11874 8.84375 5.11874V5.11874ZM54.1562 51.9875H8.84375C6.6875 51.9875 4.9375 50.2375 4.9375 48.0812V16.75L27.5625 31.8437C28.7594 32.6437 30.1313 33.0437 31.5 33.0437C32.875 33.0437 34.2406 32.6437 35.4375 31.8469L58.0625 16.7531V48.0719C58.0625 50.2281 56.3125 51.9781 54.1562 51.9781V51.9875Z"
        />

        <List
          comps={[]}
          link=""
          linkName="Bookmarks"
          id="Bookmarks"
          width={21}
          height={22}
          fill={true}
          strokeWidth={0.2}
          svgPath="M71.7568 74.9978C71.0761 74.9978 70.4041 74.8117 69.8404 74.4618L37.5043 54.2589L5.16823 74.4692C4.17967 75.0796 2.87027 75.1764 1.77766 74.6926C0.693722 74.2199 0 73.2596 0 72.21V8.37444C0 3.75919 4.37912 0 9.75546 0H65.2445C70.6209 0 75 3.75919 75 8.37444V72.2063C75 73.2559 74.3149 74.2161 73.2223 74.6926C72.7627 74.8973 72.2555 74.9978 71.7482 74.9978H71.7568ZM37.5043 48.0135C38.1764 48.0135 38.8484 48.1921 39.4121 48.5494L68.505 66.7238V8.37444C68.505 6.84099 67.0439 5.58296 65.2532 5.58296H9.75546C7.96479 5.58296 6.50364 6.84099 6.50364 8.37444V66.7238L35.5966 48.5494C36.1603 48.1921 36.8323 48.0135 37.5043 48.0135V48.0135Z"
          viewBox={"0 0 75 75"}
        />

        <List
          comps={[]}
          link=""
          linkName="List"
          id="List"
          width={23}
          height={25}
          fill={true}
          strokeWidth={0.2}
          svgPath="M41.2604 42.75H5.73959C2.89793 42.75 0.583344 40.6038 0.583344 37.9688V5.03125C0.583344 2.39625 2.89793 0.25 5.73959 0.25H41.2604C44.1021 0.25 46.4167 2.39625 46.4167 5.03125V37.9688C46.4167 40.6038 44.1021 42.75 41.2604 42.75ZM5.73959 3.4375C4.79084 3.4375 4.02084 4.15363 4.02084 5.03125V37.9688C4.02084 38.8464 4.79084 39.5625 5.73959 39.5625H41.2604C42.2092 39.5625 42.9792 38.8464 42.9792 37.9688V5.03125C42.9792 4.15363 42.2092 3.4375 41.2604 3.4375H5.73959Z"
          viewBox={"0 0 47 43"}
          secondPath={
            "M34.9583 14.36H12.0417C11.0929 14.36 10.3229 13.6439 10.3229 12.7663C10.3229 11.8886 11.0929 11.1725 12.0417 11.1725H34.9583C35.9071 11.1725 36.6771 11.8844 36.6771 12.7663C36.6771 13.6481 35.9071 14.36 34.9583 14.36ZM34.9583 23.0938H12.0417C11.0929 23.0938 10.3229 22.3798 10.3229 21.5C10.3229 20.6203 11.0929 19.9063 12.0417 19.9063H34.9583C35.9071 19.9063 36.6771 20.6203 36.6771 21.5C36.6771 22.3798 35.9071 23.0938 34.9583 23.0938ZM23.5 31.8275H12.0417C11.0929 31.8275 10.3229 31.1156 10.3229 30.2338C10.3229 29.3519 11.0929 28.64 12.0417 28.64H23.5C24.4488 28.64 25.2188 29.3561 25.2188 30.2338C25.2188 31.1114 24.4488 31.8275 23.5 31.8275Z"
          }
        />

        <List
          comps={[]}
          link=""
          linkName="Profile"
          id="Profile"
          width={25}
          height={25}
          fill={true}
          strokeWidth={0.2}
          svgPath="M24.7983 20.7258C27.6378 20.7258 30.8168 20.4677 32.8453 18.5645C34.5511 16.9643 35.1044 14.4898 34.5344 11.007C33.738 6.14591 30.098 3.24301 24.7983 3.24301C19.4985 3.24301 15.8585 6.14591 15.0621 11.0105C14.4921 14.4898 15.0454 16.9643 16.7512 18.5645C18.7797 20.4694 21.9587 20.7258 24.7983 20.7258V20.7258ZM18.1762 11.3512C18.5157 9.28628 19.8254 5.82413 24.7983 5.82413C29.7711 5.82413 31.0808 9.288 31.4203 11.3512C31.8541 14.0183 31.5398 15.8716 30.4773 16.8662C29.5238 17.761 27.8243 18.1447 24.7983 18.1447C21.7722 18.1447 20.0727 17.761 19.1192 16.8662C18.0567 15.8716 17.7424 14.0166 18.1762 11.3512ZM42.1497 33.4937C40.3119 27.4264 33.1764 23.1865 24.7983 23.1865C16.4201 23.1865 9.28461 27.4264 7.44678 33.4937C7.08634 34.6845 7.3881 35.9028 8.27454 36.832C9.12954 37.7268 10.4539 38.243 11.9062 38.243H37.6903C39.1426 38.243 40.467 37.7268 41.322 36.832C42.2105 35.9028 42.5102 34.6862 42.1476 33.4937H42.1497ZM38.8471 35.242C38.583 35.5173 38.1849 35.6653 37.6903 35.6653H11.9062C11.4137 35.6653 11.0135 35.5191 10.7494 35.242C10.4623 34.9426 10.3722 34.5331 10.498 34.1167C11.9858 29.2039 17.8681 25.771 24.7983 25.771C31.7284 25.771 37.6107 29.2022 39.0986 34.1167C39.2243 34.5331 39.1342 34.9426 38.8471 35.242V35.242Z"
          viewBox={"0 0 48 47"}
        />
        <List
          link=""
          linkName="More"
          id="More"
          width={25}
          height={25}
          fill={true}
          strokeWidth={0.2}
          svgPath="M26.3333 20.375C27.714 20.375 28.8333 19.3117 28.8333 18C28.8333 16.6883 27.714 15.625 26.3333 15.625C24.9526 15.625 23.8333 16.6883 23.8333 18C23.8333 19.3117 24.9526 20.375 26.3333 20.375Z"
          viewBox={"0 0 36 36"}
          comps={[
            {
              d:
                "M18 20.375C19.3807 20.375 20.5 19.3117 20.5 18C20.5 16.6883 19.3807 15.625 18 15.625C16.6193 15.625 15.5 16.6883 15.5 18C15.5 19.3117 16.6193 20.375 18 20.375Z",
              fill: true,
            },

            {
              d:
                "M9.66666 20.375C11.0474 20.375 12.1667 19.3117 12.1667 18C12.1667 16.6883 11.0474 15.625 9.66666 15.625C8.28594 15.625 7.16666 16.6883 7.16666 18C7.16666 19.3117 8.28594 20.375 9.66666 20.375Z",
              fill: true,
            },

            {
              d:
                "M18 35.0208C8.12 35.0208 0.0833282 27.386 0.0833282 18C0.0833282 8.614 8.12 0.979168 18 0.979168C27.88 0.979168 35.9167 8.614 35.9167 18C35.9167 27.386 27.88 35.0208 18 35.0208ZM18 3.35417C9.5 3.35417 2.58333 9.925 2.58333 18C2.58333 26.075 9.5 32.6458 18 32.6458C26.5 32.6458 33.4167 26.075 33.4167 18C33.4167 9.925 26.5 3.35417 18 3.35417Z",
              fill: true,
            },
          ]}
        />

        
        <div className="list_button">
          <div className="tweet_text_left" style={{ color: "white" }}>
            Tweet
          </div>

          <div className="tweet_sign_left">
            <svg
              width="25"
              height="40"
              viewBox="0 0 50 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 12H11.6667V6.50001C11.6667 5.83334 11.0417 5.16667 10 5.16667C8.95833 5.16667 8.54167 5.83334 8.54167 6.50001V12H1.66667C0.833333 12 0 12.5 0 13.3333C0 14.1667 0.625 14.6667 1.66667 14.6667H8.54167V20.1667C8.54167 20.8333 9.16667 21.5 10.2083 21.5C11.25 21.5 11.875 21 11.875 20.1667V14.5H18.75C19.5833 14.5 20.4167 14 20.4167 13.1667C20.4167 12.3333 19.375 12 18.3333 12V12ZM49.5833 3.83334V3.66667H49.375C49.1667 3.66667 30.2083 5.66667 19.375 23.1667C11.4583 35.8333 11.875 39.6667 12.5 39.6667C13.125 39.8333 19.5833 28.8333 26.4583 24.3333C37.2917 22.5 40.2083 18.3333 40.2083 18.3333C40.2083 18.3333 37.0833 18.6667 35.8333 18.6667C34.1667 18.6667 32.9167 18.3333 32.2917 18.1667C35 16.1667 37.2917 15.6667 39.5833 15.3333C41.4583 15 43.3333 14.6667 45.8333 13.3333C50.4167 10.6667 49.7917 4.16667 49.5833 3.83334V3.83334Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
      <div id="axe" className="profile">
        <div className={tooltipOpen ? "tooltipx" : "tool"}>
          <div>Add account</div>
          <div>Manage Account</div>
          <div style={{cursor:"pointer"}} onClick={()=>signOut()}> Logout</div>
          <div className="tip"></div>
        </div>

        <img
          src={
            "https://scontent.facc5-1.fna.fbcdn.net/v/t1.6435-1/p240x240/33894871_1381565591989139_6877148170325852160_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=7206a8&_nc_eui2=AeEC8K7AjVT6IFAtCEiwUVpU3J0Mu7sdjg3cnQy7ux2ODUuZMNXMK6KMqtJmUTUtZ_t8Yp5-DlZawbREa9hLrKDj&_nc_ohc=sCKyUF4hawYAX_OEc-g&_nc_ht=scontent.facc5-1.fna&oh=b5b6694317a4a1e9f264b25cc2c3ae44&oe=613C5EE5"
          }
          className="wh_avi"
        />
        <div className="profile_name">
          <div className="tab_left_name">
            <text>ισχυρός</text>
            <text style={{ color: "rgb(136, 153, 166)" }}>
              @{cookies.user?.username}
            </text>
          </div>
        </div>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            setTooltipOpen(!tooltipOpen);
          }}
          className="btn-x"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 14C6.10457 14 7 13.1046 7 12C7 10.8954 6.10457 10 5 10C3.89543 10 3 10.8954 3 12C3 13.1046 3.89543 14 5 14Z"
              fill="#BBBBBB"
            />
            <path
              d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
              fill="#BBBBBB"
            />
            <path
              d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z"
              fill="#BBBBBB"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default LeftColumn;