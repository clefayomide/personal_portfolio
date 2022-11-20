import React from "react";
import Data from "../Data";
import Image from "./Image";
import TechAndToolsHeading from "./TechAndToolsHeading";

const TechUsed = () => {
  const [languages] = React.useState(Data.languages);
  return (
    <>
      <h4 className="recent-techs-header">Technologies I’ve been working with recently</h4>
      <ul>
        {languages.map((language) => (
          <li class="recent-techs">{language.name}</li>
        ))}
      </ul>

      {/* <div className="tech-tool">
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
      </div> */}
    </>
  );
};

export default TechUsed;
