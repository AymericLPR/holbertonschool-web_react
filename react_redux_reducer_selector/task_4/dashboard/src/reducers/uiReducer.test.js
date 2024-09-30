import uiReducer from './uiReducer';
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from '../actions/uiActionTypes';

describe('uiReducer', () => {
  it('should return the initial state when no action is passed', () => {
    const state = uiReducer(undefined, {});
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should return the initial state when the action SELECT_COURSE is passed', () => {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('should change isNotificationDrawerVisible to true when the action DISPLAY_NOTIFICATION_DRAWER is passed', () => {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(true);
  });

  it('should change isNotificationDrawerVisible to false when the action HIDE_NOTIFICATION_DRAWER is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const state = uiReducer(initialState, { type: HIDE_NOTIFICATION_DRAWER });
    expect(state.isNotificationDrawerVisible).toBe(false);
  });

  it('should change isUserLoggedIn to true when the action LOGIN_SUCCESS is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_SUCCESS });
    expect(state.isUserLoggedIn).toBe(true);
  });

  it('should change isUserLoggedIn to false when the action LOGIN_FAILURE is passed', () => {
    const state = uiReducer(undefined, { type: LOGIN_FAILURE });
    expect(state.isUserLoggedIn).toBe(false);
  });

  it('should change isUserLoggedIn to false when the action LOGOUT is passed', () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: {},
    };
    const state = uiReducer(initialState, { type: LOGOUT });
    expect(state.isUserLoggedIn).toBe(false);
  });
});
