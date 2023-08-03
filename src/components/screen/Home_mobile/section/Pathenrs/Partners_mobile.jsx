import React from "react";
import styles from "../../styles/Parthners/Parthners_mobile.module.scss";
import Title from "../../../../ui/title";
import Selector2 from "../../../../../Mobile_Components/Selector2_mobile";
import Text from "../../../../ui/text";
import Image from "../../../../ui/Image";
import img from "../../../../../assets/img/Mobile/Parthners/DomRU-black.svg";
const DesignStagesMobile = () => {
  return (
    <section className={styles.designstages} id="designstages">
      <div className={styles.designstages_container}>
        <div className={styles.designstages_container__titleBox}>
          <Title
            className="designmobile__title"
            level={1}
            text="C нами работают, нам доверяют"
          />
          <Text
            className="designmobile__text"
            text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У
            нас большой опыт в проектировании и 100 реализованных объектов."
          />
        </div>
        <div className={styles.designstages_container__imgBox}>
          <Image src={img} alt="логотип" className="parthenrs__mobile-img" />
          <Image src={img} alt="логотип" className="parthenrs__mobile-img" />
          <Image src={img} alt="логотип" className="parthenrs__mobile-img" />
          <Image src={img} alt="логотип" className="parthenrs__mobile-img" />
        </div>
        <div className={styles.designstages_container_box}>
          <div className={styles.designstages_container_box__selector}>
            <Selector2
              title="Знакомство и составление технического задания"
              text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."
            />
          </div>
        </div>
        <div className={styles.designstages_container_box}>
          <div className={styles.designstages_container_box__selector}>
            <Selector2
              title="Знакомство и составление технического задания"
              text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."
            />
          </div>
        </div>
        <div className={styles.designstages_container_box}>
          <div className={styles.designstages_container_box__selector}>
            <Selector2
              title="Знакомство и составление технического задания"
              text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."
            />
          </div>
        </div>
        <div className={styles.designstages_container_box}>
          <div className={styles.designstages_container_box__selector}>
            <Selector2
              title="Знакомство и составление технического задания"
              text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignStagesMobile;
