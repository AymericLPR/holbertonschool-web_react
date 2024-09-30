import * as notificationsData from '../../dist/notifications.json';
import { normalize, schema } from 'normalizr';


export function notificationsNormalizer(data) {
  const normalizedData = normalize(data, [notification]);
  return normalizedData;
}

export function getAllNotificationsByUser(userId) {
  const normalized = notificationsNormalizer(notificationsData.default);
  const notifications = normalized.entities.notifications;
  const messages = normalized.entities.messages;
  const notifUser = [];

  for (const key in notifications) {
    if (notifications[key].author === userId) {
      notifUser.push(messages[notifications[key].context]);
    }
  }
  return notifUser;
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
  idAttribute: 'guid'
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});

const normalized = normalize(notificationsData.default, [notification]);

export { normalized };
