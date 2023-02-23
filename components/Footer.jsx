import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import Image from 'next/image'
import deved from '../public/dev-ed-wave.png'

const Footer = () => {
  return (
    <footer>
        <div className=' max-w-screen-xl mx-auto px-6 md:px-12 2xl:px-0 space-y-24 bg-white'>
            <div className='py-4 '>
                <div className=' flex flex-col space-y-8 md:space-y-0'>
                    <div className='flex flex-col md:flex-row justify-between space-y-4 border-b-2 border-gray-400 items-center p-4'>
                        <div className='flex justify-between space-x-4'>
                            <div className=' border-black border-2 rounded-full items-center'>
                                <Image src={deved} width={40} height={40}/>
                            </div>
                            <div className='text-gray-600'>
                                Designed and developed by <br/> <span className=' font-bold'><em>Godfred Nai</em></span>
                            </div>
                        </div>
                        <div className='flex justify-between space-x-4'>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 duration-500'>
                                <FaLinkedinIn />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 duration-500'>
                                <FaGithub />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 duration-500'>
                                <FaTwitter />
                            </div>
                            <div className='rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 duration-500'>
                                <FaTwitter />
                            </div>
                        </div>
                    </div>                    
                    <div className='text-center text-gray-600 p-4'>
                        All rights reserved | Copyright &copy;2023 GN
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer