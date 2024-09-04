import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import './Notifications.css';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevListLength: 0
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.listNotifications.length > nextState.prevListLength;
  }

  componentDidUpdate(prevProps) {
    if (prevProps.listNotifications !== this.props.listNotifications) {
      this.setState({
        prevListLength: prevProps.listNotifications.length
      });
    }
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  handleClick() {
    console.log("Close button has been clicked");
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;
    return (
      <div className='Notification_components'>
        <p className='Notification_components_title'>Your notifications</p>
        {displayDrawer ? (
          <div className="Notifications">
            <button className="close-button"
              aria-label="Close"
              onClick={this.handleClick}
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
                    markAsRead={this.markAsRead}
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
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
