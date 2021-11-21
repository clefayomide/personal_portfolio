import React from "react";
import Btn from "./Btn";
import DownloadCvBtn from "./DownloadCvBtn";
import PageRouteAndHeadingText from "./PageRouteAndHeadingText";
import TechUsed from "./TechUsed";
import ToolUsed from "./ToolUsed";

const About = () => {
  return (
    <section className="about-container">
      <div className="about-content">
        <div className="left-about">
          <PageRouteAndHeadingText innerText="About Me" />
          <p className="peach">
            Hi, i'm here <br /> to help your next project
          </p>
          <p className="brief-peach">
            I'm a user centred frontend web developer who is comfortable working
            with various frontend web technologies to deliver and transform
            business idea into an exceptional responsive and user friendly web
            application. I am looking to leverage my experience building
            responsive and scalable web apps to solve interesting problem that
            delights end-users.
          </p>

          <div className="porfolio-btn-cv-btn">
            <Btn className="portfolio-btn" innerText="My Portfolio" />
            <DownloadCvBtn />
          </div>
        </div>

        <div className="right-about">
          <div className="circle bottom">
            <div className="inner-circle"></div>
          </div>
          <div className="svgs">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="currentColor"
              className="bi bi-laptop"
              viewBox="0 0 16 16"
            >
              <path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="150"
              height="150"
              fill="currentColor"
              className="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="350"
              height="150"
              fill="currentColor"
              className="bi bi-tablet"
              viewBox="0 0 16 16"
            >
              <path d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          </div>

          <div className="circle top">
            <div className="inner-circle"></div>
          </div>
        </div>
      </div>
      <div className="tech-used-logo-container">
        <div className="tech-tools-container">
          <TechUsed />
          <ToolUsed />
        </div>
      </div>
    </section>
  );
};

export default About;
