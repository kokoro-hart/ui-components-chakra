import { Html, Head, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="ja">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body
        style={{
          backgroundImage: "url(https://hidane.app/_nuxt/img/bg.262fe15.svg)",
          backgroundSize: "200px",
          backgroundRepeat: "repeat",
          backgroundColor: "#f3f4f6",
        }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
