import React from 'react';

const MobileCreateTweet = () => {
    return (
       <>
        <div className="mobile_home_bar">Home</div>
        <div className="mobile_create_tweet">
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
       </>
    );
};

export default MobileCreateTweet;