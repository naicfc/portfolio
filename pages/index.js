import Head from "next/head";
import { Inter } from "@next/font/google";
import Main from "@/components/Main";
import Skill from "@/components/Skill";
import Contact from "@/components/Contact";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Service from "@/components/Service";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Godfred Nai - Web Developer | Designer </title>
        <meta name="description" content="A website for my personal portfolio" />
        <meta name="author" content="Godfred Nai" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/icon.svg" />
      </Head>
      <Main />
      <About />
      <Service />
      <Portfolio />
      <Skill />
      <Contact />
      <Scroll />
      <Footer />
    </>
  );
}
