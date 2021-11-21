import React from "react";
import Data from "../Data";
import TechAndToolsHeading from "./TechAndToolsHeading";
import Image from "./Image";

const ToolUsed = () => {
  const [tools] = React.useState(Data.tools);
  return (
    <>
      <div className="tools">
        <TechAndToolsHeading
          className="tools-used-text"
          innerText="Tools i use"
          spanInnerText="open to learn more"
          spanTextClassName="tech-tool-span-text"
        />
        <div className="tool-used-logo">
          <div className="logo">
            {tools.map((tool, index) => (
              <Image
                src={tool.link}
                alt={tool.name}
                className={tool.name}
                key={index}
                logo={tool}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolUsed;
