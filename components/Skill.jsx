import React from 'react'

function Skill() {
  return (
    <div id='skills' className='w-full md:h-screen p-4 flex items-center justify-center py-16 bg-white dark:bg-black'>
        <div className='max-w-[1240px]  md:grid md:gap-0 sm:grid-cols-2 gap-12'>
            <div className='mb-12'>
                <div>
                    <p className='text-center md:text-left font-semibold md:pl-8 uppercase text-xl tracking-widest text-[#4169e1]'>Skills</p>
                </div>
                <div className='fade-in mt-12 grid grid-flow-row grid-rows-3 grid-cols-4 gap-2 justify-items-center items-center'>
                    <img className=' w-12 h-auto' src='/assets/skills/html.svg'/> 
                    <img className=' w-12 h-auto' src='/assets/skills/css.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/express.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/next-js.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/react.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/tailwind.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/node.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/git.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/javascript.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/github.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/flutter.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/firebase.svg'/>         
                </div>
            </div>
            <div className='flex flex-col md:flex-row gap-8'>
                <div className='p-[1px] mb-8 md:mb-0 md:mr-4 bg-[#4169e1] rounded-full lg:translate-x-5 xl:translate-x-7'></div>
                <div className='px-8'>
                <div>
                    <p className='text-center md:text-left font-semibold uppercase text-xl tracking-widest text-[#4169e1]'>About</p>
                </div>
                <div className='fade-in mt-12 space-y-3 text-justify'>
                    <p className='text-gray-600 '>"Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua."
                 <br></br>
                 <br></br>
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                 sed do eiusmod tempor incididunt ut labore et dolore 
                 magna aliqua. Ut enim ad minim veniam, quis nostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea 
                 commodo consequat. Duis aute irure dolor in reprehenderit 
                 in voluptate velit esse cillum dolore eu fugiat nulla 
                 pariatur.Ut enim ad minim veniam, quis nostrud 
                 exercitation ullamco laboris nisi ut aliquip ex ea 
                 commodo consequat. 
                 <br></br>
                 <br></br> 
                 </p>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill