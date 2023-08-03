import React from "react";
import styles from "../../styles/ProjectSupport/ProjectSupport_mobile.module.scss"
import Title from "../../../../ui/title";
import Image from "../../../../ui/Image";
import img from "../../../../../assets/img/DisagnStages/IMG_1.png"
import Selector2 from "../../../../../Mobile_Components/Selector2_mobile"
import Button from "../../../../ButtonMobile/Button";

const DesignStagesMobile=()=>{
    return(
        <section className={styles.designstages} id="designstages">
            <div className={styles.designstages_container}>
                <div className={styles.designstages_container__titleBox}>
                    <Title className="designmobile__title" level={1} text="Постпроектное сопровождение объекта"/>
                </div>
                <div className={styles.designstages_container_box}>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector2 title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                <div className={styles.designstages_container_box}>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector2   title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                <div className={styles.designstages_container_box}>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector2  title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                <div className={styles.designstages_container_box}>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector2   title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                    <Button name="все услуги" color="black"/>
            </div>
        </section>
    );
};

export default DesignStagesMobile;