import React from 'react'

function Skill() {
  return (
    <div id='skills' className='w-full xl:h-screen p-4 flex items-center justify-center py-16 bg-white dark:bg-[#102A43] '>
        <div className='max-w-[1240px]  xl:grid md:gap-0 sm:grid-cols-2 gap-12'>
            <div className='mb-12'>
                <div>
                    <p className='text-center xl:text-left font-semibold md:pl-8 uppercase text-xl tracking-widest text-[#4169e1] dark:text-white'>Skills</p>
                </div>
                <div className='fade-in mt-12 grid grid-flow-row grid-rows-3 grid-cols-4 gap-2 justify-items-center items-center'>
                    <img className=' w-12 h-auto' src='/assets/skills/html.svg'/> 
                    <img className=' w-12 h-auto' src='/assets/skills/css.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/express.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/next-js.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/react.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/tailwind.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/node.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/sass.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/javascript.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/github.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/flutter.svg'/>  
                    <img className=' w-12 h-auto' src='/assets/skills/firebase.svg'/>         
                </div>
            </div>
            <div className='flex flex-col xl:flex-row gap-8'>
                <div className='p-[1px] mb-8 lg:mb-0 lg:mr-4 bg-[#4169e1] dark:bg-white rounded-full lg:translate-x-5 xl:translate-x-7'></div>
                    <div className='px-8'>
                        <div>
                            <p className='text-center xl:text-left font-semibold uppercase text-xl tracking-widest text-[#4169e1] dark:text-white'>About</p>
                        </div>
                        <div className='fade-in mt-12 space-y-3 text-justify '>
                            <p className='text-gray-600 dark:text-white'>
                                As a software developer, I am a skilled professional who
                                specializes in designing, developing, and testing software
                                applications. I have a deep understanding of programming 
                                languages, software frameworks, and development 
                                methodologies.
                                <br></br>
                                <br></br>
                                My work involves collaborating with other
                                developers, project managers, and stakeholders to create
                                innovative software solutions that meet the needs of
                                end-users. I have a keen eye for detail, strong 
                                problem-solving skills, and the ability to think 
                                creatively. I am constantly learning and staying up-to-date
                                with the latest trends and technologies in my field, 
                                and am driven by a passion for creating software that makes
                                a difference in people's lives. 
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