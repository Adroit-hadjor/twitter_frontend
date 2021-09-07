import React, { useState } from "react";
import MobileNavList from "./MobileNavList";

const MobileBottomNav = () => {
 
  return (
    <>
      <div className="mobile_bottom_nav">
        <MobileNavList
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

        <MobileNavList
          comps={[]}
          link=""
          linkName="explore"
          id="explore"
          svgPath="M19.53 18.47L15.87 14.81C17.195 13.24 18 11.214 18 9C18 4.03 13.97 0 9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C11.215 18 13.24 17.196 14.808 15.87L18.468 19.53C18.615 19.676 18.808 19.75 18.998 19.75C19.188 19.75 19.383 19.677 19.528 19.53C19.823 19.237 19.823 18.763 19.53 18.47ZM1.5 9C1.5 4.865 4.865 1.5 9 1.5C13.135 1.5 16.5 4.865 16.5 9C16.5 13.135 13.135 16.5 9 16.5C4.865 16.5 1.5 13.135 1.5 9Z"
          width={19}
          height={20}
          fill={false}
          strokeWidth={1.5}
          viewBox="0 0 21 22"
        />

        <MobileNavList
          comps={[]}
          link=""
          linkName="notifications"
          id="notifications"
          svgPath="M60.091 44.404C60.031 44.356 53.671 39.484 53.782 26.314C53.842 18.718 51.346 11.968 46.741 7.30898C42.616 3.12998 37.03 0.819978 31.015 0.789978H30.976C24.964 0.819978 19.378 3.12998 15.25 7.31198C10.648 11.971 8.14602 18.718 8.21202 26.314C8.32302 39.304 2.15202 44.215 1.90602 44.404C1.12602 44.983 0.808016 45.994 1.11102 46.918C1.41702 47.842 2.28102 48.463 3.24702 48.463H18.007C18.313 55.393 23.998 60.943 30.997 60.943C37.996 60.943 43.675 55.393 43.978 48.463H58.744C59.71 48.463 60.574 47.845 60.874 46.921C61.183 46 60.865 44.986 60.085 44.407L60.091 44.404ZM31 56.434C26.485 56.434 22.81 52.903 22.516 48.46H39.484C39.184 52.9 35.515 56.44 31 56.44V56.434ZM8.14002 43.96C10.36 40.564 12.784 34.876 12.712 26.272C12.658 19.792 14.644 14.326 18.451 10.471C21.73 7.14998 26.191 5.31098 31 5.28998C35.809 5.31398 40.261 7.14998 43.54 10.474C47.35 14.329 49.339 19.792 49.285 26.275C49.213 34.879 51.64 40.57 53.86 43.963H8.14002V43.96Z"
          width={21}
          height={25}
          fill={true}
          strokeWidth={1}
          viewBox="0 0 61 61"
        />

        <MobileNavList
          comps={[]}
          link=""
          linkName="notifications"
          id="notifications"
          svgPath="M54.1562 0.431244H8.84375C4.10313 0.431244 0.25 4.28749 0.25 9.03124V48.0781C0.25 52.8219 4.10313 56.6812 8.84375 56.6812H54.1562C58.8969 56.6812 62.75 52.8219 62.75 48.0781V9.03124C62.75 4.28749 58.8969 0.431244 54.1562 0.431244ZM8.84375 5.11874H54.1562C56.3125 5.11874 58.0625 6.86874 58.0625 9.02499V11.2562L32.9062 28.0281C32.0531 28.5906 30.95 28.5969 30.0938 28.0219L4.9375 11.2562V9.02499C4.9375 6.86874 6.6875 5.11874 8.84375 5.11874V5.11874ZM54.1562 51.9875H8.84375C6.6875 51.9875 4.9375 50.2375 4.9375 48.0812V16.75L27.5625 31.8437C28.7594 32.6437 30.1313 33.0437 31.5 33.0437C32.875 33.0437 34.2406 32.6437 35.4375 31.8469L58.0625 16.7531V48.0719C58.0625 50.2281 56.3125 51.9781 54.1562 51.9781V51.9875Z"
          width={21}
          height={25}
          fill={true}
          strokeWidth={1}
          viewBox="0 0 63 57"
        />
      </div>
    </>
  );
};

export default MobileBottomNav;
