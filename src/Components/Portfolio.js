import React from "react";
import Data from "../Data";
import Card from "./Card";
import PageRouteAndHeadingText from "./PageRouteAndHeadingText";

const Portfolio = () => {
  const [openModal, setOpenModal] = React.useState(false);
  const [projects, setProjects] = React.useState(Data.porfolio);

  const handleFilter = (filter) => {
    setProjects(
      Data.porfolio.filter((portfolio) => portfolio.category === filter)
    );
    setOpenModal(false);
  };

  const setAll = () => {
    setProjects(Data.porfolio);
    setOpenModal(false);
  };

  const handleToggle = () => {
    if (openModal === true) {
      setOpenModal(false);
    } else {
      setOpenModal(true);
    }
  };

  return (
    <section className="portfolio-section-container">
      <PageRouteAndHeadingText innerText="My Portfolio" />
      <div className="distinguished-work-container">
        <p className="distinguished-work-text">
          Some of the projects i've worked on
        </p>
      </div>

      <div className="toggler-container">
        <div className="flexed-toggler">
          <div className="drop-down-toggler-container">
            <div className="btn-svg-container">
              <button className="drop-down-btn" onClick={handleToggle}>
                Filter by:
              </button>
              {openModal ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-caret-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 11.14L2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  className="bi bi-caret-up-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.247 4.86l-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                </svg>
              )}
            </div>

            {openModal && (
              <div className="filter-btn">
                <button className="byAll" onClick={setAll}>
                  All
                </button>
                <button
                  className="personal"
                  onClick={() => handleFilter("personal")}
                >
                  Personal
                </button>
                <button
                  className="zuri-chat"
                  onClick={() => handleFilter("job")}
                >
                  On Jobs
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="project-container">
        {projects.map((project, index) => (
          <Card project={project} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
