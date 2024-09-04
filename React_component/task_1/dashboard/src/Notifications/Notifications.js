import React from 'react';
import PropTypes from 'prop-types'; // Add this import
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

function Notifications({ displayDrawer = false, listNotifications }) {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className='Notification_components'>
      <p className='Notification_components_title'>Your notifications</p>
      {displayDrawer ? (
        <div className="Notifications">
          <button className="close-button"
            aria-label="Close"
            onClick={handleClick}
          >
            <img src={closeIcon} alt="Close icon" />
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            {listNotifications && listNotifications.length > 0 ? (
              listNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                />
              ))
            ) : (
              <NotificationItem type="default" value="No new notification for now" />
            )}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
