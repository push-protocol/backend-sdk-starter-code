// import required packages
const EpnsSDK = require("@epnsproject/backend-sdk-staging").default;
// import required packages

/**
 * Function to send a notification to users who are to recieve poap link
 */
const CHANNEL_PK =
  "0x7a9274a922508b5f1a092a235c3def024b42091388da39408da5d162dc8b4277"; // the private key of the channel
const CTA = "https://github.com/ethereum-push-notification-service"; // the link to be used as your cta
/**
 * Main function
 */
(async function Main() {
  // INITIALISE THE SDK
  const epnsSdk = new EpnsSDK(CHANNEL_PK);

  // Dire NOTIFICATIONS

  // TODO: change notification title and body to suite needs
  const pushNotificationTitle = "Welcome"; //the title which would appear in a push notification, usually could be a shorter version of the actual message
  const pushNotificationBody = "Welcome to EPNS"; //the body which would be displayed in a push notification, usually could be a shorter version of the actual message

  const notificationTitle = "EPNS Welcome notification"; //the long version of the title which would be displayed in the dApp
  const notificationBody = `Welcome to EPNS, we are glad to have you on board`; // the long version of the body which would be displayed in the dApp
  // TODO: change notification title and body to suite needs

  // TODO: change recipient address to the address you wish to use to recieve notifications
  const recipientAddress = "0xE6B09537d1A6a5242aB47A05134432335B2cD2A1";

  const notificationType = 3; // a notification type of 3, means the notification is a direct message to the specified recipient
  // send the actual notification
  const response = await epnsSdk.sendNotification(
    recipientAddress, //the recipients of the notification
    pushNotificationTitle, // push notification title
    pushNotificationBody, //push notification body
    notificationTitle, //the title of the notification
    notificationBody, //the body of the notification //the CTA of the notification, the link which should be redirected to when they click on the notification
    notificationType,
    CTA);

  console.log({
    response,
    message: "Your notification has been sucesfully sent"
  });

})();
