import React from 'react'
import ServiceItem from './ServiceItem'
import Image from 'next/image'
import design from '../public/assets/design.png'
import code from '../public/assets/code.png'
import consulting from '../public/assets/consulting.png'

const Services = () => {
  return (
    <div id='services' className='w-full  text-center lg:h-screen flex items-center justify-center py-16 '>
        <div className='max-w-[1240px] w-full mx-auto p-4 '>
            <div>
            <p className='text-center font-semibold uppercase text-xl tracking-widest text-[#4169e1]'>Services i offer</p>
            </div>
            <div className="lg:flex justify-center items-center gap-10">
                <ServiceItem image={design} description='Creating elegant designs suited for your needs following core
                design theory.' title='Front-end Design' tool1='HTML + CSS' tool2='React Js' tool3='Node Js' />
                <ServiceItem image={code} description='Do you hyave an idea for your next great website? Lets make it a reality.' title='Back-end Development' tool1='Node Js' tool2='Express js' tool3='Mongo DB' />
                <ServiceItem image={consulting} description='Are you interested in feedback for your current project? I can
                give you tips and tricks.' title='Application Development' tool1='React Native' tool2='C#' tool3='Flutter' />
            </div>
        </div>
    </div>
  )
}

export default Services