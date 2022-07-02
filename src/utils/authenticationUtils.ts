import { signInWithPopup, GoogleAuthProvider, User, browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { firebaseApp } from "firebaseClient/clientapp";

export let currentUser: User | null;

export const authenticateWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  return await setPersistence(auth, browserLocalPersistence).then(() =>
    signInWithPopup(auth, provider)
      .then((result) => {
      }).catch((error) => {
        console.error(error);
      })
  );
}