import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

const urlBase =
  "https://lwicg7zvyc.execute-api.us-east-1.amazonaws.com/FutureTube";

const getVideos = videos => ({
  type: "SET_VIDEOS",
  payload: {
    videos
  }
});

const getDetailVideo = videos => ({
  type: "SET_VIDEO_DETAIL",
  payload: {
    videos
  }
});

export const getAllVideos = () => async dispatch => {
  const response = await axios.get(`${urlBase}/allVideos`);
  dispatch(getVideos(response.data.result.videos));
};

export const getVideoDetail = videoId => async dispatch => {
  const response = await axios.get(`${urlBase}/video/information/${videoId}`);

  dispatch(getDetailVideo(response.data.result.videos));
};

export const getUserVideos = () => async dispatch => {
  const token = window.localStorage.getItem('token')
  const response = await axios.get(`${urlBase}/user/videos`, {
    headers: {
      auth: token
    }
  });
  dispatch(getVideos(response.data.result.videos))
};

export const uploadVideo = (title, description, url) => async dispatch => {
  const token = window.localStorage.getItem("token");
  const newVideo = {
    title,
    description,
    url
  };
  const response = await axios.post(`${urlBase}/uploadVideo`, newVideo, {
    headers: {
      auth: token
    }
  });
  if (response.status === 200) {
    console.log(response.statusText);
  }
};

export const editVideoInformation = (title, description, videoId) => async () => {
  const token = window.localStorage.getItem("token");
  const editVideo = {
    videoId,
    title,
    description
  };
  const response = await axios.put(`${urlBase}/edit/video`, editVideo, {
    headers: {
      auth: token
    }
  })
}
