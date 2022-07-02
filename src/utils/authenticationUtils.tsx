import { getAuth, signInWithPopup, GoogleAuthProvider, User, setPersistence, browserLocalPersistence } from "firebase/auth";
import { firebaseAuth } from "../firebase/clientapp";

export let currentUser: User | null;

export const authenticateWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  const auth = firebaseAuth;

  setPersistence(auth, browserLocalPersistence).then(() =>
    signInWithPopup(auth, provider)
      .then((result) => {
      }).catch((error) => {
        console.log(error);
      })
  );
}