import React, { useState } from "react";
import Popup from "reactjs-popup";
import style from "./style.module.css";
import { changePassword } from "../../actions/auth";
import { connect } from "react-redux";
import { uploadVideo } from "../../actions/videos";

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
      trigger={<button className={style.button}> Upload Video </button>}
      modal
    >
      <div className={style.modal}>
        <div className={style.header}> Upload Video </div>
        <div className="content">
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
