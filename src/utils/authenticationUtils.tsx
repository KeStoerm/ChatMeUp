import { signInWithPopup, GoogleAuthProvider, User, browserLocalPersistence, getAuth } from "firebase/auth";
import { firebaseApp } from "firebaseClient/clientapp";

export let currentUser: User | null;

export const authenticateWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(firebaseApp);

  return await auth.setPersistence(browserLocalPersistence).then(() =>
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      }).catch((error) => {
        console.log(error);
      })
  );
}