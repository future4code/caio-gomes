import postsReducer from "./post";

describe("Post Reducer", () => {
  it("Set Post", () => {
    const setPost = {
      type: "SET_POSTS",
      payload: {
        postList: "PostList"
      }
    };
    const newPost = postsReducer(undefined, setPost);
    expect(newPost.allPosts).toHaveLength(1);
    expect(newPost.allPosts[0].text).toBe("PostList");
  });
});
