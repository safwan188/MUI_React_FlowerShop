// Import necessary functions from Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "key",
  authDomain: "domain",
  projectId: "projid",
  storageBucket: "bucket",
  messagingSenderId: "senderid",
  appId: "appid"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app); // Initialize Firebase Storage

// Export the initialized services
export { auth, db, storage };
