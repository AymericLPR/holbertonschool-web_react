import notificationReducer from './notificationReducer';
import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('return the initial state when no action is passed', () => {
    const state = notificationReducer(undefined, {});
    expect(state).toEqual({
      notifications: [],
      filter: 'DEFAULT'
    });
  });

  it('handle FETCH_NOTIFICATIONS_SUCCESS and update state correctly', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', value: 'New data available' }
      ]
    };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });

  it('handle MARK_AS_READ and update the specified notification', () => {
    const initialState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const expectedState = {
      filter: 'DEFAULT',
      notifications: [
        { id: 1, isRead: false, type: 'default', value: 'New course available' },
        { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
        { id: 3, isRead: false, type: 'urgent', value: 'New data available' }
      ]
    };
    const state = notificationReducer(initialState, action);
    expect(state).toEqual(expectedState);
  });

  it('handle SET_TYPE_FILTER and update the filter', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const expectedState = {
      filter: 'URGENT',
      notifications: []
    };
    const state = notificationReducer(undefined, action);
    expect(state).toEqual(expectedState);
  });
});
