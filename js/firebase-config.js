// Import firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhikIUsOI4kvUsmPuxuWDR85AeO5M6eVs",
  authDomain: "trapinette-3105b.firebaseapp.com",
  projectId: "trapinette-3105b",
  storageBucket: "trapinette-3105b.firebasestorage.app",
  messagingSenderId: "923617401690",
  appId: "1:923617401690:web:8f1745505eb453b746f163"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GithubAuthProvider();
export const db = getFirestore(app);
