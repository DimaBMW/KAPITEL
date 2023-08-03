import React,{useState} from "react";
import styles from "./styles/BurgerMobile.scss";

const BurgerMobile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const open=()=>{
    setOpenMenu(!openMenu);
  };

  return (
    <div id="nav-icon1" className={openMenu ? 'open' : ''}>
      <span></span>
      <span></span>
      <span></span>
      <button className="hamburger-btn" onClick={open}/>
    </div>
  );
};

export default BurgerMobile;
