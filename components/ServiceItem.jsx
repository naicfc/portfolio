import React from "react";
import Image from "next/image";

const ServiceItem = ({ image, title, description }) => {
  return (
    <div className="relative px-4 py-8 bg-[#fff] dark:bg-[#afd2f5] shadow-gray-600 dark:shadow-md shadow-lg hover:scale-105 ease-in-out duration-500 rounded-md z-[1] md:h-auto lg:h-auto">
      <Image src={image} alt="/" className="mb-6 pt-4" width={40} />
      <h3 className="text-lg font-semibold tracking-wide mb-4 text-[#1d2f66]">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-black">{description}</p>
    </div>
  );
};

export default ServiceItem;
