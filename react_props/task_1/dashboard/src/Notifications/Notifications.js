import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

function Notifications() {
  const handleClick = () => {
    console.log("Close button has been clicked");
  };

  return (
    <div className="Notifications">
      <button className="close-button"
        aria-label="Close"
        onClick={handleClick}
      >
        <img src={closeIcon} alt="Close icon" />
      </button>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority="default">New course available</li>
        <li data-priority="urgent">New resume available</li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}

export default Notifications;
