// Компонента Link
import React from "react";
import styles from "../../assets/styles/Link.scss";
import Text from "./text";

const Link = ({ href, name ,color}) => {
  const Mycolor=color;
  return (
    <a href={href} className={`link ${Mycolor==='black'?'black':''}`}>
      {name}
    </a>
  );
};

export default Link;
