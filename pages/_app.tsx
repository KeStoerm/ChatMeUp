import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { FirebaseOptions, initializeApp } from '@firebase/app';

export const firebaseConfig: FirebaseOptions = {
  apiKey: "AIzaSyDmesQVniSSInE-Jv1CfZV5PqUwLEJN0iU",
  authDomain: "chatmeup-fdae5.firebaseapp.com",
};

initializeApp(firebaseConfig);

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
