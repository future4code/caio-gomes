import React from "react";
import style from "./style.module.css";
import { getAllVideos, getUserVideos } from "../../actions/videos";
import { connect } from "react-redux";
import ModalPopup from "../ModalChangePassword";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import ModalForUploadVideo from "../ModalForUploadVideo";

const AccountOptions = ({ goToLogin, getAllVideos, getUserVideos }) => {
  const logout = () => {
    window.localStorage.removeItem("token");
    goToLogin();
  };

  return (
    <div className={style.container}>
      <p onClick={getAllVideos} className={style.title}>
        Ver todos os vídeos
      </p>
      <p onClick={getUserVideos} className={style.title}>
        Meus vídeos
      </p>
      <ModalForUploadVideo />
      <ModalPopup />
      <p className={style.title} onClick={logout}>
        Logout
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push(routes.login)),
  getUserVideos: () => dispatch(getUserVideos()),
  getAllVideos: () => dispatch(getAllVideos())
});

export default connect(null, mapDispatchToProps)(AccountOptions);
