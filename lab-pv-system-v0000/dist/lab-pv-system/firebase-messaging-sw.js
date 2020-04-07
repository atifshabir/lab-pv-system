/*importScripts("https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.11.0/firebase-analytics.js");

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyBPjGl2gNhiKKSYPHszXhKVorueDEwYyMg",
authDomain: "lab-pv-system.firebaseapp.com",
databaseURL: "https://lab-pv-system.firebaseio.com",
projectId: "lab-pv-system",
storageBucket: "lab-pv-system.appspot.com",
messagingSenderId: "848306702179",
appId: "1:848306702179:web:d4c90eea4ea8872190b556",
measurementId: "G-2WLXSWS08K"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

// Retrieve Firebase Messaging object.
const messaging = firebase.messaging();

messaging.userPublicVapidKey("BKvOdeV5eFUIyT-GIciYteOXpHlM_G4NfIB5lyn5nMjByDClYYkem1Q7PI5hsBdK91MEkVhqAuqw6QQRaTDKHno");


// Get Instance ID token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken().then((currentToken) => {
    if (currentToken) {
      sendTokenToServer(currentToken);
      updateUIForPushEnabled(currentToken);
    } else {
      // Show permission request.
      console.log('No Instance ID token available. Request permission to generate one.');
      // Show permission UI.
      updateUIForPushPermissionRequired();
      setTokenSentToServer(false);
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    showToken('Error retrieving Instance ID token. ', err);
    setTokenSentToServer(false);
  });

  // Callback fired if Instance ID token is updated.
messaging.onTokenRefresh(() => {
    messaging.getToken().then((refreshedToken) => {
      console.log('Token refreshed.');
      // Indicate that the new Instance ID token has not yet been sent to the
      // app server.
      setTokenSentToServer(false);
      // Send Instance ID token to app server.
      sendTokenToServer(refreshedToken);
      // ...
    }).catch((err) => {
      console.log('Unable to retrieve refreshed token ', err);
      showToken('Unable to retrieve refreshed token ', err);
    });
  });
  */