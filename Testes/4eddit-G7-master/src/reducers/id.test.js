import idReducer from './id'

describe("Id Reducer", () => {
   it ('Post Id', () => {
    const setId = {
      type: 'SET_ID',
      payload: {
        postId: '1'
      }
    } 
    const newId = idReducer(undefined, setId);
    expect(newId.id).toHaveLength(1);
   })
})