import React, { useEffect, useRef } from "react";
import styles from "./styles/SlaiderMobile_1.scss";
import Glide from "@glidejs/glide";
import Title from "../components/ui/title";
import Text from "../components/ui/text";
import Images from "../components/ui/Image";

import img1 from "../assets/img/ProjectCard/IMG_4.png";
const Slaider = () => {
  const glideRef2 = useRef(null);

  useEffect(() => {
    const config = {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      peek: {
        before: 41,
        after: 0,
      },
    };

    if (glideRef2.current) {
      new Glide(glideRef2.current, config).mount();
    }
  }, []);

  return (
    <div className="glide2" ref={glideRef2}>
      <div data-glide-el="track" className="glide__track2">
        <ul class="glide__slides">
          <li class="glide__slide2 glide__slide--active">
            <div className="slaiderbox">
                <div className="slaiderbox-img">
                    <Images src={img1} alt="картинка" className="slaider__img" />
                </div>
              <div className="slaiderbox-text">
                <div className="slaiderbox-text__title">
                  <Title
                    level={2}
                    className="swiper-title"
                    text="Объект П231"
                  />
                  <Title level={2} className="swiper-title" text="103.5 м2" />
                </div>
                <Text
                  className="swiper-text"
                  text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide2 glide__slide--active">
            <div className="slaiderbox">
                <div className="slaiderbox-img">
                    <Images src={img1} alt="картинка" className="slaider__img" />
                </div>
              <div className="slaiderbox-text">
                <div className="slaiderbox-text__title">
                  <Title
                    level={2}
                    className="swiper-title"
                    text="Объект П231"
                  />
                  <Title level={2} className="swiper-title" text="103.5 м2" />
                </div>
                <div className="slaiderbox-text__text">

                </div>
                <Text
                  className="swiper-text"
                  text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide2 glide__slide--active">
            <div className="slaiderbox">
                <div className="slaiderbox-img">
                    <Images src={img1} alt="картинка" className="slaider__img" />
                </div>
              <div className="slaiderbox-text">
                <div className="slaiderbox-text__title">
                  <Title
                    level={2}
                    className="swiper-title"
                    text="Объект П231"
                  />
                  <Title level={2} className="swiper-title" text="103.5 м2" />
                </div>
                <Text
                  className="swiper-text"
                  text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide2 glide__slide--active">
            <div className="slaiderbox">
                <div className="slaiderbox-img">
                    <Images src={img1} alt="картинка" className="slaider__img" />
                </div>
              <div className="slaiderbox-text">
                <div className="slaiderbox-text__title">
                  <Title
                    level={2}
                    className="swiper-title"
                    text="Объект П231"
                  />
                  <Title level={2} className="swiper-title" text="103.5 м2" />
                </div>
                <Text
                  className="swiper-text"
                  text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide2 glide__slide--active">
            <div className="slaiderbox">
                <div className="slaiderbox-img">
                    <Images src={img1} alt="картинка" className="slaider__img" />
                </div>
              <div className="slaiderbox-text">
                <div className="slaiderbox-text__title">
                  <Title
                    level={2}
                    className="swiper-title"
                    text="Объект П231"
                  />
                  <Title level={2} className="swiper-title" text="103.5 м2" />
                </div>
                <Text
                  className="swiper-text"
                  text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide2 glide__slide--active">
            <div className="slaiderbox">
                <div className="slaiderbox-img">
                    <Images src={img1} alt="картинка" className="slaider__img" />
                </div>
              <div className="slaiderbox-text">
                <div className="slaiderbox-text__title">
                  <Title
                    level={2}
                    className="swiper-title"
                    text="Объект П231"
                  />
                  <Title level={2} className="swiper-title" text="103.5 м2" />
                </div>
                <Text
                  className="swiper-text"
                  text="Архитектурная студия Капитель работает в Краснодаре с 1872 года. У нас большой опыт в проектировании и 100 реализованных объектов."
                />
              </div>
            </div>
          </li>
        </ul>
        <div
          class="slider__bullets glide__bullets"
          data-glide-el="controls[nav]"
        >
          <button
            class="slider__bullet2 glide__bullet"
            data-glide-dir="=0"
          ></button>

          <button
            class="slider__bullet2 glide__bullet"
            data-glide-dir="=1"
          ></button>

          <button
            class="slider__bullet2 glide__bullet"
            data-glide-dir="=2"
          ></button>

          <button
            class="slider__bullet2 glide__bullet"
            data-glide-dir="=3"
          ></button>

          <button
            class="slider__bullet2 glide__bullet glide__bullet--active"
            data-glide-dir="=4"
          ></button>
        </div>
      </div>
    </div>
  );
};
export default Slaider;
