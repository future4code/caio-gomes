import React from "react";
import style from "./style.module.css";
import { getAllVideos } from "../../actions/videos";
import { connect } from "react-redux";
import ModalPopup from "../ModalChangePassword";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import ModalForUploadVideo from "../ModalForUploadVideo";
import GridVideos from "../../containers/GridVideos";

const AccountOptions = ({ goToLogin, goToHome }) => {
  const logout = () => {
    window.localStorage.removeItem("token");
    goToLogin();
  };

  const getAllVideos = () => {
    goToHome()
  }

  return (
    <div className={style.container}>
      <p onClick={getAllVideos} className={style.title}>Ver todos os videos</p>
      <p className={style.title}>Meus videos</p>
      <ModalForUploadVideo/>
      <ModalPopup />
      <p className={style.title} onClick={logout}>
        Logout
      </p>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push(routes.login)),
  goToHome: () => dispatch(push(routes.home))
});

export default connect(null, mapDispatchToProps)(AccountOptions);
