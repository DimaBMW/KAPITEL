// Компонента text
import styles from "../../assets/styles/text.scss";
import PropTypes from "prop-types";
import React from "react";

const Text = ({ text, className }) => {
  //присвоение сторонних классов
  const combinedClassName = `${styles.text} texts ${className}`;
  return <p className={combinedClassName}>{text}</p>;
};
//валидация
Text.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Text;
