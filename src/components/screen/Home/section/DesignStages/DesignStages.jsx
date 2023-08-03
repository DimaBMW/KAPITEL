import React, { useEffect, useState } from "react";
import styles from "../../styles/DesignStages/DesignStages.module.scss";
import Title from "../../../../ui/title";
import Image from "../../../../ui/Image";
import Text from "../../../../ui/text";
import img1 from "../../../../../assets/img/DisagnStages/IMG_1.png";
import img2 from "../../../../../assets/img/DisagnStages/IMG_2.png";
const DesignStages = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 800 && !isClassAdded) {
      setIsVisible(true);
      setIsClassAdded(true);
    }
  };
  const handleScroll2 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1300 && !isClassAdded2) {
      setIsVisible2(true);
      setIsClassAdded2(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);
  return (
    <section className={styles.designstages} id="designstages">
      <div className={styles.designstages_container}>
        <main className={styles.designstages_main}>
          <div className={styles.main_container}>
            <Title
              className={`designstages__title ${isVisible ? "show" : ""}`}
              text="Этапы проектирования"
            />
            <div className={styles.main_content1}>
              <Title className="content__title" text="Этап 1" level={1} />
              <Image src={img1} alt="картинка 1" className="content__img" />
              <div className={styles.content_textbox}>
                <Title
                  className={`textbox__title ${isVisible ? "show" : ""}`}
                  text="Знакомство и составление технического задания"
                  level={2}
                />
                <Text
                  className={`textbox__text ${isVisible ? "show" : ""}`}
                  text="Обсуждаем объем работы: состав и размеры
                                помещений, конструктивные особенности, толщину и
                                материал стен, внешний вид будущего строения и
                                наличие дополнительных сооружений."
                />
              </div>
            </div>
            <div className={styles.main_content2}></div>
          </div>
          <div className={styles.main_container2}>
            <div className={styles.main_content1}>
              <Title className="content__title2" text="Этап 2" level={1} />
              <Image src={img2} alt="картинка 1" className="content__img" />
              <div className={styles.content_textbox}>
                <Title
                  className={`textbox__title ${isVisible2 ? "show" : ""}`}
                  text="Эскизный проект, подготовка предварительных
                                архитектурных чертежей"
                  level={2}
                />
                <Text
                  className={`textbox__text ${isVisible2 ? "show" : ""}`}
                  text="На этом этапе переносим задумки в
                                документальный формат — прорисовываем планировку
                                будущего дома, детально прорабатываем фасады и
                                определяем расположение дома на участке с учетом
                                сторон света согласно СНиП."
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default DesignStages;
