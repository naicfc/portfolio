import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;800&display=swap"
          rel="stylesheet"
        />
        <title>Godfred Nai - Web Developer | Designer </title>
        <meta
          name="description"
          content="A website for my personal portfolio"
        />
        <meta name="author" content="Godfred Nai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon.svg" />
      </Head>
      <body className="scrollbar-thin scrollbar-thumb-[#FFA500] scrollbar-h-5">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
