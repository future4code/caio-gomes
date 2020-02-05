import React from "react";
import google from "../../assets/google.svg";
import facebook from "../../assets/facebook.svg";
import style from "./style.module.css";

const Buttons = () => {
  return (
    <div>
      <form className={style.btnWrapper}>
        <button className={style.socialBtn}>
          <div className={style.btnSocialStyled}>
            <img src={google} className={style.svgLogo} />
            <span>Criar sua conta com Google</span>
          </div>
        </button>
        <button className={style.socialBtn}>
          <div className={style.btnSocialStyled}>
            <img src={facebook} className={style.svgLogo} />
            <span>Criar sua conta com Facebook</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Buttons;
