import type { NextPage } from "next";
import Head from "next/head";
import indexStyles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <div className="flex justify-center">
      <Head>
        <title>ChatMeUp-Login</title>
      </Head>

      <main className={`${indexStyles.main}`}>
        
      </main>
    </div>
  )
}

export default Home
