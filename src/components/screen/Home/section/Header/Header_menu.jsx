import React, { useState } from "react";
import Title from "../../../../ui/title";
import styles from "../../styles/Header_menu.scss";

const Menu = () => {
  const [divClass, setDivClass] = useState("");

  const handleClick = () => {
    if (divClass === "") {
      setDivClass("is-active");
    } else {
      setDivClass("");
    }
  };
  return (
    <div className={`${divClass} hamburger`}>
      <button className="hamburger-btn" onClick={handleClick}></button>
      <div className="hamburger__container">
        <div className="hamburger__inner" />
        <div className="hamburger__hidden" />
      </div>
      <Title className="header-hamburger-title" level={1} text="МЕНЮ" />
    </div>
  );
};
export default Menu;
