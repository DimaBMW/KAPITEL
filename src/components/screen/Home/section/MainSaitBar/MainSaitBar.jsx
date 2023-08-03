import React,{useEffect,useState} from "react";
import styles from "../../styles/MainSaitBar/MainSaitBar.module.scss";
import Title from "../../../../ui/title";
import WhyWe from "../WhyWe/WhyWe"
import DesignStages from "../DesignStages/DesignStages"; 
import SaitBarItem from "../../../../SaitBarItem/SaitBarItem";

import img1 from "../../../../../assets/img/SaitBar/IMG_1.png";
import img2 from "../../../../../assets/img/SaitBar/IMG_2.png";
import img3 from "../../../../../assets/img/SaitBar/IMG_3.png";
const Main_SaitBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  const [isClassAdded3, setIsClassAdded3] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 200 && !isClassAdded) {
      setIsVisible(true);
      setIsClassAdded(true);
    }
  };
  const handleScroll2 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 650 && !isClassAdded2) {
      setIsVisible2(true);
      setIsClassAdded2(true);
    }
  };
  const handleScroll3 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1100 && !isClassAdded3) {
      setIsVisible3(true);
      setIsClassAdded3(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    }
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll3);
    return () => {
      window.removeEventListener("scroll", handleScroll3);
    }
  }, []);
  return (
    <section className={styles.saitbar} id="saitbar">
      <div className={styles.saitbarcontainer}>
        <div className={styles.main_content}>
            <WhyWe/>
            <DesignStages/>
        </div>
        <div className={styles.saitbar_content}>
            <aside className={styles.sait_bar}>
                <div className={styles.sait_bar__title}>
                    <Title className="sait-bar__title" level={1} text="Последние проекты"/>
                </div>
                <SaitBarItem  className={`saitbar ${isVisible ? "show" : ""}`} src={img1} name="Лофт на берегу моря" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов." line={1}/>
                <SaitBarItem  className={`saitbar ${isVisible2 ? "show" : ""}`} src={img2} name="Альпийский стиль" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов." line={1}/>
                <SaitBarItem  className={`saitbar ${isVisible3 ? "show" : ""}`} src={img3} name="Лофт на берегу моря" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов." line={1}/>
            </aside>
        </div>
      </div>
    </section>
  );
};

export default Main_SaitBar;
