import Head from "next/head";
import { Inter } from "@next/font/google";
import Main from "@/components/Main";
import Skill from "@/components/Skill";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Resume from "@/components/Resume";
import Scroll from "@/components/Scroll";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Godfred Nai - Web Developer | Designer </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/GAN.png" />
      </Head>
      <Main />
      <Skill />
      <Services />
      <Portfolio />
      <Resume />
      <Contact />
      <Scroll />
      <Footer />
    </>
  );
}
