import React from "react";
import SkillItem from "./SkillItem";

function Skill() {
  return (
    <div
      id="skills"
      className="w-full px-8 lg:px-32 xl:px-48  py-32 dark:bg-[#102A43] bg-[#e3e6f0]">
      <div className="text-center">
        <p className="text-xl tracking-widest uppercase font-semibold text-gray-700 dark:text-white  mb-2">
          Skill Stack
        </p>
        <p className="text-gray-600 text-center mb-12 dark:text-white">
          The projects above were built with the following stack.
        </p>
      </div>
      <div className="max-w-[1240px] flex flex-wrap gap-4 items-center justify-center">
        <SkillItem imageUrl={"/assets/skills/html.svg"} />
        <SkillItem imageUrl={"/assets/skills/figma.svg"} />
        <SkillItem imageUrl={"/assets/skills/express.svg"} />
        <SkillItem imageUrl={"/assets/skills/next-js.svg"} />
        <SkillItem imageUrl={"/assets/skills/react.svg"} />
        <SkillItem imageUrl={"/assets/skills/tailwind.svg"} />
        <SkillItem imageUrl={"/assets/skills/node.svg"} />
        <SkillItem imageUrl={"/assets/skills/css.svg"} />
        <SkillItem imageUrl={"/assets/skills/flutter.svg"} />
        <SkillItem imageUrl={"/assets/skills/javascript.svg"} />
        <SkillItem imageUrl={"/assets/skills/github.svg"} />
        <SkillItem imageUrl={"/assets/skills/firebase.svg"} />
        <SkillItem imageUrl={"/assets/skills/sass.svg"} />
        <SkillItem imageUrl={"/assets/skills/postman.svg"} />
      </div>
    </div>
  );
}

export default Skill;
