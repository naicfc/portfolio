import React from 'react'

const ServicesItem = () => {
  return (
    <div className="px-4 py-4 cursor-default dark:bg-[#afd2f5] shadow-gray-300 dark:shadow-md shadow-md hover:scale-105 ease-in-out duration-500 rounded-md z-[1] md:h-auto lg:h-auto border-b-4 border-blue-500">
      <div className="flex items-center gap-2 mb-2">
        
        <h3 className="font-semibold tracking-wide text-gray-700">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-black text-sm">{description}</p>
    </div>
  );
}

export default ServicesItem;