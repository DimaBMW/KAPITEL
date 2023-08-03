import React from "react";
import styles from "../../styles/DesignStages/DesignStages_mobile.module.scss"
import Title from "../../../../ui/title";
import Image from "../../../../ui/Image";
import img from "../../../../../assets/img/DisagnStages/IMG_1.png"
import Selector from "../../../../../Mobile_Components/Selector_mobile"
import Button from "../../../../ButtonMobile/Button";

const DesignStagesMobile=()=>{
    return(
        <section className={styles.designstages} id="designstages">
            <div className={styles.designstages_container}>
                <div className={styles.designstages_container__titleBox}>
                    <Title className="designmobile__title" level={1} text="4 этапа проектирования — от эскиза до реализации"/>
                </div>
                <div className={styles.designstages_container_box}>
                    <Image src={img} alt="картина" className="designmobile__img"/>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector  className="selectorr" title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                <div className={styles.designstages_container_box}>
                    <Image src={img} alt="картина" className="designmobile__img"/>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector  className="selectorr2" title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                <div className={styles.designstages_container_box}>
                    <Image src={img} alt="картина" className="designmobile__img"/>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector  className="selectorr3" title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                <div className={styles.designstages_container_box}>
                    <Image src={img} alt="картина" className="designmobile__img"/>
                    <div className={styles.designstages_container_box__selector}>
                        <Selector  className="selectorr4" title="Знакомство и составление технического задания" text="В соответствии с нормативно-правовыми актами поможем использовать неразграниченный земельный участок под любые элементы благоустройства территории и малые архитектурные формы (кроме некапитальных строений и рекламных конструкций, являющихся частью благоустройства территории)."/>
                    </div>
                </div>
                <diV className={styles.btn_box}>
                    <Button name="Оставить заявку" color="black"/>
                </diV>
            </div>
        </section>
    );
};

export default DesignStagesMobile;