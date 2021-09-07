import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateTweetSvg = ({
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
  const [sty, setsty] = useState(false);

  return (
    <>
      <div
        //className="list_item"
        onClick={() => {
          history.push(link);
        }}
        onMouseLeave={() => setsty(false)}
        onMouseOver={() => setsty(true)}
      >
        <div 
        //style={ !sty ?{ "height": "auto" } : {"borderRadius":"100px","backgroundColor":"rgb(29, 161, 242)",opacity:0.5,zIndex:10}}
        >
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
              stroke={"rgb(29, 161, 242)"}
              stroke-width={strokeWidth}
              fill={fill ? "rgb(29, 161, 242)" : " "}
            />
            {secondPath ? (
              <path
                d={secondPath}
                stroke={"rgb(29, 161, 242)"}
                stroke-width={strokeWidth}
                fill={fill ? "rgb(29, 161, 242)" : " "}
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
                      stroke={"rgb(29, 161, 242)"}
                      stroke-width={strokeWidth}
                      fill={comp.fill ? "rgb(29, 161, 242)" : ""}
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

export default CreateTweetSvg;
