import { fromJS } from 'immutable';
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

describe('notification selectors', () => {
    const state = fromJS({
        notifications: {
            1: { id: 1, value: 'Notification 1', isRead: false },
            2: { id: 2, value: 'Notification 2', isRead: true }
        },
        filter: 'DEFAULT'
    });

    it('filterTypeSelected should return the filter type', () => {
        expect(filterTypeSelected(state)).toEqual('DEFAULT');
    });

    it('getNotifications should return a list of notifications', () => {
        const notifications = getNotifications(state);
        expect(notifications).toEqual(fromJS({
            1: { id: 1, value: 'Notification 1', isRead: false },
            2: { id: 2, value: 'Notification 2', isRead: true }
        }));
    });

    it('getUnreadNotifications should return a list of unread notifications', () => {
        const unreadNotifications = getUnreadNotifications(state);
        expect(unreadNotifications).toEqual(fromJS({
            1: { id: 1, value: 'Notification 1', isRead: false }
        }));
    });
});
