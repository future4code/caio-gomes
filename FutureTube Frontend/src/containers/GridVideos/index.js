import React from "react";
import style from "./style.module.css";
import VideoCard from "../../components/VideoCard";
import { connect } from "react-redux";
import { getVideoDetail } from "../../actions/videos";

const GridVideos = props => {
  const clickOnVideo = videoId => {
    props.getVideoId(videoId);
  };

  return (
    <div className={style.container}>
      <div className={style.videoWrapper}>
        {props.listOfAllVideos &&
          props.listOfAllVideos.map(video => {
            return (
              <VideoCard
                key={video.videoId}
                onClickVideo={() => clickOnVideo(video.videoId)}
                url={video.url}
                title={video.title}
                description={video.description}
              />
            );
          })}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    listOfAllVideos: state.videos.allVideos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getVideoId: videoId => dispatch(getVideoDetail(videoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GridVideos);
