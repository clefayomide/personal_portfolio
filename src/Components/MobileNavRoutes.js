import React from "react";
import Routes from "./Routes";

const MobileNavRoutes = () => {
  return (
    <>
      <div className="mobileNav-routes-container">
        <Routes className="mobileNavRoutes" navlinkClass="mobileNavLink" />
      </div>
    </>
  );
};

export default MobileNavRoutes;
