import React, { useState } from "react";
import Data from "../Data";
import { Link } from "react-router-dom";

const Routes = ({ className, navlinkClass }) => {
  const [navData] = useState(Data.nav);
  const [, setIndex] = useState();
  const isActive = (param) => {
    setIndex(param);
  };
  return (
    <>
      <ul className={className}>
        {navData.map((nav) => {
          return (
            <li key={nav.id} className={navlinkClass}>
              <Link
                to={nav.route}
                className="nav-links"
                id={window.location.pathname === nav.route ? "active" : ""}
                onClick={() => isActive(nav.id)}
              >
                {nav.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Routes;
