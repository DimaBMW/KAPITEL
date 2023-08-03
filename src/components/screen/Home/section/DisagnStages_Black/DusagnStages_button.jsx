import React from "react";
import styles from "../../styles/DisagnStagesBlack/DesignStgages_bitton.scss";
import { BiRightArrowAlt } from "react-icons/bi";
import PropTypes from "prop-types";
import button from "../Header/Header_button";

const Button=({className,text})=>{
    const combinedClassName = `${styles.text} button ${className}`;
    return(
        <button className={combinedClassName} type="button">
            <a href="/"><BiRightArrowAlt className="icon"/></a>
            {text}
        </button>
    );
};

button.propTypes={
    className:PropTypes.string.isRequired,
    text:PropTypes.string.isRequired,
}

export default Button;