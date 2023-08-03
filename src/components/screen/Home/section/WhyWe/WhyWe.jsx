import React, { useState, useEffect } from "react";
import styles from "../../styles/WhyWe/WhyWe.module.scss";
import Title from "../../../../ui/title";
import Text from "../../../../ui/text";
import WhyWeItem from "./WhyWe_item";

import img1 from "../../../../../assets/Icon/Whywe/reconsrucii.svg";
import img2 from "../../../../../assets/Icon/Whywe/proekt.svg";
import img3 from "../../../../../assets/Icon/Whywe/korekting.svg";
import img4 from "../../../../../assets/Icon/Whywe/nadzor.svg";
import img5 from "../../../../../assets/Icon/Whywe/molotok.svg";
import img6 from "../../../../../assets/Icon/Whywe/disain.svg";
import Protactor from "../../../../Protactor/Protactor";
const WhyWe = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded, setIsClassAdded] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 200 && !isClassAdded) {
      setIsVisible(true);
      setIsClassAdded(true);
    }
  };
  const handleScroll2 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 400 && !isClassAdded2) {
      setIsVisible2(true);
      setIsClassAdded2(true);
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


  const className = `whywe-title ${isVisible ? "show" : ""}`;
  const className2 = `whyweitem__1 ${isVisible2 ? "show2" : ""}`;
  const className3 = `whyweitem__2 ${isVisible2 ? "show2" : ""}`;
  const className4 = `whyweitem__3 ${isVisible2 ? "show2" : ""}`;
  const className5 = `whyweitem__4 ${isVisible2 ? "show2" : ""}`;
  const className6 = `whyweitem__5 ${isVisible2 ? "show2" : ""}`;
  const className7 = `whyweitem__6 ${isVisible2 ? "show2" : ""}`;
  return (
    <section className={styles.whywe} id="whywe">
      <div className={styles.whywe_container}>
        <main className={styles.whywe_main}>
          <div className={styles.content_box}>
            <div className={styles.content_box_text}>
              <div className={styles.content_box__title}>
                <Title
                  className={className}
                  level={1}
                  text="Нет того, что нам не под силу — разработаем
                                проекты любой сложности"
                />
              </div>
              <div className={styles.content_box__text}>
                <Text
                  className={`content-box__text-1 ${isVisible ? "show" : ""}`}
                  text="Архитектурная студия «Капитель» занимается
                                проектированием капитальных строений и частных
                                домов в Краснодаре с 2017 года. За это время мы
                                отдали под реализацию более 300 проектов. В
                                работе демонстрируем высокую
                                клиентоориентированность, поэтому 9 из 10
                                заказов получаем по рекомендации."
                />
                <Text
                  className={`content-box__text-2 ${isVisible ? "show" : ""}`}
                  text="Доверяя свои проекты студии «Капитель», вы можете быть спокойны за качество, бюджет и сроки исполнения. У нас работают специалисты со стажем более 15 лет. Мы тщательно согласовываем каждый этап с заказчиком и все рутинные процессы берем на себя."
                />
              </div>
            </div>
            <div className={styles.content_box__black}>
              <div className={styles.box__black_container}>
                <WhyWeItem
                  className={className2}
                  src_icon={img2}
                  item_title="Проектирование домов"
                  item_text="Разрабытываем детально проработынные
                                        проекты комфортных домов в выбранном
                                        архитектурном стиле"
                />
                <WhyWeItem
                  className={className3}
                  src_icon={img3}
                  item_title="Корректировка проекта"
                  item_text="Корретировка проектной документации под
                  индивидуальные требования заказчика"
                />
                <WhyWeItem
                  className={className4}
                  src_icon={img4}
                  item_title="Авторский надзор"
                  item_text="Отслеживание сроков, качество работ,
                  закупаемых материалов"
                />
                <WhyWeItem
                  className={className5}
                  src_icon={img5}
                  item_title="Строительство"
                  item_text="Возводим из всех популярных материалов"
                />
                <WhyWeItem
                  className={className6}
                  src_icon={img6}
                  item_title="Дизайн интерьеров"
                  item_text="Корретировка проектной документации под
                  индивидуальные требования заказчика"
                />
                <WhyWeItem
                  className={className7}
                  src_icon={img1}
                  item_title="Реконструкция"
                  item_text="Корретировка проектной документации под
                  индивидуальные требования заказчика"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
      <Protactor/>
    </section>
  );
};

export default WhyWe;
