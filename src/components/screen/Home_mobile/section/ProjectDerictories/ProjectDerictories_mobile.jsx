import React, { useState } from "react";
import styles from "../../styles/ProjectDerictories/ProjectDerictories_mobile.module.scss";
import Title from "../../../../ui/title";
import Text from "../../../../ui/text";
import Button from "../../../../ButtonMobile/Button";
import Sliader1 from "../../../../../Mobile_Components/SlaiderMobile_1";
import Slaider2 from "../../../../../Mobile_Components/SlaiderMobil_2";

const ProjectDerictoriesMobile = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);

  const handleButtonClick1 = () => {
    setIsActive1(true);
    setIsActive2(false);
    console.log("1");
  };

  const handleButtonClick2 = () => {
    setIsActive1(false);
    setIsActive2(true);
    console.log("2");
  };

  return (
    <section className={styles.ProjecrDR} id="ProjecrDR">
      <div className={styles.ProjecrDR_container}>
        <Title
          level={1}
          className="projectrd-title"
          text="Каталог реализованных проектов"
        />
        <div className={styles.ProjecrDR_container__text}>
          <Text
            className="projectrd-text"
            text="Ежегодно компания «Капитель» реализует от 50 крупных объектов
                    под ключ. Мы делаем индивидуальное проектирование за 30-45 дней,
                    включая этапы согласования."
          />
        </div>
      </div>
      <div className={styles.ProjecrDR_SlaidContainer}>
        <div className={styles.ProjecrDR_SlaidContainer__BtnContent}>
          <div className={styles.ProjecrDR_SlaidContainer__BtnCo} onClick={handleButtonClick1}>
            <Button name="Жилые" color="white"/>
          </div>
          <div className={styles.ProjecrDR_SlaidContainer__BtnCo1} onClick={handleButtonClick2}>
            <Button name="Коммерческие"color="white"/>
          </div>
        </div>
        <div
          className={`${styles.ProjecrDR_SlaidContainer__box1} ${
            isActive1 ? styles.activewww : ""
          }`}
        >
          <Sliader1 />
        </div>
        <div
          className={`${styles.ProjecrDR_SlaidContainer__box2} ${
            isActive2 ? styles.activewww : ""
          }`}
        >
          <Slaider2 />
        </div>
      </div>
    </section>
  );
};

export default ProjectDerictoriesMobile;
