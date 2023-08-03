import React from "react";
import styles from "../../styles/WhyWe/WhyWe_mobile.module.scss";
import Title from "../../../../ui/title";
import Text from "../../../../ui/text";
import Slaider from "../../../../../Mobile_Components/SlaiderMobile";
import SlaiderTest from "../../../../../Mobile_Components/SlaiderTest";

const WhyWeMobile = () => {
  return (
    <section className={styles.whywe} id="whywe">
      <div className={styles.whywe_container}>
        <div className={styles.whywe_container_TextContent}>
          <Title
            className="whywe__mobile-title"
            level={1}
            text="Нет того, что нам не под силу — разработаем проекты любой
                сложности"
          />
          <Text
            className="whywe__mobile-text"
            text="Архитектурная студия «Капитель» занимается проектированием
                капитальных строений и частных домов в Краснодаре с 2017 года.
                За это время мы отдали под реализацию более 300 проектов. В
                работе демонстрируем высокую клиентоориентированность, поэтому 9
                из 10 заказов получаем по рекомендации."
          />
          <Text
            className="whywe__mobile-text"
            text="Доверяя свои проекты студии «Капитель», вы можете быть спокойны
            за качество, бюджет и сроки исполнения. У нас работают
            специалисты со стажем более 15 лет. Мы тщательно согласовываем
            каждый этап с заказчиком и все рутинные процессы берем на себя."
          />
        </div>
      </div>
      {/* <Slaider/> */}
      <SlaiderTest/>
    </section>
  );
};

export default WhyWeMobile;
