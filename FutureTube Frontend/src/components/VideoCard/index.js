import React from "react";
import style from "./style.module.css";
import gaming from "../../assets/gaming.svg";

const VideoCard = ({
  onClickVideo,
  title,
  description,
  url
}) => {
  return (
    <div onClick={onClickVideo} className={style.container}>
      <img src={gaming} alt="Gaming" className={style.mediaSize} />
      <p className={style.titleVideo}>{title}</p>
      <p className={style.titleVideo}>{description}</p>
    </div>
  );
};

export default VideoCard;
