import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'

function Main() {
  return (
    <div id='main' className='w-full h-screen text-center dark:bg-[#031629] dark:text-white'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                <p className='uppercase text-sm tracking-widest text-gray-600 dark:text-white'>Let's build something together</p>
                <h1 className='py-4 text-gray-700 dark:text-white'>Hi, I'm <span className='text-[#4169e1]'>Godfred</span></h1>
                <h1 className='py-2 text-gray-700 dark:text-white'>A Front-End Web Developer</h1>
                <p className='py-4 text-gray-600 max-w-[70%] m-auto dark:text-white'>I'm a front-end web developer specializing in building (and
                    occasionally designing) exceptional digital experiences. Currently, 
                    I'm focused on building front-end web applications while learning back-end technologies.
                </p>
                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <div className='rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500'>
                        <FaLinkedinIn />
                    </div>
                    <div className='rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500'>
                        <FaGithub />
                    </div>
                    <div className='rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500'>
                        <FaTwitter />
                    </div>
                    <div className='rounded-full shadow-lg dark:shadow-md shadow-gray-400 p-6 cursor-pointer hover:scale-110 duration-500'>
                        <AiOutlineMail />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main