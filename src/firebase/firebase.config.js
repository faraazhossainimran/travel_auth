// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqDNyMq6lBIcVGc53i6uR9ctjZirT5niE",
  authDomain: "travel-auth-3d392.firebaseapp.com",
  projectId: "travel-auth-3d392",
  storageBucket: "travel-auth-3d392.appspot.com",
  messagingSenderId: "791281729144",
  appId: "1:791281729144:web:818202197efa480b8e778d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app