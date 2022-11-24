// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJgpACKAxMblhvQh1hNC9qpMslQJBuaZs",
  authDomain: "movie-list-review.firebaseapp.com",
  projectId: "movie-list-review",
  storageBucket: "movie-list-review.appspot.com",
  messagingSenderId: "156285385017",
  appId: "1:156285385017:web:9798d6f4184359c6fe10e8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
