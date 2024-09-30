import { MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS } from '../actions/notificationActionTypes';
import { fromJS, Map } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

const initialState = Map({
    notifications: Map(),
    filter: 'DEFAULT',
});

function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS:
            const normalizedData = notificationsNormalizer(action.data);
            const notifications = fromJS(normalizedData.entities.notifications);
            return state.set('notifications', notifications);

        case SET_TYPE_FILTER:
            return state.set('filter', action.filter);

        case MARK_AS_READ:
            return state.setIn(['notifications', action.index.toString(), 'isRead'], true);

        default:
            return state;
    }
}

export default notificationReducer;
