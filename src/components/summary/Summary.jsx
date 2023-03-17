import PropTypes from "prop-types";
import { Flex } from "../../layout/flex/Flex";
import React from "react";
import styles from "./Summary.module.css";

export const Summary = ({ content_one, content_two, content_three }) => {
  return (
    <Flex>
      <section className={styles.content}>{content_one}</section>
      <section className={`${styles.content} ${styles.content_diff}`}>{content_two}</section>
      <section className={styles.content}>{content_three}</section>
    </Flex>
  );
};

Summary.propTypes = {
  content_one: PropTypes.node.isRequired,
  content_two: PropTypes.node.isRequired,
  content_three: PropTypes.node.isRequired,
};
