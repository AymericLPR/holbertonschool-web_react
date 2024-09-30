import { fromJS } from 'immutable';
import notificationReducer from './notificationReducer';
import { FETCH_NOTIFICATIONS_SUCCESS, SET_TYPE_FILTER, MARK_AS_READ } from '../actions/notificationActionTypes';

describe('notificationReducer', () => {
  it('should handle FETCH_NOTIFICATIONS_SUCCESS', () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [{ id: 1, value: 'Notification 1' }, { id: 2, value: 'Notification 2' }]
    };
    const expectedState = fromJS({
      notifications: {
        1: { id: 1, value: 'Notification 1' },
        2: { id: 2, value: 'Notification 2' }
      },
      filter: 'DEFAULT',
    });
    expect(notificationReducer(undefined, action)).toEqual(expectedState);
  });

  it('should handle SET_TYPE_FILTER', () => {
    const action = { type: SET_TYPE_FILTER, filter: 'URGENT' };
    const initialState = fromJS({
      notifications: {},
      filter: 'DEFAULT',
    });
    const expectedState = fromJS({
      notifications: {},
      filter: 'URGENT',
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle MARK_AS_READ', () => {
    const action = { type: MARK_AS_READ, index: 1 };
    const initialState = fromJS({
      notifications: {
        1: { id: 1, value: 'Notification 1', isRead: false }
      },
      filter: 'DEFAULT',
    });
    const expectedState = fromJS({
      notifications: {
        1: { id: 1, value: 'Notification 1', isRead: true }
      },
      filter: 'DEFAULT',
    });
    expect(notificationReducer(initialState, action)).toEqual(expectedState);
  });
});
