import React from "react";
import { BsHeadset, BsLaptop, BsServer } from "react-icons/bs";
import {
  FaCode,
  FaCodepen,
  FaGlobe,
  FaLaptopCode,
  FaMobile,
  FaWindows,
} from "react-icons/fa";
import Banner from "./Banner";

const Service = () => {
  return (
    <div
      id="services"
      className="md:min-h-screen px-8 lg:px-32  py-8 dark:bg-[#102A43] bg-[#e3e6f0] flex flex-col justify-center items-center">
      <div className="">
        <div className="text-center">
          <p className="mb-1 uppercase font-medium dark:text-white text-[#4169e1]">
            Services i offer
          </p>
          <h2 className="lg:text-4xl font-normal  text-gray-700 dark:text-white">
            What Can I Do For you?
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 py-12 mb-6">
          <div className="">
            <div className="h-full border-gray-400 rounded-md border-2 flex gap-4 px-4 py-8">
              <div className="">
                <div className="p-2 bg-[#4169e1]/30 rounded-full">
                  <BsLaptop size={25} color="#4169e1" />
                </div>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-gray-500 pb-1">
                  Web Design
                </p>
                <p className="text-gray-600 dark:text-black text-xs">
                  Crafting captivating websites that blend creativity and
                  functionality for an impactful online presence.
                </p>
              </div>
            </div>
          </div>
          <div className=" bg-[#4169e1] shadow-md rounded">
            <div className="h-full  rounded-md flex gap-4 px-4 py-8 ">
              <div className="">
                <div className="p-2 bg-white rounded-full">
                  <FaLaptopCode size={25} color="#4169e1" />
                </div>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-white pb-1">
                  Web Development
                </p>
                <p className="text-white dark:text-black text-xs">
                  I design and develop intuitive and responsive front-end
                  interfaces for seamless user experiences.
                </p>
              </div>
            </div>
          </div>
          <div className="">
            <div className="h-full border-gray-400 rounded-md border-2 flex gap-4 px-4 py-8">
              <div className="">
                <div className="p-2 bg-[#4169e1]/30 rounded-full">
                  <FaMobile size={25} color="#4169e1" />
                </div>
              </div>
              <div>
                <p className="font-semibold tracking-wide text-gray-500 pb-1">
                  Mobile Applications
                </p>
                <p className="text-gray-600 dark:text-black text-xs">
                  Building innovative mobile apps to enhance user convenience
                  and deliver exceptional digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Banner />
      </div>
    </div>
  );
};

export default Service;
