// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  describe('Rendering with empty listNotifications or no listNotifications property', () => {
    it('renders correctly when listNotifications is an empty array', () => {
      const { getByText } = render(<Notifications listNotifications={[]} />);
      expect(getByText('No new notification for now')).toBeInTheDocument();
    });

    it('renders correctly when listNotifications property is not passed', () => {
      const { getByText } = render(<Notifications />);
      expect(getByText('No new notification for now')).toBeInTheDocument();
    });
  });

  describe('Rendering with list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];

    it('renders the list of notifications correctly', () => {
      const { getAllByRole } = render(<Notifications listNotifications={listNotifications} />);
      const notificationItems = getAllByRole('listitem');
      expect(notificationItems).toHaveLength(listNotifications.length);
    });
  });

  it('displays the message "No new notification for now" when listNotifications is empty', () => {
    const { getByText } = render(<Notifications listNotifications={[]} />);
    expect(getByText('No new notification for now')).toBeInTheDocument();
  });
});
