// компонента logo
import styles from "./styles/Logo_mobile.scss";
import React from "react";
import logoImage from "../assets/img/Mobile/Header/Logo_Mobile20.svg";

function Logo() {
  return (
    <div className={styles.logo}>
      <img src={logoImage} alt="логотип" usemap="#home" />
    </div>
  );
}
export default Logo;