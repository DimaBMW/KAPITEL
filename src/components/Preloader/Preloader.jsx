import React, { useEffect } from "react";
import { preLoaderAnim } from "../../animation";
import Image from "../ui/Image";
import './Preloader.scss'
import Img1 from "../../assets/Icon/Preloader/opruch.svg"
import Img2 from "../../assets/Icon/Preloader/bukva.svg"
const Preloader = ()=>{
    useEffect(()=>{
        preLoaderAnim();
    },[]);

    return(
        <div className="preloader">
            <div className="ic">
                <div className="icon-container">
                    <Image className="icon-container__img" src={Img1} alt="оболочка"/>
                </div>
                <div className="icon-container1">
                    <Image className="icon-container__img1" src={Img2} alt="оболочка"/>
                </div>
            </div>
            <div className="texts-container">
                <span>Архитектурно</span>
                <span>-</span>
                <span>проектная</span>
                <span>организация</span>
            </div>
            <div className="texts-container cont__2">
                <span className="name">КАПИТЕЛЬ</span>
            </div>
        </div>
    );
}
export default Preloader;