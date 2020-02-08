import React, { useState, useEffect } from "react";
import * as firebase from "firebase";
import Header from "../../components/Header";
import GridVideos from "../../components/GridVideos";
import style from './style.module.css'

const FeedContent = () => {
  useEffect( () => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        console.log("USUARIO", user);
      } else {
        console.log("USUARIO SAIU");
      }
    })
  }, [])

  const onLogout = () => {
    firebase.auth().signOut();
  }

  return (
    <div className={style.container}>
      <Header 
        onLogout={onLogout}
      />
      <GridVideos />
    </div>
  )
}

export default FeedContent
