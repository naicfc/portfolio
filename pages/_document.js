import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;400;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="scrollbar-thin scrollbar-thumb-[#FFA500] scrollbar-h-5">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
