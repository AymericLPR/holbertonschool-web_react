import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo(({ type, html, value, markAsRead }) => {

  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html}  onClick={() => markAsRead(id)}>
      {value}
    </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({ __html: PropTypes.string }),
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

NotificationItem.defaultProps = {
  markAsRead: () => {},
};

export default NotificationItem;
