// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import styles from "./styles/SlaiderMobail.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import Images from "../components/ui/Image"
import React, { useState, useEffect } from "react";
import Title from "../components/ui/title";
import Text from "../components/ui/text";
// Import Swiper styles
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";
// img
import img1 from "../assets/Icon/Whywe/disain.svg"
const Slaider = () => {
  return (
    <Swiper className="swiper"
      // install Swiper modules
      modules={[Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide className="swiper-slide swiper-slide-active">
            <div className="slaiderbox">
                <div className="slaiderbox__icon">
                  <Images src={img1} alt="картинка"/>
                </div>
                <div className="slaiderbox__title">
                  <Title level={2} className="swiper-title" text="Проектирование домов и коттеджей"/>
                </div>
                <div className="slaiderbox__text">
                  <Text className="swiper-text" text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox">
                <div className="slaiderbox__icon">
                  <Images src={img1} alt="картинка"/>
                </div>
                <div className="slaiderbox__title">
                  <Title level={2} className="swiper-title" text="Проектирование домов и коттеджей"/>
                </div>
                <div className="slaiderbox__text">
                  <Text className="swiper-text" text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox">
                <div className="slaiderbox__icon">
                  <Images src={img1} alt="картинка"/>
                </div>
                <div className="slaiderbox__title">
                  <Title level={2} className="swiper-title" text="Проектирование домов и коттеджей"/>
                </div>
                <div className="slaiderbox__text">
                  <Text className="swiper-text" text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox">
                <div className="slaiderbox__icon">
                  <Images src={img1} alt="картинка"/>
                </div>
                <div className="slaiderbox__title">
                  <Title level={2} className="swiper-title" text="Проектирование домов и коттеджей"/>
                </div>
                <div className="slaiderbox__text">
                  <Text className="swiper-text" text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide ">
            <div className="slaiderbox">
                <div className="slaiderbox__icon">
                  <Images src={img1} alt="картинка"/>
                </div>
                <div className="slaiderbox__title">
                  <Title level={2} className="swiper-title" text="Проектирование домов и коттеджей"/>
                </div>
                <div className="slaiderbox__text">
                  <Text className="swiper-text" text="В наших проектах продумано все до мелочей — ни одна потребность клиента не остается незамеченной."/>
                </div>
            </div>
        </SwiperSlide>
    </Swiper>
  );
};

export default Slaider;
