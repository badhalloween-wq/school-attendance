const firebaseConfig = {
apiKey: "YOUR_API_KEY",
authDomain: "school-attendance.firebaseapp.com",
projectId: "school-attendance",
storageBucket: "school-attendance.appspot.com",
messagingSenderId: "XXXX",
appId: "XXXX"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
