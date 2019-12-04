import planner from './planner';

describe('Task Reducer', () => {
  test('Create Task', () => {
    const testAction = {
      type: 'SET_TASK',
      payload: {
        data: 'data'
      }
    };
    const newState = planner(undefined, testAction);
    expect(newState.allTasks).toBe('data');
  });
});
