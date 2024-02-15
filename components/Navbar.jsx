import React from "react";
import Link from "next/link";
import { useState } from "react";
import { useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import ThemeButton from "./ThemeButton";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  useEffect(() => setMounted(true), []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-16 shadow z-[100] py-8 px-8 lg:px-32 bg-[#ecf0f3] dark:bg-[#031629] transition-all duration-500"
          : "fixed w-full h-16 z-[100] py-8 px-8 lg:px-32 transition-all duration-500"
      }>
      <div className="flex justify-between items-center w-full h-full 2xl:px-16">
        <Link href="/">
          <div className="font-semibold text-2xl dark:text-white">Nai.</div>
        </Link>
        <div>
          <ul className="hidden md:flex md:items-center">
            <Link href="/">
              <li className="nav-link">Home</li>
            </Link>
            <Link href="/#about">
              <li className="nav-link">About</li>
            </Link>
            <Link href="/#services">
              <li className="nav-link">Services</li>
            </Link>
            <Link href="/#projects">
              <li className="nav-link">Projects</li>
            </Link>
            <Link href="/#skills">
              <li className="nav-link">Skills</li>
            </Link>
            <Link href="/#contact">
              <li className="nav-link">Contact</li>
            </Link>
            <li className="cursor-default ml-6">
              <div className="flex items-center">
                {mounted && <ThemeButton />}
              </div>
            </li>
          </ul>
          <div onClick={handleNav} className=" md:hidden cursor-pointer">
            <AiOutlineMenu size={25} className="dark:text-white" />
          </div>
        </div>
        <div className="hidden md:block">
          {" "}
          <a>
            <button
              className="cursor-pointer py-2 px-4 shadow-none rounded-full text-xs
            font-semibold hover:bg-[#2651d3] bg-[#4169e1] ease-in duration-200
            tracking-wide">
              {" "}
              Contact Me
            </button>
          </a>
        </div>
      </div>

      <div
        className={
          nav
            ? " md:hidden fixed right-0 top-0 w-full h-screen bg-black/70 ease-in duration-1000"
            : "bg-transparent ease-out duration-1000"
        }>
        <div
          className={
            nav
              ? " fixed right-0 top-0 w-[75%] sm:w-[50%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#020c16] dark:text-white p-10 ease-out duration-1000"
              : "fixed right-[-100%] w-[75%] sm:w-[50%] md:w-[45%] w top-0 p-10 duration-1000 h-screen"
          }>
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <div className="font-semibold text-2xl dark:text-white">
                  Nai.
                </div>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full p-3 cursor-pointer">
                <AiOutlineClose size={18} />
              </div>
            </div>
            <div className="border-b border-gray my-4 ">
              <p className="w-[85%] md:w-[90%] py-4 dark:text-white">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div className="py-4 flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="cursor-default">
                {mounted && <ThemeButton />}
              </li>
              <Link href="/">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm dark:text-white">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm dark:text-white">
                  About
                </li>
              </Link>
              <Link href="/#services">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm dark:text-white">
                  services
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm dark:text-white">
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm dark:text-white">
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm dark:text-white">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
