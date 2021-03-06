import React, { useState } from "react";
import Popup from "reactjs-popup";
import style from "./style.module.css";
import { connect } from "react-redux";
import { uploadVideo } from "../../actions/videos";
import gaming from "../../assets/gaming.svg";
import videographer from "../../assets/videographer.svg";
import influencer from "../../assets/influencer.svg";
import closeIcon from "../../assets/fechar.svg";

const ModalUploadVideo = props => {
  const [uploadVideo, setUploadVideo] = useState({
    title: "",
    description: "",
    url: ""
  });
  const [error, setError] = useState("");

  const onSubmitUpload = event => {
    event.preventDefault();
    const { title, description, url } = uploadVideo;

    props.upload(title, description, url);
  };

  const handleInput = event => {
    event.preventDefault();
    const {
      target: { value, name }
    } = event;
    setUploadVideo({
      ...uploadVideo,
      [name]: value
    });
  };

  return (
    <Popup
      trigger={<button className={style.button}> Upload vídeo </button>}
      modal
    >
      {close => (
        <div className={style.modal}>
          <div>
            <img src={closeIcon} className={style.close} onClick={close} />
          </div>
          <div className={style.header}>
            <h3 className={style.titleUpload}>Faça o upload de um vídeo</h3>
            <p className={style.descriptionUpload}>
              Compartilhe algo com o mundo
            </p>
          </div>
          <div className={style.svgWrapper}>
            <img className={style.imageSvg} src={gaming} />
            <img className={style.imageSvg} src={videographer} />
            <img className={style.imageSvg} src={influencer} />
          </div>
          <div className={style.content}>
            <form
              className={style.passwordForm}
              onSubmit={onSubmitUpload}
              onChange={handleInput}
            >
              <input
                className={style.textInput}
                type="text"
                name={"title"}
                id="title"
                placeholder="Titulo do video"
                required
              />
              <input
                className={style.textInput}
                type="text"
                name={"description"}
                id="description"
                placeholder="Descrição do video"
                required
              />
              <input
                className={style.textInput}
                type="text"
                name={"url"}
                id="url"
                placeholder="Url do video"
                required
              />
              <button type="submit" className={style.btnConfirm}>
                Upload
              </button>
            </form>
            <p>{error}</p>
          </div>
        </div>
      )}
    </Popup>
  );
};

const mapStateToProps = state => {
  return {
    successMessage: state.auth.successMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    upload: (title, description, url) =>
      dispatch(uploadVideo(title, description, url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUploadVideo);
