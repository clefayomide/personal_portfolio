import React from "react";
import avatar from "../assets/myAvatar.svg";
import MobileHamburgerMenu from "./MobileHamburgerMenu";
import MobileNavRoutes from "./MobileNavRoutes";
import Routes from "./Routes";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <div className="avatar-container">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>

        <Routes className="nav-list-container" navlinkClass="navlinkClass" />

        <MobileHamburgerMenu />
      </nav>
      <MobileNavRoutes />
    </>
  );
};

export default Header;
