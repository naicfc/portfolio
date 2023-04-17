import React from "react";
import ServiceItem from "./ServiceItem";
import front from "../public/assets/services/html.svg";
import back from "../public/assets/services/backend.svg";
import mobile from "../public/assets/services/phone.svg";
import support from "../public/assets/services/tech.svg";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full lg:h-screen flex items-center justify-center py-16 px-8 lg:px-32 dark:bg-[#102A43]">
      <div className="max-w-[1240px] w-full mx-auto">
        <div className="mb-8">
          <p className="text-center font-semibold uppercase text-xl tracking-widest text-[#4169e1] dark:text-white">
            Services
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <ServiceItem
            image={front}
            description="I design and develop intuitive and responsive front-end interfaces for seamless user experiences."
            title="Front-End Design"
          />
          <ServiceItem
            image={back}
            description="I provide robust and scalable back-end solutions to power your application's and services."
            title="Back-End Development"
          />
          <ServiceItem
            image={mobile}
            description="I craft user-friendly and feature-rich mobile apps for Android and iOS platforms."
            title="Application Development"
          />
          <ServiceItem
            image={support}
            description="Efficient and reliable IT support for seamless technology operations."
            title="IT Support"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
