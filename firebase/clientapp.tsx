import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";

export const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDmesQVniSSInE-Jv1CfZV5PqUwLEJN0iU",
  authDomain: "chatmeup-fdae5.firebaseapp.com",
};

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
export const firebaseAuth = initializeAuth(firebaseApp);
