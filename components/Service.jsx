import React from "react";
import { BsHeadset, BsLaptop, BsServer } from "react-icons/bs";
import { FaCode, FaCodepen, FaGlobe, FaLaptopCode, FaMobile, FaWindows } from "react-icons/fa";

const Service = () => {
  return (
    <div
      id="services"
      className="md:h-screen px-8 lg:px-32 xl:px-48 py-8 dark:bg-[#102A43] bg-[#e3e6f0] flex flex-col justify-center items-center">
      <div className="">
        <div className="text-center">
          <p className="text-xl tracking-widest uppercase font-semibold text-gray-700 dark:text-white  mb-8">
            Services i offer
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 xl:px-16">
          <div className="p-4 px-4 py-6 bg-[#ecf0f3] text-center">
            <div className="flex justify-center">
              <BsLaptop size={30} />
            </div>
            <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
              Web Design
            </h3>
            <p className="text-gray-600 dark:text-black text-sm">
              Crafting captivating websites that blend creativity and
              functionality for an impactful online presence.
            </p>
          </div>
          <div className="px-4 py-6 bg-[#ecf0f3] text-center">
            <div className="flex justify-center">
              <FaCode size={30} />
            </div>
            <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
              Front-end Development
            </h3>
            <p className="text-gray-600 dark:text-black text-sm">
              I design and develop intuitive and responsive front-end interfaces
              for seamless user experiences.
            </p>
          </div>
          <div className="px-4 py-6 bg-[#ecf0f3] text-center">
            <div className="flex justify-center">
              <FaCodepen size={30} />
            </div>
            <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
              UI/UX Design
            </h3>
            <p className="text-gray-600 dark:text-black text-sm">
              Elevating user experiences through intuitive design and seamless
              interfaces for optional engagement.
            </p>
          </div>
          <div className="px-4 py-6 bg-[#ecf0f3] text-center">
            <div className="flex justify-center">
              <FaMobile size={30} />
            </div>
            <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
              Mobile Applications
            </h3>
            <p className="text-gray-600 dark:text-black text-sm">
              Building innovative mobile apps to enhance user convenience and
              deliver exceptional digital solutions.
            </p>
          </div>
          <div className="px-4 py-6 bg-[#ecf0f3] text-center">
            <div className="flex justify-center">
              <FaLaptopCode size={30} />
            </div>
            <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
              Full-Stack Development
            </h3>
            <p className="text-gray-600 dark:text-black text-sm">
              Seamless end-to-end web development for comprehensive digital
              experiences and effective online presence.
            </p>
          </div>
          <div className="px-4 py-6 bg-[#ecf0f3] text-center">
            <div className="flex justify-center">
              <BsHeadset size={30} />
            </div>
            <h3 className="font-bold tracking-wide text-gray-700 pt-2 pb-1 uppercase">
              IT Support
            </h3>
            <p className="text-gray-600 dark:text-black text-sm">
              Efficient and reliable IT support for seamless technology
              operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
