import React, { useEffect, useRef } from "react";
import styles from "./styles/SlaiderTest.scss";
import Glide from "@glidejs/glide";
import Title from "../components/ui/title";
import Text from "../components/ui/text";
import Images from "../components/ui/Image";

import img1 from "../assets/Icon/Whywe/disain.svg";
const Slaider = () => {
  const glideRef2 = useRef(null);

  useEffect(() => {
    const config = {
      type: "carousel",
      perView: 1,
      focusAt: "center",
      peek: {
        before: 50,
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
          <li class="glide__slide glide__slide--active">
            <div className="slaiderbox33">
              <div className="slaiderbox__icon">
                <Images src={img1} alt="картинка" />
              </div>
              <div className="slaiderbox__title">
                <Title
                  level={2}
                  className="swiper-title"
                  text="Проектирование домов и коттеджей"
                />
              </div>
              <div className="slaiderbox__text">
                <Text
                  className="swiper-text"
                  text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide">
            <div className="slaiderbox33">
              <div className="slaiderbox__icon">
                <Images src={img1} alt="картинка" />
              </div>
              <div className="slaiderbox__title">
                <Title
                  level={2}
                  className="swiper-title"
                  text="Проектирование домов и коттеджей"
                />
              </div>
              <div className="slaiderbox__text">
                <Text
                  className="swiper-text"
                  text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide">
            <div className="slaiderbox33">
              <div className="slaiderbox__icon">
                <Images src={img1} alt="картинка" />
              </div>
              <div className="slaiderbox__title">
                <Title
                  level={2}
                  className="swiper-title"
                  text="Проектирование домов и коттеджей"
                />
              </div>
              <div className="slaiderbox__text">
                <Text
                  className="swiper-text"
                  text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide">
            <div className="slaiderbox33">
              <div className="slaiderbox__icon">
                <Images src={img1} alt="картинка" />
              </div>
              <div className="slaiderbox__title">
                <Title
                  level={2}
                  className="swiper-title"
                  text="Проектирование домов и коттеджей"
                />
              </div>
              <div className="slaiderbox__text">
                <Text
                  className="swiper-text"
                  text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide">
            <div className="slaiderbox33">
              <div className="slaiderbox__icon">
                <Images src={img1} alt="картинка" />
              </div>
              <div className="slaiderbox__title">
                <Title
                  level={2}
                  className="swiper-title"
                  text="Проектирование домов и коттеджей"
                />
              </div>
              <div className="slaiderbox__text">
                <Text
                  className="swiper-text"
                  text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."
                />
              </div>
            </div>
          </li>
          <li class="glide__slide">
            <div className="slaiderbox33">
              <div className="slaiderbox__icon">
                <Images src={img1} alt="картинка" />
              </div>
              <div className="slaiderbox__title">
                <Title
                  level={2}
                  className="swiper-title"
                  text="Проектирование домов и коттеджей"
                />
              </div>
              <div className="slaiderbox__text">
                <Text
                  className="swiper-text"
                  text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."
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
            class="slider__bullet glide__bullet"
            data-glide-dir="=0"
          ></button>

          <button
            class="slider__bullet glide__bullet"
            data-glide-dir="=1"
          ></button>

          <button
            class="slider__bullet glide__bullet"
            data-glide-dir="=2"
          ></button>

          <button
            class="slider__bullet glide__bullet"
            data-glide-dir="=3"
          ></button>

          <button
            class="slider__bullet glide__bullet glide__bullet--active"
            data-glide-dir="=4"
          ></button>
        </div>
      </div>
    </div>
  );
};
export default Slaider;
