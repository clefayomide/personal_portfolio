import React from "react";
import Data from "../Data";
import Card from "./Card";
import PageRouteAndHeadingText from "./PageRouteAndHeadingText";

const Portfolio = () => {
  const [projects] = React.useState(Data.porfolio);

  return (
    <section className="portfolio-section-container">
      <PageRouteAndHeadingText innerText="My Portfolio" />
      <div className="distinguished-work-container">
        <p className="distinguished-work-text">
          Some of the projects i've worked on
        </p>
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <Card project={project} key={index} />
        ))}
        <div className="project-card-extra"></div>
      </div>
    </section>
  );
};

export default Portfolio;
