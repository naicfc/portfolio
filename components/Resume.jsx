import React from 'react'

const Resume = () => {
  return (
    <div id='resume' className='w-full py-1 p-4 mt-8'>
        <div className='max-w-[1000px] m-auto bg-[#4169e1] p-8 rounded-lg'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-8 '>
                <h2 className='text-[#ecf0f3]'>Take a look at my Resume.</h2>
                <button type='submit' className='border-[#FFA500] w-3/6 md:w-2/6 text-center border-2 font-semibold p-3 text-sm lg:text-lg rounded-full cursor-pointer shadow-lg
                hover:scale-105 hover:-translate-y1 hover:shadow-lg hover:-translate-y-[2px transition-all duration-200 text-[#FFA500]'>Download Resume</button>
            </div>
        </div>
    </div>
  )
}

export default Resume
