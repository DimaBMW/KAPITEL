import React,{useState,useEffect} from "react";
import styles from "../../styles/ProjectDerictories/ProjectDerictories.module.scss";
import Title from "../../../../ui/title";
import Text from "../../../../ui/text";
import ProjectCard from "../../../../ProjectCard/ProjectCard";
import ProjectDerictButton from "./Button/ProjectDerict_Button";

import img1 from "../../../../../assets/img/ProjectCard/IMG_3.png";
import img2 from "../../../../../assets/img/ProjectCard/IMG_2.png";
import img3 from "../../../../../assets/img/ProjectCard/IMG_4.png";
import img4 from "../../../../../assets/img/ProjectCard/IMG_5.png";
import img5 from "../../../../../assets/img/ProjectCard/IMG_6.png";
import img6 from "../../../../../assets/img/ProjectCard/IMG_7.png";
import img7 from "../../../../../assets/img/ProjectCard/IMG_8.png";


const ProjectDerictories=()=>{
    const [isVisible, setIsVisible] = useState(false);
    const [isClassAdded, setIsClassAdded] = useState(false);
  
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 3200 && !isClassAdded) {
        setIsVisible(true);
        setIsClassAdded(true);
      }
    };
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      }
    }, []);

    return(
        <section className={styles.ProjectDerictories} id="ProjectDerictories">
            <div className={styles.ProjectDerictories_container}>
                <div className={styles.ProjectDerictories_container__titleCont}>
                    <div className={styles.ProjectDerictories_container__titleCont_cols1}></div>
                    <div className={styles.ProjectDerictories_container__titleCont_cols2}>
                        <Title className={`projectderictories__title ${isVisible ? "show" : ""}`} text="Каталог реализованных проектов" level={1}/>
                        <div className={styles.ProjectDerictories_container__titleCont_cols2_text}>
                            <Text className={`projectderictories__text ${isVisible ? "show" : ""}`} text="Ежегодно компания «Капитель» реализует от 50
                                крупных объектов под ключ. Мы делаем индивидуальное
                                проектирование за 30-45 дней, включая этапы
                                согласования."/>
                        </div>
                    </div>
                </div>
                <div className={styles.ProjectDerictories_container__CardCont}>
                        <div className={styles.card_rows1__container}>
                            <Title className="card-rows1__title" text="Место для вашего дома" level={2}/>
                            <Text className="card-rows1__text" text="жилые помещения"/>
                        </div>
                        <ProjectCard src={img1} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <ProjectCard src={img2} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <ProjectCard src={img3} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <ProjectCard src={img4} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <ProjectCard src={img5} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <ProjectCard src={img6} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <ProjectCard src={img7} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <ProjectCard src={img5} name="M762" arcticul="428 М2" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/>
                        <div className={styles.card_rows2__container}>
                            <ProjectDerictButton name="Смотреть еще"/>
                        </div>
                </div>
            </div>
        </section>
    );
};
 
export default ProjectDerictories;