import React, { useState, useEffect } from 'react';
import styles from "../../styles/DisagnStagesBlack/DesignStagesBlack.module.scss";
import Title from "../../../../ui/title";
import Image from "../../../../ui/Image";
import Text from "../../../../ui/text";
import Button from "./DusagnStages_button";
import img1 from "../../../../../assets/img/DisagnStages/IMG_3.png";
import img2 from "../../../../../assets/img/DisagnStages/IMG_4.png";
import StickyBox from 'react-sticky-box';
const DesignStagesBlack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 1900 && !isClassAdded) {
      setIsVisible(true);
      setIsClassAdded(true);
    }
  };
  const handleScroll2 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 2200 && !isClassAdded2) {
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
            <div className={styles.main_content1}>
              <Title className="content__title-black" text="Этап 3" level={1} />
              <Image src={img1} alt="картинка 1" className="content__img" />
              <div className={styles.content_textbox}>
                <Title
                  className={`title__black ${isVisible ? "show" : ""}`}
                  level={2}
                  text="Рабочий проект, утрверждение полного пакета
                            чертежей"
                />
                <Text
                  className={`text__black ${isVisible ? "show" : ""}`}
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
              <Title
                className="content__title2-black"
                text="Этап 4"
                level={1}
              />
              <Image src={img2} alt="картинка 1" className="content__img" />
              <div className={styles.content_textbox}>
                <Title
                  className={`title__black ${isVisible2 ? "show" : ""}`}
                  text="Разделы инженерных систем"
                  level={2}
                />
                <Text
                  className={`text__black ${isVisible2 ? "show" : ""}`}
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
        <aside className={styles.asaide} >
          <StickyBox offsetTop={20} offsetBottom={20}>
            <Button className="bitton__ds" text="ОСТАВИТЬ ЗАЯВКУ" />
          </StickyBox>
        </aside>
      </div>
    </section>
  );
};

export default DesignStagesBlack;
