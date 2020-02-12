import React, { useEffect } from "react";
import FeedContent from "../../containers/FeedContent/home";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getAllVideos } from "../../actions/videos";
import Header from "../../components/Header";
import style from "./style.module.css";
import { getUser } from "../../actions/auth";

const Home = props => {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      props.goToLogin();
    }
    props.getAllVideos();
    props.getUser(token)
  }, []);

  return (
    <div className={style.container}>
      <Header />
      <FeedContent />
    </div>
  );
};

const mapDispatchToprops = dispatch => ({
  getAllVideos: () => dispatch(getAllVideos()),
  getUser: (token) => dispatch(getUser(token)),
  goToLogin: () => dispatch(push(routes.login))
});
export default connect(null, mapDispatchToprops)(Home);
