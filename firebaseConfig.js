// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvmjG3Obs-FbQknTbI0F9J5-UMjh1JTqI",
  authDomain: "english-learning-tool.firebaseapp.com",
  projectId: "english-learning-tool",
  storageBucket: "english-learning-tool.appspot.com",
  messagingSenderId: "949511692517",
  appId: "1:949511692517:web:aa557b67432820d32fb40c",
  measurementId: "G-C3ZJBHYCP5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { app, auth };