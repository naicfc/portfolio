import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import {AiOutlineClose, AiOutlineMenu,AiOutlineMail} from 'react-icons/ai'
import {FaLinkedinIn,FaTwitter,FaGithub} from 'react-icons/fa'
import logo from '../public/assets/GAN.png'
import ThemeButton from './ThemeButton'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [mounted, setMounted] = useState(false);


  const handleNav= ()=>{
    setNav(!nav)
  };

  useEffect(()=>{
    const handleShadow = () =>{
      if(window.scrollY >= 90){
        setShadow(true)
      }else{
        setShadow(false)
      }
    }
    window.addEventListener('scroll', handleShadow)
  },[]);

  useEffect(()=>
    setMounted(true),[]
  );

  return (
    <div className={shadow ? 'fixed w-full h-16 shadow-xl z-[100] py-8 px-8 xl:px-16 bg-[#ecf0f3] dark:bg-[#020c16]' : 'fixed w-full h-16 z-[100] py-8 px-8 xl:px-16 '}>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Link href='/'>
              <Image src={logo} alt="gan" className='w-28 h-auto' />
            </Link>
            <div>
                <ul className='hidden md:flex md:items-center'>
                    <Link href='/'>
                      <li className='ml-10 text-sm font-semibold uppercase  hover:border-b hover:border-[#4169e1] hover:duration-500 dark:text-white'>Home</li>
                    </Link>
                    <Link href='/#skills'>
                      <li className='ml-10 text-sm  font-semibold uppercase hover:border-b hover:border-[#4169e1] dark:text-white'>About</li>
                    </Link>
                    <Link href='/#services'>
                      <li className='ml-10 text-sm  font-semibold uppercase hover:border-b hover:border-[#4169e1] dark:text-white'>Services</li>
                    </Link>
                    <Link href='/#projects'>
                      <li className='ml-10 text-sm  font-semibold uppercase hover:border-b hover:border-[#4169e1] dark:text-white'>Projects</li>
                    </Link>
                    <Link href='/#contact'>
                      <li className='ml-10 text-sm  font-semibold uppercase hover:border-b hover:border-[#4169e1] dark:text-white'>Contact</li>
                    </Link>
                    <li className='cursor-default ml-10'><div className='flex items-center'>{mounted && <ThemeButton />}</div></li>
                </ul>
                <div onClick={handleNav} className=' md:hidden cursor-pointer'>
                  <AiOutlineMenu size={25}/>
                </div>
            </div>
        </div>  
        
        <div className={nav ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div className={nav 
                            ? ' fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] dark:bg-[#020c16] dark:text-white p-10 ease-in duration-500'
                            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
            <div>
              <div className='flex w-full items-center justify-between'>
                <Link href='/'>
                  <Image src="/../public/assets/GAN.png" width={87} height={35} alt='/' />
                </Link>
                <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-400 dark:shadow-md p-3 cursor-pointer'>
                  <AiOutlineClose />
                </div>
              </div>
              <div className='border-b border-gray my-4 '>
                <p className='w-[85%] md:w-[90%] py-4 dark:text-white'>Let's build something legendary together</p>
              </div>
            </div>
            <div className='py-4 flex-col'>
              <ul className='uppercase'>
                <Link href='/'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm dark:text-white'>Home</li>
                </Link>
                <Link href='/#skills'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm dark:text-white'>About</li>
                </Link>
                <Link href='/#services'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm dark:text-white'>Skills</li>
                </Link>
                <Link href='/#projects'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm dark:text-white'>Projects</li>
                </Link>
                <Link href='/#contact'>
                <li onClick={()=>setNav(false)} className='py-4 text-sm dark:text-white'>Contact</li>
                </Link>
              </ul>
              <div className='pt-4'>
                <p className='uppercase font-bold tracking-widest text-[#4169e1] dark:text-white'>Let's connect</p>
                <div className='flex items-center justify-between my-4 w-full'>
                  <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaTwitter />
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 dark:shadow-md p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
    </div>
  )
}

export default Navbar