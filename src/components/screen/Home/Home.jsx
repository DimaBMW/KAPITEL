import Header from "./section/Header/Header";
import MainSaitBar from "./section/MainSaitBar/MainSaitBar";
import Preloader from "../../Preloader/Preloader";
import DesignStagesBlack from "./section/DisagnStages_Black/DisagnStagesBlack";
import PostProjectSupport from "./section/ProstProjectSupport/PostProjectSupport";
import ProjectDerictories from "./section/ProjectDerictories/ProjectDerictories";
import Partners from "./section/Partners/Partners";
import Quetions from "./section/Quetions/Quetions";
import Footer from "./section/Footer/Footer";
import HeaderMobile from "../Home_mobile/section/Header/Header_mobile";
import React, { useState, useEffect } from "react";
import WhyWeMobile from "../Home_mobile/section/WhyWe/WhyWe_mobile";
import DesignStagesMobile from "../Home_mobile/section/DesignStages/DesignStages_mobile";
import ProjectSupporMobile from "../Home_mobile/section/ProjectSupport/ProjectSupport_mobile";
import PartnersMObile from "../Home_mobile/section/Pathenrs/Partners_mobile";
import FooterMobile from "../Home_mobile/section/Footer/Footer_mobile";
import ProjectDerictoriesMobile from "../Home_mobile/section/ProjectDerictories/ProjectDerictories_mobile";

function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div>
      {windowWidth < 768.98 && <MobileContent />}
      {windowWidth >= 769 && <DesktopContent />}
    </div>
  );
}
const MobileContent = () => {
  return(
    <div>
        <HeaderMobile/>
        <WhyWeMobile/>
        <DesignStagesMobile/>
        <ProjectSupporMobile/>
        <ProjectDerictoriesMobile/>
        <PartnersMObile/>
        <FooterMobile/>
    </div>
  );
};

const DesktopContent = () => {
  return (
    <div>
      <Preloader />
      <Header />
      <MainSaitBar />
      <DesignStagesBlack />
      <PostProjectSupport />
      <ProjectDerictories />
      <Partners />
      <Quetions />
      <Footer />
    </div>
  );
};

export default Home;
