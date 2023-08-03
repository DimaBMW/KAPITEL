// компонента logo
import styles from "../../assets/styles/Logo.module.scss";
import React from "react";
import logoImage from "../../assets/img/Header/Logo2.0.svg";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoImage} alt="логотип" usemap="#home" />
    </div>
  );
}
export default Logo;
