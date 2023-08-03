// компонента Image
import React from "react";
import PropTypes from 'prop-types';
import styles from '../../assets/styles/Image.scss';

const Image=({src,alt,className})=>{
    // присвоение сторонних файлов
    const combinedClassName=`${styles.title} image ${className}`;
    return(
        <div className={combinedClassName}>
            <img src={src} alt={alt} />
        </div>
    );
};
// валидация
Image.propTypes={
    src:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired,
};
export default Image;