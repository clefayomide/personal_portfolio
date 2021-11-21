import React, { useState } from "react";
import Data from "../Data";
import PageRouteAndHeadingText from "./PageRouteAndHeadingText";

const Experience = () => {
  const [exp] = useState(Data.workExp);
  const [index, setIndex] = useState(0);
  const { title, company, date, description } = exp[index];

  return (
    <section className="experience-section-container">
      <PageRouteAndHeadingText innerText="Experience" />
      <div className="experience-container">
        <div className="exp-nav-btn-container">
          {exp.map((experience, val) => {
            return (
              <button
                className={`exp-nav-btn ${val === index && `active`}`}
                onClick={() => setIndex(val)}
                key={experience.id}
              >
                {experience.company}
              </button>
            );
          })}
        </div>

        <div className="exp-desc">
          <p className="exp-title">
            {title} <span className="bolded-span">@ {company}</span>
          </p>
          <p className="exp-date">{date}</p>

          <div className="exp-job-duties">
            <div className="duties">
              <ul className="duty-lists">
                {description.map((desc) => {
                  return (
                    <li key={desc.id} className="duties-lists">
                      {desc.text}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
