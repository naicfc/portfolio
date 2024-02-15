import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full">
      <div className="py-4  bg-[#102A43] dark:shadow-xl grid grid-cols-3 items-center px-8 lg:px-32 xl:px-48">
        <div className="text-center text-white text-sm justify-start flex">
          Designed & Developed by Godfred Nai.
        </div>
        <div className="text-center text-white text-sm">
          Copyright &copy; 2023
        </div>
        <div className="justify-end text-white text-base w-full flex items-center gap-5">
          <FaGithub className="cursor-pointer"/>
          <FaLinkedinIn className="cursor-pointer"/>
          <FaTwitter className="cursor-pointer"/>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
