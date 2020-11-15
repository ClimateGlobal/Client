import Firebase from "firebase";
import "firebase/database";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyD7qAtKnU8zhosjD01_iV9UDqHbdykr8J0",
  authDomain: "climateglobal.firebaseapp.com",
  databaseURL: "https://climateglobal.firebaseio.com",
  projectId: "climateglobal",
  storageBucket: "climateglobal.appspot.com",
  messagingSenderId: "244283173632",
  appId: "1:244283173632:web:fa22a4aa0fd285468ea1e5",
};
// Initialize Firebase
export default Firebase.initializeApp(firebaseConfig);
