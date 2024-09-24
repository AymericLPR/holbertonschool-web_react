import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import { login, logout, displayNotificationDrawer, hideNotificationDrawer, loginRequest } from './uiActionCreators';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('uiActionCreators', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('login should create an action to login a user', () => {
    const email = 'imtest@example.com';
    const password = '1234';
    const expectedAction = {
      type: LOGIN,
      user: { email, password }
    };
    expect(login(email, password)).toEqual(expectedAction);
  });

  it('logout should create an action to logout a user', () => {
    const expectedAction = {
      type: LOGOUT
    };
    expect(logout()).toEqual(expectedAction);
  });

  it('displayNotificationDrawer should create an action to display', () => {
    const expectedAction = {
      type: DISPLAY_NOTIFICATION_DRAWER
    };
    expect(displayNotificationDrawer()).toEqual(expectedAction);
  });

  it('hideNotificationDrawer should create an action to hide', () => {
    const expectedAction = {
      type: HIDE_NOTIFICATION_DRAWER
    };
    expect(hideNotificationDrawer()).toEqual(expectedAction);
  });

  it('should dispatch LOGIN and LOGIN_SUCCESS on successful', () => {
    fetchMock.getOnce('../../dist/login-success.json', {
      body: { success: true },
      headers: { 'content-type': 'application/json' }
    });

    const email = 'imtest@example.com';
    const password = '1234';
    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_SUCCESS }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch LOGIN and LOGIN_FAILURE on failed', () => {
    fetchMock.getOnce('../../dist/login-success.json', 500);

    const email = 'imtest@example.com';
    const password = '1234';
    const expectedActions = [
      { type: LOGIN, user: { email, password } },
      { type: LOGIN_FAILURE }
    ];

    const store = mockStore({});

    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
