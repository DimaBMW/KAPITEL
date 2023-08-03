import React ,{useState,useEffect}from "react";
import styles from "./styles/Selector2Mobile.scss";
import Text from "../components/ui/text";
import Title from "../components/ui/title";
import Image from "../components/ui/Image";
import img1 from "../assets/Icon/ProjectSupport/selector.svg";

const ProjectSupportItem = ({ className ,title,text}) => {
  const [divClass, setDivClass] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);


  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 2600 && !isClassAdded) {
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
  const combinedClassName = `${styles.text} select22 select32 ${className}`;
  return (
    <div className="select__container22">
      <div className={combinedClassName}>
        <button className="select-title-box22" onClick={handleClick}>
          <Title className={`select-title__mobile2 ${isVisible ? "show" : ""}`} text={title}/>
          <div className="select-box-img22">
            <Image className={`${divClass} select-img`} src={img1} alt="стрелка вправо" />
          </div>
        </button>
        <div  className={`${divClass} select-text__box22`}>
          <Text  className={`${divClass} select-text__mobile2`} text={text}/>
        </div>
      </div>
    </div>
  );
};

export default ProjectSupportItem;
