import React, { useState } from "react";
import style from "./style.module.css";
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <div>
      <header className={style.headerWrapper}>
        <img className={style.logoImg} src={logo} alt="logo"/>
      </header>
    </div>
  );
};

export default Header;
