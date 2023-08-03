import React, { useEffect, useState } from "react";
import styles from "./Protactor.scss";
import Image from "../ui/Image";
import img1 from "../../assets/img/Protacor/transportir30.svg";
import img2 from "../../assets/img/Protacor/transportirceluyctnter.svg";
import img3 from "../../assets/img/Protacor/transportiroartosnova.svg";
import img4 from "../../assets/img/Protacor/transportiroartcenter.svg";
const Protactor = ({ classMain }) => {
  const [y, setY] = useState(0);

  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isClassAdded2, setIsClassAdded2] = useState(false);
  const handleAnimationEnd = () => {
    setIsVisible(true);
  };

  const handleScroll2 = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 400 && !isClassAdded2) {
      setIsVisible2(true);
      setIsClassAdded2(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const combinedClassName = `${styles.text} texts ${classMain}`;
  return (
    <div className={`protactor-container  ${combinedClassName}`}>
      <div className="whywe-img-main-container">
        <div
          className={`whywe-img-container ${isVisible ? "show" : ""}`}
          style={{ transform: `rotate(${y / 20}deg)` }}
        >
          <Image src={img1} alt="транпортир" className="protacor__img1" />
        </div>
        <div
          className={`whywe-img-container-2 ${isVisible ? "show" : ""}`}
          style={{ transform: `rotate(${-y / 20}deg)` }}
        >
          <Image src={img2} alt="транпортир" className="protacor__img2" />
        </div>
      </div>
      <div className="whywe-img-main-container-2">
        <div
          className={`whywe-img-container-3 ${isVisible2 ? "show" : ""} ${
            isVisible ? "no-show" : ""
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          <Image src={img3} alt="транпортир" className="protacor__img3" />
        </div>
        <div
          className={`whywe-img-container-4 ${isVisible2 ? "show" : ""} ${
            isVisible ? "no-show" : ""
          }`}
          onAnimationEnd={handleAnimationEnd}
        >
          <Image src={img4} alt="транпортир" className="protacor__img4" />
        </div>
      </div>
      <svg
        width="640"
        height="480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="svg-transport"
      >
        <g className="layer">
          <title>Layer 1</title>
          <line
            fill="none"
            id="svg_5"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke="#000000"
            strokeWidth="0.5px"
            x1="145.5"
            x2="464.5"
            y1="361.5"
            y2="134.5"
          />
        </g>
      </svg>
      <svg
        width="640"
        height="480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        className="svg-transport-2"
      >
        <g class="layer">
          <title>Layer 1</title>
          <line
            fill="none"
            id="svg_5"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke="#000000"
            stroke-width="0.5"
            x1="145.5"
            x2="464.5"
            y1="361.5"
            y2="134.5"
          />
        </g>
      </svg>
      <svg
        width="640"
        height="480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        className="svg-transport-3"
      >
        <g class="layer">
          <title>Layer 1</title>
          <line
            fill="none"
            id="svg_5"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke="#000000"
            stroke-width="0.5"
            x1="145.5"
            x2="464.5"
            y1="361.5"
            y2="134.5"
          />
        </g>
      </svg>
      <svg
        width="640"
        height="480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        className="svg-transport-4"
      >
        <g class="layer">
          <title>Layer 1</title>
          <line
            fill="none"
            id="svg_5"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke="#000000"
            stroke-width="0.5"
            x1="145.5"
            x2="464.5"
            y1="361.5"
            y2="134.5"
          />
        </g>
      </svg>
      <svg
        width="640"
        height="480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        class="svg-transport-5"
      >
        <g class="layer">
          <title>Layer 1</title>
          <line
            fill="none"
            id="svg_5"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke="#000000"
            stroke-width="0.5"
            x1="145.5"
            x2="464.5"
            y1="361.5"
            y2="134.5"
          />
        </g>
      </svg>
      <svg
        width="640"
        height="480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        className="svg-transport-6"
      >
        <g class="layer">
          <title>Layer 1</title>
          <line
            fill="none"
            id="svg_3"
            stroke="#000000"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke-width="0.5"
            x1="125.5"
            x2="349.5"
            y1="305.5"
            y2="109.5"
          />
          <line
            fill="none"
            id="svg_4"
            stroke="#000000"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke-width="0.5"
            x1="348.5"
            x2="407.5"
            y1="110.5"
            y2="182.5"
          />
          <line
            fill="none"
            id="svg_5"
            stroke="#000000"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke-width="0.5"
            x1="407.5"
            x2="138.5"
            y1="181.5"
            y2="320.5"
          />
        </g>
      </svg>
      <svg
        width="640"
        height="480"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/2000/svg"
        className="svg-transport-7"
      >
        <g class="layer">
          <title>Layer 1</title>
          <line
            fill="none"
            id="svg_3"
            stroke="#000000"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke-width="0.5"
            x1="125.5"
            x2="349.5"
            y1="305.5"
            y2="109.5"
          />
          <line
            fill="none"
            id="svg_4"
            stroke="#000000"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke-width="0.5"
            x1="348.5"
            x2="407.5"
            y1="110.5"
            y2="182.5"
          />
          <line
            fill="none"
            id="svg_5"
            stroke="#000000"
            className={`line-one ${isVisible ? "show" : ""}`}
            stroke-width="0.5"
            x1="407.5"
            x2="138.5"
            y1="181.5"
            y2="320.5"
          />
        </g>
      </svg>
    </div>
  );
};
export default Protactor;
