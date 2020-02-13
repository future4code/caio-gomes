import React from "react";
import style from "./style.module.css";
import { connect } from "react-redux";
import thumbUp from "../../assets/like.svg";
import thumbDown from "../../assets/dislike.svg";

const VideoCard = ({
  onClickVideo,
  title,
  description,
  url,
  photo,
  firstName,
  lastName
}) => {
  return (
    <div onClick={onClickVideo} className={style.container}>
      <video src={url} className={style.mediaSize} controls />
      <div className={style.textWrapper}>
        <p className={style.titleVideo}>{title}</p>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.footerContainer}>
        <div className={style.autorWrapper}>
          <img className={style.userPhoto} src={photo} />
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <div className={style.thumbsWrapper}>
          <img src={thumbUp} className={style.thumb} />
          <img src={thumbDown} className={style.thumb} />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    videos: state.videos.allVideos || []
  };
};

export default connect(mapStateToProps, null)(VideoCard);
