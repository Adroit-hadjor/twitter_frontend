import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const MobileNavList = ({
  link,
  linkName,
  id,
  svgPath,
  width,
  height,
  fill,
  strokeWidth,
  viewBox,
  secondPath,
  comps,
  ...props
}) => {
  const history = useHistory();
  const [icon_color, seticon_color] = useState("white");

  return (
    <>
      <div
        //className="list_item"
        onClick={() => {
          history.push(link);
        }}
        onMouseLeave={() => seticon_color("white")}
        onMouseOver={() => seticon_color("rgb(29, 161, 242)")}
      >
        <div style={{ height: "auto" }}>
          <svg
            width={width}
            height={height}
            id={id}
            viewBox={viewBox ? viewBox : "0 0 72 72"}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={svgPath}
              stroke={icon_color}
              stroke-width={strokeWidth}
              fill={fill ? icon_color : " "}
            />
            {secondPath ? (
              <path
                d={secondPath}
                stroke={icon_color}
                stroke-width={strokeWidth}
                fill={fill ? icon_color : " "}
              />
            ) : (
              <></>
            )}
            {comps.length > 0 ? (
              comps.map((comp) => {
                return (
                  <>
                    <path
                      d={comp.d}
                      stroke={icon_color}
                      stroke-width={strokeWidth}
                      fill={comp.fill ? icon_color : ""}
                    />
                  </>
                );
              })
            ) : (
              <></>
            )}
          </svg>
        </div>
        {/* <div className="list_text">{linkName}</div> */}
      </div>
    </>
  );
};

export default MobileNavList;
