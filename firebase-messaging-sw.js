importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

// ✅ Correct Firebase Config
const firebaseConfig = {
  apiKey: 'AIzaSyCQi4DL4edtfjTRloi5nK0ih3_wZjCWAWc',
  appId: '1:295908173417:web:38ba95b20a2d6bdc38a4f8',
  messagingSenderId: '295908173417',
  projectId: 'mohadraty-2b6f9',
  authDomain: 'mohadraty-2b6f9.firebaseapp.com',
  storageBucket: 'mohadraty-2b6f9.appspot.com', // ✅ Fixed URL
  measurementId: 'G-851MS6WNG2',
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// ✅ Handle Background Messages Correctly
messaging.onBackgroundMessage((payload) => {
  console.log("Background Message received: ", payload);

  const notificationTitle = payload.notification?.title || "New Notification";
  const notificationOptions = {
    body: payload.notification?.body || "You have a new message.",
    icon: "/icons/Icon-maskable-192.png", 
    data: { url: payload.data?.click_action || "/" }
  };

  // ✅ Show notification
  // self.registration.showNotification(notificationTitle, notificationOptions);
});
