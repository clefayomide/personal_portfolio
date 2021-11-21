import React from "react";
import Data from "../Data";
import Image from "./Image";
import TechAndToolsHeading from "./TechAndToolsHeading";

const TechUsed = () => {
  const [logo] = React.useState(Data.logo);
  return (
    <>
      <div className="tech-tool">
        <TechAndToolsHeading
          className="tech-used-text"
          innerText="Technologies i use"
          spanInnerText="open to learn more"
          spanTextClassName="tech-tool-span-text"
        />
        <div className="tech-used-logo">
          <div className="logo">
            {logo.map((logo, index) => (
              <Image
                src={logo.link}
                alt={logo.name}
                className={logo.name}
                key={index}
                logo={logo}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TechUsed;
