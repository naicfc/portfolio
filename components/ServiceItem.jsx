import React from "react";
import Image from "next/image";

const ServiceItem = ({ image, title, description }) => {
  return (
    <div className="px-4 py-4 bg-[#fff] dark:bg-[#afd2f5] shadow-gray-300 dark:shadow-md shadow-md hover:scale-105 ease-in-out duration-500 rounded-md z-[1] md:h-auto lg:h-auto border-b-4 border-blue-500">
      <Image src={image} alt="/" className="mb-6 pt-4" width={40} />
      <h3 className="text-lg font-semibold tracking-wide mb-4 text-[#1d2f66]">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-black text-sm">{description}</p>
    </div>
  );
};

export default ServiceItem;
