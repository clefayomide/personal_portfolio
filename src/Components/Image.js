import React from "react";

const Image = ({ src, alt, className, logo }) => {
  const { name } = logo;
  return (
    <>
      <div className="logo-and-name-container">
        <img src={src} alt={alt} className={className} />
        <p className="logo-desc">{name}</p>
      </div>
    </>
  );
};

export default Image;
