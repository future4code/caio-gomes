import postsReducer from "../post";

describe("Todos os Reducers", () => {
  it("Set Posts", () => {
    const testAction = {
      type: "SET_POSTS",
      payload: {
        text: "Novo Post"
      }
    };
    const newState = postsReducer(undefined, testAction);
    expect(newState).toHaveLength(1);
    expect(newState[0].text).toBe("Novo Post");
  });
});
