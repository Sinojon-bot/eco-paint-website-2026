const firebaseConfig = {
  apiKey: "AIzaSyDvVnBNcInqRSrZqTTXnKcRyrb9X0-V1Qc",
  authDomain: "eco-paint.firebaseapp.com",
  projectId: "eco-paint",
  storageBucket: "eco-paint.firebasestorage.app",
  messagingSenderId: "599778164137",
  appId: "1:599778164137:web:3b12f9d6c741ada715d8b8",
  measurementId: "G-VHGFYFH3Q1"
};

let ecoPaintDb = null;
if (typeof firebase !== "undefined") {
  if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  ecoPaintDb = firebase.firestore();
}
