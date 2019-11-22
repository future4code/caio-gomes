import axios from 'axios';
import { baseURL } from '../api/constants';
import { fetchAllTasks, setNewTask, setInput } from './inputsActions';


describe('Task Action-Creator', () => {
  test('Create', () => {
    const expectResult = {
      type:'SET_TASK',
      payload: {
       data: 'data'
      }
    };
    const result = setInput('data');
    expect(expectResult).toMatchObject(result);
  })
})

describe('task actions', () => {
  let mockDispatch;
  beforeEach(() => {
    mockDispatch = jest.fn();
  });
  const mockTask = {
    text: 'ir ao mercado',
    day: 'Segunda'
  };

  describe('fetchAllTasks', () => {
    test('dispatch was called with the proper action', async () => {
      const mockTasks = [mockTask];
      axios.get = jest.fn(() => ({
        data: mockTasks
      }));
      const expectedAction = {
        type: 'SET_TASK',
        payload: {
          data: mockTasks
        }
      };
      await fetchAllTasks()(mockDispatch);
      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
  describe('createTasks', () => {
    test('axios correct response is being handled', async () => {
      axios.post = jest.fn(() => ({
        status: 200
      }));
      const { text, day } = mockTask;
      await setNewTask( text, day ) (mockDispatch);
      expect(axios.post).toHaveBeenCalledWith(baseURL, mockTask);
      expect(mockDispatch).toHaveBeenCalledTimes(1);
    });
  });
});