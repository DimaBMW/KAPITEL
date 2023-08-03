import React from "react";
import styles from "../../styles/Partners/Partners.module.scss";
import Slaider from "../../../../Slaider/Slaider";
import Text from "../../../../ui/text";
import Title from "../../../../ui/title";

const Partners=()=>{
    return(
        <section className={styles.partners} id="partners">
            <div className={styles.partners_container}>
                <div className={styles.partners_container__textBox}>
                    <Title level={1} className="slaider__title" text="с нами работают, нам доверяют"/>
                    <Text className="slaider__text" text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."/> 
                </div>
                <div className={styles.partners_container__slaider}>
                    <Slaider/>
                </div>
            </div>
        </section>
    );
};

export default Partners;