import React, { useEffect, useRef } from "react";
import styles from "./Slaider.scss";
import Glide from "@glidejs/glide";
import Images from "../ui/Image";

import img1 from "../../assets/img/Slaider/DomRU.svg";
import img2 from "../../assets/img/Slaider/JUNIOR.svg";
import img3 from "../../assets/img/Slaider/MTC.svg";
import img4 from "../../assets/img/Slaider/ROSSETI.svg";
const Slaider = () => {
  const glideRef = useRef(null);

  useEffect(() => {
    const config = {
      type: "carousel",
      perView: 4,
      autoplay: 1000,
      gap: 340,
      focusAt: "center",
      animationDuration: 5000,
      hoverpause: false,
      animationTimingFunc: "linear",
    };

    if (glideRef.current) {
      new Glide(glideRef.current, config).mount();
    }
  }, []);

  return (
    <div className="glide" ref={glideRef}>
      <div data-glide-el="track" className="glide__track">
        <ul class="glide__slides 2">
          <li class="glide__slide2"  style={{ width: "115x" }}>
            <Images src={img1} alt="партнер" className="slide-img" />
          </li>
          <li class="glide__slide2">
            <Images src={img2} alt="партнер" className="slide-img" />
          </li>
          <li class="glide__slide2">
            <Images src={img3} alt="партнер" className="slide-img" />
          </li>
          <li class="glide__slide2">
            <Images src={img4} alt="партнер" className="slide-img" />
          </li>
          <li class="glide__slide2">
            <Images src={img1} alt="партнер" className="slide-img" />
          </li>
          <li class="glide__slide2">
            <Images src={img2} alt="партнер" className="slide-img" />
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Slaider;
