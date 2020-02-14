import React, { Fragment, useState } from "react";
import Header from "../../components/Header";
import VideoTest from "../../assets/video.mp4";
import style from "./style.module.css";
import mokcimage from "../../assets/gaming.svg";

const VideoDetail = () => {
  const [expanded, setExpanded] = useState(false);
  const [videoInfo, setVideoInfo] = useState({
    title: "",
    description: ""
  });

  const handleInput = event => {
    const {
      target: { value, name }
    } = event;

    setVideoInfo({
      ...videoInfo,
      [name]: value
    });
  };

  console.log(videoInfo)

  const submitForm = event => {
    event.preventDefault();
  };

  const toogle = () => {
    setExpanded(!expanded);
  };

  return (
    <Fragment>
      <Header />
      <div className={style.container}>
        <div className={style.videoContainer}>
          <video
            className={style.videoOnScreen}
            src={VideoTest}
            controls
          ></video>
          <div className={style.videoTitleContainer}>
            <h1>Titulo do vídeo</h1>
            <h2>Descrição do vídeo</h2>
          </div>
          <div>
            <img src={mokcimage} className={style.autorPhoto} />
            <p>Nome do autor</p>
          </div>
        </div>
        <div className={style.videoOptions}>
          <button
            className={style.collapsibleButton}
            onClick={toogle}
            aria-expanded={expanded}
          >
            Opções do vídeo
          </button>
          {expanded ? (
            <form
              className={style.content}
              onChange={handleInput}
              onSubmit={submitForm}
            >
              <label>Editar Título</label>
              <input type="text" placeholder="Novo Título" name="title" />
              <label>Editar Descrição</label>
              <input
                type="text"
                placeholder="Nova Descrição"
                name="description"
              />
              <button>Confirmar</button>
            </form>
          ) : null}

          <p>Video</p>
          <p>editar titulo</p>
          <p>editar descrição</p>
          <p>apagar video</p>
        </div>
      </div>
    </Fragment>
  );
};

export default VideoDetail;
