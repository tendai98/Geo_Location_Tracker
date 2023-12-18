if (typeof firebase === 'undefined') throw new Error('hosting/init-error: Firebase SDK not detected. You must include it before /__/firebase/init.js')
;
var firebaseConfig = {
  "projectId": "yourapp",
  "appId": "yourapp",
  "databaseURL": "https://yourapp.firebaseio.com",
  "apiKey": "yourapp",
  "authDomain": "yourapp.firebaseapp.com"
};

if (firebaseConfig) {
  firebase.initializeApp(firebaseConfig);
}
