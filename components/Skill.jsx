import React from "react";

function Skill() {
  return (
    <div
      id="skills"
      className="w-full px-8 lg:px-32  py-16 dark:bg-[#102A43] bg-[#e3e6f0]">
      <div className="text-center">
        <p className="text-xl tracking-widest uppercase font-semibold text-gray-700 dark:text-white  mb-2">
          Skill Stack
        </p>
        <p className="text-gray-600 text-center mb-12 dark:text-white">
          The projects above were built with the following stack.
        </p>
      </div>
      <div className="max-w-[1240px] grid xl:grid grid-cols-4 md:grid-cols-7 grid-rows-2 gap-12">
        <img className=" w-12 h-auto" src="/assets/skills/html.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/figma.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/express.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/next-js.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/react.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/tailwind.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/node.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/css.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/flutter.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/javascript.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/github.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/firebase.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/sass.svg" />
        <img className=" w-12 h-auto" src="/assets/skills/postman.svg" />
      </div>
    </div>
  );
}

export default Skill;
