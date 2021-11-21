import React from "react";

const MobileHamburgerMenu = () => {
  // hamburger toggler func
  window.onload = () => {
    const hamburgerMenuBtn = document.querySelector(".hamburger");
    const mobileNavRoutes = document.querySelector(".mobileNavRoutes");
    const mobileNavLink = document.querySelectorAll(".mobileNavLink");
    hamburgerMenuBtn.addEventListener("click", () => {
      hamburgerMenuBtn.classList.toggle("isActive");
      mobileNavRoutes.classList.toggle("isActive");
    });
    mobileNavLink.forEach((nav) => {
      nav.addEventListener("click", () => {
        mobileNavRoutes.classList.remove("isActive");
        hamburgerMenuBtn.classList.remove("isActive");
      });
    });
  };
  return (
    <>
      <button className="hamburger">
        <div className="bar"></div>
      </button>
    </>
  );
};

export default MobileHamburgerMenu;
