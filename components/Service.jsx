import React from "react";
import { FaWindows } from "react-icons/fa";

const Service = () => {
  return (
    <div
      id="projects"
      className="min-h-screen px-8 lg:px-32 py-8 dark:bg-[#102A43]">
      <div className="text-center">
        <p className="text-xl tracking-widest uppercase font-semibold text-[#4169e1] dark:text-white  mb-4">
          Services
        </p>
        <p className="text-gray-600 text-center mb-8 dark:text-white">
          Here are some of my most recent works.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-4 bg-slate-300">
          <FaWindows size={30} />
          <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
            Web Design
          </h3>
          <p className="text-gray-600 dark:text-black text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            quia distinctio id quis, assumenda magni quasi, possimus maxime
            deserunt ex cupiditate molestias animi? Atque fuga at in, ut est
            natus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
