import React ,{useState,useEffect}from "react";
import styles from "../../styles/PostProjectSupport/ProjectSupportItem.scss";
import Text from "../../../../ui/text";
import Title from "../../../../ui/title";
import Image from "../../../../ui/Image";
import img1 from "../../../../../assets/Icon/ProjectSupport/Selector-white.svg";

const ProjectSupportItem = ({ className ,title,text}) => {
  const [divClass, setDivClass] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 2800 && !isClassAdded) {
      setIsVisible(true);
      setIsClassAdded(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (divClass === "") {
      setDivClass("select-active");
    } else {
      setDivClass("");
    }
  };
  const combinedClassName = `${styles.text} select select2 ${className}`;
  return (
    <div className="select__container">
      <div className={combinedClassName}>
        <button className="select-title-box" onClick={handleClick}>
          <Title className={`select-title-black ${isVisible ? "show" : ""}`} text={title}/>
          <div className="select-box-img">
            <Image className={`${divClass} select-img`} src={img1} alt="стрелка вправо" />
          </div>
        </button>
        <div  className={`${divClass} select-text__box`}>
          <Text  className={`${divClass} select-text-black`} text={text}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectSupportItem;