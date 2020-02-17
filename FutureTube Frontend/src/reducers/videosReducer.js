const initialState = {
  allVideos: [],
  selectedVideo: {},
};

const videos = (state = initialState, action) => {
  switch (action.type) {
    case "SET_VIDEOS":
      return { ...state, allVideos: action.payload.videos };
    case "SET_DETAIL_VIDEO":
      return { ...state, selectedVideo: action.payload.videos };
    default:
      return state;
  }
};

export default videos;
