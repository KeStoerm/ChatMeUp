import { FirebaseOptions, getApp, initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

export const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDmesQVniSSInE-Jv1CfZV5PqUwLEJN0iU",
  authDomain: "chatmeup-fdae5.firebaseapp.com",
};

function createFirebaseApp() {
  try {
    return getApp();
  } catch {
    return initializeApp(firebaseConfig);
  }
}

export const firebaseApp = createFirebaseApp();
export const firebaseAuth = getAuth(firebaseApp);
