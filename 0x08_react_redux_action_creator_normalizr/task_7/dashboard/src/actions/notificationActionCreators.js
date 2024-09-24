import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';
import { bindActionCreators, useDispatch } from 'redux';

export const markAsRead = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter: filter,
});

const dispatch = useDispatch();

export const boundMarkAsRead = bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = bindActionCreators(
  setNotificationFilter,
  dispatch
);
