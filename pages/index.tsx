import type { NextPage } from "next";
import Head from "next/head";
import indexStyles from "./index.module.scss";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex justify-center bg-light-grey">
      <Head>
        <title>ChatMeUp</title>
        <meta name="description" content="Have an easy chat with ChatMeUp!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${indexStyles.main}`}>
        
      </main>
    </div>
  )
}

export default Home
