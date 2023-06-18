import React from "react";
import { BsHeadset, BsLaptop, BsServer } from "react-icons/bs";
import { FaCode, FaCodepen, FaGlobe, FaLaptopCode, FaMobile, FaWindows } from "react-icons/fa";

const Service = () => {
  return (
    <div
      id="services"
      className="min-h-screen px-8 lg:px-32 py-8 dark:bg-[#102A43] bg-[#e3e6f0]">
      <div className="text-center">
        <p className="text-xl tracking-widest uppercase font-semibold text-gray-700 dark:text-white  mb-8">
          Services i offer
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-4 bg-slate-300">
          <BsLaptop size={30} />
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
        <div className="p-4 bg-slate-300">
          <FaCode size={30} />
          <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
            Front-end Development
          </h3>
          <p className="text-gray-600 dark:text-black text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            quia distinctio id quis, assumenda magni quasi, possimus maxime
            deserunt ex cupiditate molestias animi? Atque fuga at in, ut est
            natus.
          </p>
        </div>
        <div className="p-4 bg-slate-300">
          <FaCodepen size={30} />
          <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
            UI/UX Design
          </h3>
          <p className="text-gray-600 dark:text-black text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            quia distinctio id quis, assumenda magni quasi, possimus maxime
            deserunt ex cupiditate molestias animi? Atque fuga at in, ut est
            natus.
          </p>
        </div>
        <div className="p-4 bg-slate-300">
          <FaMobile size={30} />
          <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
            Mobile Applications
          </h3>
          <p className="text-gray-600 dark:text-black text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            quia distinctio id quis, assumenda magni quasi, possimus maxime
            deserunt ex cupiditate molestias animi? Atque fuga at in, ut est
            natus.
          </p>
        </div>
        <div className="p-4 bg-slate-300">
          <FaLaptopCode size={30} />
          <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
            Full-Stack Development
          </h3>
          <p className="text-gray-600 dark:text-black text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
            quia distinctio id quis, assumenda magni quasi, possimus maxime
            deserunt ex cupiditate molestias animi? Atque fuga at in, ut est
            natus.
          </p>
        </div>
        <div className="p-4 bg-slate-300">
          <BsHeadset size={30} />
          <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
            IT Support
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
