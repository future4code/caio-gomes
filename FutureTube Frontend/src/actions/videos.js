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
})

export const getAllVideos = () => async dispatch => {
	const response = await axios.get(`${urlBase}/allVideos`);
  dispatch(getVideos(response.data.result.videos))
  console.log(response)
};

export const getVideoDetail = (videoId) => async dispatch => {
  console.log("VIDEO ID ", videoId)
  const response = await axios.get(`${urlBase}/video/information/${videoId}`);
  console.log("RESPONSE ", response)
  dispatch(getDetailVideo(response.data.result.videos))
}