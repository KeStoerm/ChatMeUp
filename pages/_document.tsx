import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="Have an easy chat with ChatMeUp!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="bg-light-grey">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}