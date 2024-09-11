import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prevListLength: 0,
      displayDrawer: true
    };
    this.markAsRead = this.markAsRead.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.toggleDisplay = this.toggleDisplay.bind(this);
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

  toggleDisplay() {
    this.setState(prevState => ({
      displayDrawer: !prevState.displayDrawer
    }));
  }

  render() {
    const { listNotifications } = this.props;
    const { displayDrawer } = this.state;

    return (
      <div onClick={this.toggleDisplay}>
        {displayDrawer ? (
          <div className={css(styles.notifications)}>
            <button className={css(styles.closeButton)}
              aria-label="Close"
              onClick={this.handleClick}
            >
              <img className={css(styles.closeButtonImg)} src={closeIcon} alt="Close icon" />
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(styles.notificationList)}>
              {listNotifications && listNotifications.length > 0 ? (
                listNotifications.map(notification => (
                  <li
                    key={notification.id}
                    className={css(
                      styles.notification,
                      styles.listItem,
                      notification.type === 'default' && styles.default,
                      notification.type === 'urgent' && styles.urgent
                    )}
                  >
                    <NotificationItem
                      type={notification.type}
                      value={notification.value}
                      html={notification.html}
                      markAsRead={() => this.markAsRead(notification.id)}
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
