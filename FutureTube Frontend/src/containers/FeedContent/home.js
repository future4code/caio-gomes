import React from "react";
import * as firebase from "firebase";
import Header from "../../components/Header";
import GridVideos from "../../components/GridVideos";
import style from './style.module.css'

class FeedContent extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("USUARIO", user);
      } else {
        console.log("USUARIO SAIU");
      }
    });
  }

  onClickLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className={style.container}>
        <Header />
        <GridVideos />
      </div>
    );
  }
}

export default FeedContent;
