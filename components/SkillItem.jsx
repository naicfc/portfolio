import React from 'react'

export default function SkillItem({imageUrl}) {
  return (
    <div className="border-2 p-4 border-gray-400 rounded-md lg:w-32 lg:h-24 w-20 h-20 flex justify-center items-center hover:scale-105 duration-300">
      <img className=" w-12 h-auto" src={imageUrl} />
    </div>
  );
}
