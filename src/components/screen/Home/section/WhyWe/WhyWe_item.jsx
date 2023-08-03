// компонента WhyWeitem
import React from "react";
import styles from "../../styles/WhyWe/WhyWe_item.scss";
import Image from "../../../../ui/Image";
import Title from "../../../../ui/title";
import Text from "../../../../ui/text";

const WhyWeItem=({src_icon,className,item_title,item_text})=>{
    // присвоение сторонних файлов
    const combinedClassName=`${styles.title} item-content ${className}`;
    const combinedClassName2=`${styles.title} item-content__text ${className}`;
    const cddc=`${className}`;
    return(
        <div className="item-content">
            <div className="item-content__icon">
                <Image src={src_icon} alt="иконка" className="whuitem__img"/>
            </div>
            <div className={`item-content__text ${cddc}`}>
                <Title level={1} className={combinedClassName} text={item_title}/>
                <Text className={`item__text ${combinedClassName}`} text={item_text}/>
            </div>
        </div>
    );
};
// валидация
export default WhyWeItem;