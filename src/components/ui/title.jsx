// компонента title
import React from "react";
import styles from '../../assets/styles/title.scss';
import PropTypes from 'prop-types';

const Title=({text,level,className})=>{
    //присвоение сторонних классов
    const combinedClassName=`${styles.title} title ${className}`;
    return(
        React.createElement(`h${level}`, { className: combinedClassName }, text)
    );
}
//валидация
Title.propTypes={
    text:PropTypes.string.isRequired,
    level:PropTypes.number.isRequired,
    className:PropTypes.string.isRequired,
};

export default Title;