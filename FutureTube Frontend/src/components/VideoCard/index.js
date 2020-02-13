import React from "react";
import style from "./style.module.css";
import { connect } from "react-redux";
import thumbUp from "../../assets/like.svg";
import thumbDown from "../../assets/dislike.svg";

const VideoCard = ({ onClickVideo, title, description, url, user }) => {
  return (
    <div onClick={onClickVideo} className={style.container}>
      <video src={url} className={style.mediaSize} controls />
      <div className={style.textWrapper}>
        <p className={style.titleVideo}>{title}</p>
        <p className={style.description}>{description}</p>
      </div>
      <div className={style.footerContainer}>
        <div className={style.autorWrapper}>
          <img className={style.userPhoto} src={user.photo} />
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
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
    user: state.auth.selectedUser
  };
};

export default connect(mapStateToProps, null)(VideoCard);
