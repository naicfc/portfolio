import Link from 'next/link'
import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'
import { useState } from 'react'
import { useEffect } from 'react'

const Scroll = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(()=>{
    const handleBackToTop=()=>{
      if(window.scrollY>=90){
        setBackToTop(true);
      }else{
        setBackToTop(false);
      }
    }
    window.addEventListener('scroll', handleBackToTop)
  },[])

  return (
    <div className={backToTop? 'hidden md:flex fixed bottom-5 right-10' : 'hidden'}>
        <Link href='/'>
            <div className='rounded-md shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp size={20} color='#4169e1'/>
            </div>
        </Link>
    </div>
  )
}

export default Scroll