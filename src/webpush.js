const webpush = require("web-push");
const { PUBLIC_VAPID_KEY, PRIVATE_VAPID_KEY, MAIL_TO } = process.env;

webpush.setVapidDetails(
  'mailto:'+MAIL_TO,
  PUBLIC_VAPID_KEY,
  PRIVATE_VAPID_KEY
);

module.exports = webpush;