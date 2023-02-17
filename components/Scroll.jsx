import Link from 'next/link'
import React from 'react'
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

const Scroll = () => {
  return (
    <div className='flex justify-center py-12'>
        <Link href='/'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp size={20} color='#4169e1'/>
            </div>
        </Link>
    </div>
  )
}

export default Scroll