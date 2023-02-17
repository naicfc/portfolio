import React from 'react'
import Image from 'next/image'

const ServiceItem = ({image, title, description, tool1, tool2, tool3 }) => {
  return (
          <div className="text-center bg-[#ecf0f3] shadow-lg p-4 rounded-xl my-8 flex-1 items-center justify-center">
            <Image src={image} alt='/' className='mx-auto m-4' width={80} />
            <h3 className="text-lg font-medium pt-4 pb-1  text-gray-600">
              {title}
            </h3>
            <p className="py-1 text-gray-600">
              {description}
            </p>
            <h4 className="py-2 text-[#4169e1]">Design Tools I Use</h4>
            <p className="text-gray-600 py-1">{tool1}</p>
            <p className="text-gray-600 py-1">{tool2}</p>
            <p className="text-gray-600 py-1">{tool3}</p>
          </div>        
  )
}

export default ServiceItem