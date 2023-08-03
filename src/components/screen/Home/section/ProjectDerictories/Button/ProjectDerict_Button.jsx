import React from "react";
import styles from "./ProjectDerict_Button.scss";

const ProjectDerictButton = ({name}) => {
  return (
    <div class="data-container">
      <span class="btn">
        {name}
      </span>
    </div>
  );
};

export default ProjectDerictButton;
