import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';

describe('<Notification />', () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    shallow(<Notifications />);
  });

  it('Notification Item with html', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeDefined();
  });

  it('Notification with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(0);
  });

  describe('listNotifications with values', () => {
    let latestNotification = undefined;
    let listNotifications = undefined;

    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: 'default', value: 'New course available' },
        { id: 2, type: 'urgent', value: 'New resume available' },
        { id: 3, type: 'urgent', html: { __html: latestNotification } },
      ];
    });

    it('values', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      const nItem = wrapper.find('NotificationItem');
      expect(nItem).toBeDefined();
      expect(nItem).toHaveLength(3);
      expect(nItem.at(0).html()).toEqual(
        '<li data-notification-type="default">New course available</li>'
      );
      expect(nItem.at(1).html()).toEqual(
        '<li data-notification-type="urgent">New resume available</li>'
      );
      expect(nItem.at(2).html()).toEqual(
        `<li data-notification-type="urgent">${latestNotification}</li>`
      );
    });
  });

  describe('listNotifications without values', () => {
    let listNotifications = undefined;
    beforeEach(() => {
      listNotifications = [];
    });

    it('empty', () => {
      const wrapper = shallow(
        <Notifications displayDrawer listNotifications={listNotifications} />
      );
      expect(wrapper.exists());
      const nItem = wrapper.find('NotificationItem');
      expect(nItem).toHaveLength(1);
      expect(nItem.html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });

    it('without listNotifications', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      const nItem = wrapper.find('NotificationItem');
      expect(nItem).toHaveLength(1);
      expect(nItem.html()).toEqual(
        '<li data-notification-type="default">No new notification for now</li>'
      );
    });
  });

  describe('markAsRead', () => {
    it('console.log', () => {
      const wrapper = shallow(<Notifications displayDrawer />);
      console.log = jest.fn();
      const instance = wrapper.instance();
      const id = 0;
      instance.markAsRead(id);
      expect(console.log).toHaveBeenCalledWith(
        `Notification ${id} has been marked as read`
      );
      jest.restoreAllMocks();
    });
  });
});
