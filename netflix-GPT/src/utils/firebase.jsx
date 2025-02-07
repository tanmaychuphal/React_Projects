// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPEN0GwdJZhcexHOYdXHPlwmUpn7jAXYE",
  authDomain: "netflix-gpt-44ab1.firebaseapp.com",
  projectId: "netflix-gpt-44ab1",
  storageBucket: "netflix-gpt-44ab1.firebasestorage.app",
  messagingSenderId: "918354333549",
  appId: "1:918354333549:web:543c3caccb53e880d61464",
  measurementId: "G-ZK9108XGCY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
