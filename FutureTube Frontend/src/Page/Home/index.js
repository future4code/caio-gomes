import React, { useEffect } from "react";
import FeedContent from "../../containers/FeedContent/home";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../../containers/Router";
import { getAllVideos } from "../../actions/videos"

const Home = props => {
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      props.goToLogin();
		}
		props.getAllVideos()
  }, []);

  return <FeedContent />;
};



const mapDispatchToprops = dispatch => ({
	getAllVideos: () => dispatch(getAllVideos()),
  goToLogin: () => dispatch(push(routes.login))
});
export default connect(null, mapDispatchToprops)(Home);
