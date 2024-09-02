import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer = false }) {
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
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Notifications;
