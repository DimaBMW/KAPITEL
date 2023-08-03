import styles from "../../styles/Header.module.scss";
import Logo from "../../../../ui/logo";
import Text from "../../../../ui/text";
import Title from "../../../../ui/title.jsx";
import Link from "../../../../ui/Link";
import Headerbutton from "./Header_button.jsx";
import HeaderMenu from "./Header_menu.jsx";
import React, { useEffect, useRef, useState } from "react";
import Scroll from 'react-scroll';
import ProjectDerictories from "../ProjectDerictories/ProjectDerictories"
import WhyWe from "../WhyWe/WhyWe";

function Header() {
  // скроллер




  // основа
  const [isAnimationActive, setIsAnimationActive] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimationActive(true);
    }, 6000); // Установите желаемую задержку в миллисекундах

    // Очистка таймаута при размонтировании компонента
    return () => clearTimeout(timeout);
  }, []);
  return (
    <header id="header" className={styles.header}>
      <div className={styles.header_container}>
        <section className={styles.header_section}>
          <div className={styles.header_section__cols1}>
            <Logo />
            <div className={styles.header_menubox}>
              <HeaderMenu />
            </div>
          </div>
          <div className={styles.header_section__cols2}>
            <div className={styles.cols2_navigation}>
              <nav className={styles.navigation}>
                <ul className={styles.navigation_list}>
                  <li className={styles.navigation_item}>
                    <Link href="#ProjectDerictories" name="Проекты"/>
                  </li>
                  <li className={styles.navigation_item}>
                    <Link href="#whywe" name="О нас" />
                  </li>
                  <li className={styles.navigation_item}>
                    <Link href="#ProjectDerictories" name="Работы" />
                  </li>
                  <li className={styles.navigation_item}>
                    <Link href="#footer" name="Контакты" />
                  </li>
                </ul>
              </nav>
              <div className={styles.button_box}>
                <a href="#footer" className={styles.button_a}><Headerbutton name="Оставить заявку" /></a>
                <Link href="tel:+79891412808" name="+7 (989) 141-28-08" />
              </div>
            </div>
            <div className={styles.cols2_text}>
              <div className={styles.cols2_text__title}>
                <Title
                  className={
                    isAnimationActive
                      ? "title-isactive regular"
                      : "header__title regular"
                  }
                  level={1}
                  text="Архитектурно-проектная организация"
                />
                <Title
                  className={
                    isAnimationActive
                      ? "title-isactive extrabold"
                      : "header__title extrabold"
                  }
                  level={1}
                  text="КАПИТЕЛЬ — НАДЕЖНАЯ АРХИТЕКТУРА ПОЛНОГО ЦИКЛА"
                />
              </div>
              <Text
                className={isAnimationActive ? "text-isactive" : "header__text"}
                text="Создаем дома и коттеджи, которые жалко, но легко продавать Все
              виды типового и индивидуального проектирования под ключ"
                id="header_text"
              />
            </div>
          </div>
        </section>
        <aside className={styles.header_saitbar}>
          <div className={styles.saitbar_data}>
            <div className={styles.saitbar_information}>
              <a href="https://web.whatsapp.com/" className={styles.icons}>
                <svg
                  width="50"
                  className={styles.icon}
                  viewBox="0 0 76 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.56" className={styles.icons}>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M58.2762 17.8378C55.6426 15.1869 52.5092 13.085 49.0576 11.6538C45.6059 10.2225 41.9045 9.49047 38.1678 9.49997C22.4992 9.49997 9.74383 22.2521 9.7375 37.9271C9.7375 42.9368 11.0453 47.8261 13.5312 52.1391L9.5 66.8673L24.5702 62.9121C28.7387 65.1814 33.409 66.3712 38.1552 66.3733H38.1678C53.8333 66.3733 66.5887 53.6211 66.595 37.9461C66.6058 34.211 65.8761 30.5108 64.4482 27.0593C63.0204 23.6079 60.9226 20.4736 58.2762 17.8378ZM38.1678 61.5758H38.1583C33.9261 61.5762 29.7718 60.4376 26.1313 58.2793L25.27 57.7663L16.3273 60.1128L18.7118 51.395L18.1513 50.502C15.7852 46.735 14.5326 42.3756 14.5382 37.9271C14.5445 24.8995 25.1433 14.3006 38.1773 14.3006C41.2815 14.2937 44.3561 14.9026 47.2234 16.0919C50.0907 17.2812 52.6936 19.0273 54.8815 21.2293C57.0811 23.4208 58.8246 26.0265 60.0111 28.8958C61.1977 31.7651 61.8038 34.8412 61.7943 37.9461C61.788 50.9738 51.1892 61.5758 38.1678 61.5758ZM51.129 43.8773C50.4165 43.5195 46.9268 41.8031 46.2745 41.5656C45.6253 41.3281 45.1535 41.211 44.6785 41.9203C44.2035 42.6296 42.8418 44.2288 42.427 44.7038C42.0122 45.1788 41.5973 45.2358 40.888 44.8811C40.1787 44.5265 37.8892 43.776 35.1753 41.3566C33.0632 39.4725 31.6382 37.1481 31.2233 36.4356C30.8085 35.7231 31.179 35.34 31.5368 34.9853C31.8567 34.6686 32.2462 34.1556 32.6008 33.7408C32.9555 33.326 33.0727 33.0315 33.3102 32.5565C33.5477 32.0815 33.4305 31.6666 33.25 31.312C33.0727 30.9541 31.6508 27.4581 31.0587 26.0363C30.4855 24.6588 29.8997 24.8425 29.4627 24.8235C29.0101 24.805 28.5571 24.7965 28.1042 24.7981C27.744 24.8073 27.3896 24.8908 27.0632 25.0434C26.7368 25.196 26.4454 25.4143 26.2073 25.6848C25.555 26.3973 23.7215 28.1136 23.7215 31.6096C23.7215 35.1056 26.2675 38.4845 26.6222 38.9595C26.9768 39.4345 31.6318 46.607 38.7568 49.685C40.4542 50.4165 41.7778 50.8535 42.807 51.1828C44.5075 51.7243 46.056 51.6451 47.2815 51.4646C48.6463 51.262 51.4837 49.7483 52.0758 48.089C52.668 46.4296 52.668 45.0078 52.4907 44.7101C52.3133 44.4125 51.8352 44.232 51.129 43.8773Z"
                    />
                  </g>
                </svg>
              </a>
              <a href="https://mail.ru/">
                <svg
                  width="50"
                  className={styles.icon}
                  viewBox="0 0 76 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.56">
                    <path d="M63.332 12.6667H12.6654C10.9857 12.6667 9.37475 13.3339 8.18702 14.5217C6.99929 15.7094 6.33203 17.3203 6.33203 19V57C6.33203 58.6797 6.99929 60.2906 8.18702 61.4784C9.37475 62.6661 10.9857 63.3334 12.6654 63.3334H63.332C65.0117 63.3334 66.6226 62.6661 67.8104 61.4784C68.9981 60.2906 69.6654 58.6797 69.6654 57V19C69.6654 17.3203 68.9981 15.7094 67.8104 14.5217C66.6226 13.3339 65.0117 12.6667 63.332 12.6667ZM63.332 27.55L37.9987 44.441L12.6654 27.55V19.9405L37.9987 36.8284L63.332 19.9405V27.55Z" />
                  </g>
                </svg>
              </a>
              <a href="https://web.telegram.org" className={styles.icons}>
                <svg
                  width="50"
                  className={styles.icon}
                  viewBox="0 0 76 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.56">
                    <path d="M65.4405 11.7705L9.29552 33.421C5.46386 34.96 5.48603 37.0975 8.59253 38.0506L23.0072 42.5473L56.3585 21.5048C57.9355 20.5453 59.3764 21.0615 58.192 22.1128L31.1709 46.4993H31.1645L31.1709 46.5025L30.1765 61.3605C31.6332 61.3605 32.276 60.6923 33.093 59.9038L40.0945 53.0955L54.658 63.8526C57.3434 65.3315 59.2719 64.5715 59.94 61.3668L69.5002 16.3115C70.4787 12.388 68.0024 10.6115 65.4405 11.7705Z" />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}

export default Header;
