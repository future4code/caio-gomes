import React from "react";
import madruga from "../../assets/seu-madruga.jpeg";
import style from "./style.module.css";

const UserCard = () => {
  return (
    <div className={style.container}>
      <img src={madruga} className={style.userPhoto} />
      <div className={style.nameWrapper}>
        <p className={style.userName}>Caio</p>
        <p className={style.userName}>Gomes</p>
      </div>
		</div>
  );
};

export default UserCard;
