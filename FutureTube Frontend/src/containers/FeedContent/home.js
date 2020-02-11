import React, { useState, useEffect } from "react";

import Header from "../../components/Header";
import GridVideos from "../../components/GridVideos";
import style from './style.module.css'

const FeedContent = () => {
 
  return (
    <div className={style.container}>
      <Header />
      <GridVideos />
    </div>
  )
}

export default FeedContent
