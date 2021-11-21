import React from "react";

const TechAndToolsHeading = ({
  className,
  innerText,
  spanTextClassName,
  spanInnerText,
}) => {
  return (
    <>
      <p className={className}>
        {innerText} <span className={spanTextClassName}>{spanInnerText}</span>
      </p>
    </>
  );
};

export default TechAndToolsHeading;
