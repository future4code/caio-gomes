import React, { useState, useEffect } from "react";
import GridVideos from "../GridVideos";
import style from './style.module.css'
import SideMenu from "../SideMenu";

const FeedContent = () => {
 
  return (
    <div className={style.container}>
      <SideMenu />
      <GridVideos />
    </div>
  )
}

export default FeedContent
