import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      displayDrawer: false
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer() {
    this.setState({ displayDrawer: true });
  }

  handleHideDrawer(e) {
    e.stopPropagation();
    this.setState({ displayDrawer: false });
  }

  render() {
    const { listNotifications, markNotificationAsRead } = this.props;
    const { displayDrawer } = this.state;

    return (
      <div onClick={this.handleDisplayDrawer}>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button className={css(styles.closeButton)} aria-label="Close" onClick={this.handleHideDrawer}>
              <img className={css(styles.closeButtonImg)} src={closeIcon} alt="Close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationList)}>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(notification => (
                  <li key={notification.id} className={css(styles.notification, styles.listItem)}>
                    <NotificationItem
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => markNotificationAsRead(notification.id)}
                    />
                  </li>
                ))
              ) : (
                <NotificationItem type="default" value="No new notification for now" />
              )}
            </ul>
          </div>
        ) : (
          <p className={css(styles.notificationTitle)}>Your notifications</p>
        )}
      </div>
    );
  }
}

const fadeInKeyframes = {
  'from': {
    opacity: 0.5,
  },
  'to': {
    opacity: 1,
  },
};

const bounce = {
  '0%, 100%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-5px)',
  },
};

const styles = StyleSheet.create({
  notificationComponents: {
    display: 'flex',
    flexDirection: 'column',
  },
  notificationTitle: {
    textAlign: 'right',
    opacity: 1,
    transition: 'opacity 1s',
    ':hover': {
      opacity: 0.5,
      animationName: [bounce, fadeInKeyframes],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3, 1',
      cursor: 'pointer',
    },
  },
  notifications: {
    border: '3px dashed #E1003C',
    padding: '20px',
    backgroundColor: 'white',
    ':hover': {
      backgroundColor: '#fff8f8',
      cursor: 'pointer',
    },
    '@media (max-width: 600px)': {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100vh',
      zIndex: 4,
      padding: 0,
      border: 'none',
    },
  },
  closeButton: {
    float: 'right',
    border: 'none',
    cursor: 'pointer',
    width: '20px',
    height: '20px',
    background: 'transparent',
    ':hover': {
      opacity: '0.5',
      cursor: 'pointer',
    },
  },
  closeButtonImg: {
    width: '100%',
  },
  default: {
    color: 'blue',
  },
  urgent: {
    color: 'red',
  },
  notificationList: {
    '@media (max-width: 600px)': {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  listItem: {
    '@media (max-width: 600px)': {
      borderBottom: '1px solid black',
      padding: '10px 8px',
      fontSize: '20px',
    },
  },
});

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
