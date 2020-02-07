import React from "react";
import style from "./style.module.css";
import gaming from "../../assets/gaming.svg";

const VideoCard = () => {
  return (
    <div>
      <div className={style.container}>
        <img src={gaming} alt="Gaming" className={style.mediaSize} />
        <p className={style.titleVideo}>Titulo do video</p>
        <span className={style.autorName}>Por: Caio Gomes</span>
      </div>
    </div>
  );
};

export default VideoCard;
