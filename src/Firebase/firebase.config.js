// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEZfIA_JDvAZhjkjQu3jDPCAJImGrn92g",
  authDomain: "craft-firebase.firebaseapp.com",
  projectId: "craft-firebase",
  storageBucket: "craft-firebase.appspot.com",
  messagingSenderId: "793162044536",
  appId: "1:793162044536:web:0f4d7411863e067ab2898d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth