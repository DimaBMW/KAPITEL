import React from "react";
import styles from "./Button.scss"

const Button=({name,color,className})=>{
    const Mycolor=color;
    return(
        <button className={`buttonMobile ${Mycolor==='black'?'black':''}`}>
            {name}
        </button>
    );
};

export default Button;
