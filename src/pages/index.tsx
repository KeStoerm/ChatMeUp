import type { NextPage } from "next";
import Head from "next/head";
import { Logo } from "components/logo/logo";
import indexStyles from "./index.module.scss";
import GoogleAuthButton from "images/google-signin/btn_google_signin_dark_normal_web.png"
import Image from "next/image";
import { authenticateWithGoogle } from "utils/authenticationUtils";

const Home: NextPage = () => {
  const login = async () => {
    authenticateWithGoogle();
  };


  return (
    <div className="flex justify-center">
      <Head>
        <title>ChatMeUp-Login</title>
      </Head>

      <main className={`${indexStyles.main} flex items-center justify-center flex-col h-screen`}>
        <Logo />
        <button aria-label="google login button" onClick={login}>
          <Image {...GoogleAuthButton} alt="google authentication image"/>
        </button>
      </main>
    </div>
  )
}

export default Home
