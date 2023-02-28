import React from 'react'
import ProjectItem from './ProjectItem'
import web1 from '../public/assets/web1.png'
import web4 from '../public/assets/web4.png'
import web5 from '../public/assets/web5.png'
import web6 from '../public/assets/web6.png'

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-16'>
        <div className='max-w-[1240px] mx-auto px-2 py-16 text-center md:mb-16'>
            <p className='text-xl tracking-widest uppercase font-semibold text-[#4169e1]'>Projects</p>
            <h2 className='py-4'>What i built</h2>
            <div className='grid md:grid-cols-2 gap-8'>
             <ProjectItem title='Project 1' backgroundImg={web1} projectUrl='/1' stack='React Js'/>
             <ProjectItem title='Project 2' backgroundImg={web4} projectUrl='/2' stack='Next Js'/>
             <ProjectItem title='Project 3' backgroundImg={web5} projectUrl='/3' stack='Next Js'/>
             <ProjectItem title='Project 4' backgroundImg={web6} projectUrl='/4' stack='React Js'/>
            </div>
        </div>
    </div>
  )
}

export default Projects