import PropTypes from "prop-types";
import React from "react";
import styles from "./Flex.module.css";

export const Flex = ({ children }) => {
  return <div className={styles.flex_container}>{children}</div>;
};

Flex.propTypes = {
  children: PropTypes.node.isRequired,
};
