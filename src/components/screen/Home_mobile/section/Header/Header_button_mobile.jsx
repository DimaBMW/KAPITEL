//компонента кнопка для шапки
import React from "react";
import styles from "../../styles/Header_buuton.module.scss";
import PropTypes from "prop-types";

const button = ({ name }) => {
  return <button className={styles.button}>{name}</button>;
};
//валидация
button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default button;
