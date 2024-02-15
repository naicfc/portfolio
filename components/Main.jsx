import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Typed from "typed.js";

function Main() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["A Front-End Web developer.", "A Full-Stack Web Developer."],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div
      id="main"
      className="w-full h-screen my-auto px-8 lg:px-32 text-center dark:bg-[#102A43] dark:text-white">
      <div className="max-w-[1240px] w-full h-full mx-auto flex justify-center items-center">
        <div>
          <p className="uppercase text-sm sm:mt-6 tracking-widest text-gray-600 dark:text-white">
            Let's build something together
          </p>
          <h1 className="py-4 text-gray-700 dark:text-white">
            Hi, I'm <span className="text-[#4169e1]">Godfred</span>
          </h1>
          <h1 className="text-gray-700 dark:text-white typewrite">
            <span ref={el} />
          </h1>
          <p className="py-4 text-gray-600 md:max-w-[80%] m-auto hidden md:flex dark:text-white ">
            I'm a web developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I'm focused
            on building front-end web applications while learning back-end
            technologies.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-8">
            <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500">
              <a
                href="https://linkedin.com/in/godfred-nai-84a822222"
                target="_blank"
                rel="noopener noreferrer">
                <FaLinkedinIn />
              </a>
            </div>
            <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500">
              <a
                href="https://github.com/naicfc"
                target="_blank"
                rel="noopener noreferrer">
                <FaGithub />
              </a>
            </div>
            <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500">
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
            <div className="rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500">
              <a
                href="http://godfrednai@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <AiOutlineMail />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
