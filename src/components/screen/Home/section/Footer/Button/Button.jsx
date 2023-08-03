import React from "react";
import styles from "./Button.scss";

const Button = ({ name }) => {
  return (
    <div class="button-container-2">
      <span class="mas">{name}</span>
      <button type="button" name="Hover">
        {name}
      </button>
    </div>
  );
};

export default Button;
