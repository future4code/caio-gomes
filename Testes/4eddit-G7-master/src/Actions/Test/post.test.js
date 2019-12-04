import { setPosts, setPostDetail, setId } from "../post";

describe("Post Action-Creators", () => {
  it("Set Posts", () => {
    const expectedResult = {
      type: "SET_POSTS",
      payload: {
        postsList: 'postsList'
      }
    };
    const result = setPosts('postsList');
    expect(expectedResult).toMatchObject(result);
  });
  it("Set Detail Post", () => {
    const expectedResult = {
      type: "SET_POST_DETAIL",
      payload: {
        postDetail: 'postDetail'
      }
    };
    const result = setPostDetail('postDetail');
    expect(expectedResult).toMatchObject(result)
  })
  it("Set ID", () => {
    const expectedResult = {
      type: "SET_ID",
      payload: {
        postId: 'postId'
      }
    };
    const result = setId('postId');
    expect(expectedResult).toMatchObject(result)
  })
});
