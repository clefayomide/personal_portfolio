import React, { useState } from "react";
import Data from "../Data";
import { Link, useLocation } from "react-router-dom";

const Routes = ({ className, navlinkClass }) => {
  const location = useLocation()
  const [navData] = useState(Data.nav);
  return (
    <>
      <ul className={className}>
        {navData.map((nav) => {
          return (
            <li key={nav.id} className={navlinkClass}>
              <Link
                to={nav.route}
                className="nav-links"
                id={location.pathname === nav.route ? "active" : ""}
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
