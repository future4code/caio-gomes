import React from "react";
import style from "./style.module.css"

const AccountOptions = () => {
  return (
    <div className={style.container}>
      <p className={style.title}>Ver todos os vídeos</p>
      <p className={style.title}>Meus Vídeos</p>
      <p className={style.title}>Mudar Senha</p>
    </div>
  );
};

export default AccountOptions;
