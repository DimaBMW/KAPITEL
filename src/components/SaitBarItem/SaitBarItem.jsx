import React,{useState,useEffect} from "react";
import styles from "./SaitBarItem.scss";
import Image from "../ui/Image";
import Title from "../ui/title";
import Text from "../ui/text";
import img1 from "../../assets/img/SaitBar/IMG_1.png";

const SaitBarItem = ({ src,name, text, line, className }) => {
    const combinedClassName = `${className} saitbar-content`;
    return (
      <div className={combinedClassName}>
        <Image className="saitbar__img" src={src} alt="иконка сайтбара" />
        <Title className="siatbar__title" text={name} level={2} />
        <Text className="saitbar__text" text={text} />
        {line === 1 && <div className="saitbar-line"></div>}
      </div>
    );
  };

export default SaitBarItem;