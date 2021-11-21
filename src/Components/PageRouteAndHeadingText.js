import React from "react";

const PageRouteAndHeadingText = ({ innerText }) => {
  return (
    <>
      <div className="underline-greet-container">
        <div className="underline"></div>
        <div className="greeting-text-container">
          <h1 className="greeting-text">{innerText}</h1>
        </div>
      </div>
    </>
  );
};

export default PageRouteAndHeadingText;
