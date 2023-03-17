import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({
  text,
  backgroundColor,
  hasIcon,
  icon,
  isRounded,
  hasBorder,
  isTransparent,
  fontSize,
}) => {
  return (
    <button
      className={styles.button}
      style={{
        width: `${isRounded ? "40px" : "auto"}`,
        height: `${isRounded && "40px"}`,
        background: `${isTransparent ? "none" : backgroundColor}`,
        display: `${hasIcon && "flex"}`,
        alignItems: `${"center"}`,
        justifyContent: `${hasIcon && "center"}`,
        borderRadius: `${isRounded && "100%"}`,
        border: `${hasBorder && "0.2px solid grey"}`,
        padding: `${!isRounded && "0 20px 0 20px"}`,
        fontSize: `${fontSize && fontSize}`,
      }}
    >
      <div>{text}</div>
      {hasIcon && <div>{icon}</div>}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  hasIcon: PropTypes.bool,
  icon: PropTypes.node,
  isRounded: PropTypes.bool,
  fontSize: PropTypes.string,
};
