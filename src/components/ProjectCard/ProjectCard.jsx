import React, { useRef } from "react";
import styles from "./ProjectCard.scss";
import Image from "../ui/Image";
import Title from "../ui/title"
import Text from "../ui/text"

const ProjectCard = ({src,name,arcticul,text}) => {
  const cardRef = useRef(null);
  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const width = card.offsetWidth;
    const height = card.offsetHeight;

    const xVal = e.nativeEvent.offsetX;
    const yVal = e.nativeEvent.offsetY;

    const yRotation = 20 * ((xVal - width / 2) / (width + height));
    const xRotation = -20 * ((yVal - height / 2) / (height + width));

    const transformString = `perspective(500px) scale(1.1) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;

    card.style.transform = transformString;
  };
  const handleMouseOut = () => {
    cardRef.current.style.transform =
      "perspective(500px) scale(1) rotateX(0) rotateY(0)";
  };

  const handleMouseDown = () => {
    cardRef.current.style.transform =
      "perspective(500px) scale(0.9) rotateX(0) rotateY(0)";
  };

  const handleMouseUp = () => {
    cardRef.current.style.transform =
      "perspective(500px) scale(1.1) rotateX(0) rotateY(0)";
  };
  return (
    <div
      id="card"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{ position: "relative", zIndex: "2" }}
    >
        <Image className="projectcard__img" alt="картинка" src={src}/>
        <div className="card__content" data-ignore onMouseMove={(e) => e.stopPropagation()} style={{ pointerEvents: "none" }}>
          <Title className="card__title" level={1} text={name} data-ignore />
          <Title className="card__title2" level={3} text={arcticul} data-ignore/>
          <div className="card__textbox" data-ignore>
              <Text className="card__text" text={text} data-ignore/>
          </div>
        </div>
    </div>
  );
};

export default ProjectCard;
