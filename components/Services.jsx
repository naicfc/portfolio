import React from 'react'
import ServiceItem from './ServiceItem'
import front from '../public/assets/services/html.svg'
import back from '../public/assets/services/backend.svg'
import mobile from '../public/assets/services/phone.svg'
import support from '../public/assets/services/tech.svg'


const Services = () => {
  return (
    <div id='services' className='w-full lg:h-screen flex items-center justify-center py-16 dark:bg-[#031629]'>
        <div className='max-w-[1240px] w-full mx-auto p-4 '>
            <div className='mb-8'>
            <p className='text-center font-semibold uppercase text-xl tracking-widest text-[#4169e1] dark:text-white'>Services</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-8">
                <ServiceItem image={front} description='Creating elegant designs suited for your needs following core design theory.' title='Front-End Design'/>
                <ServiceItem image={back} description='Do you hyave an idea for your next great website? Lets make it a reality.' title='Back-End Development'/>
                <ServiceItem image={mobile} description='Are you interested in feedback for your current project? I can give you tips and tricks.' title='Application Development'/>
                <ServiceItem image={support} description='Are you interested in feedback for your current project? I can give you tips and tricks.' title='IT Support'/>
            </div>
        </div>
    </div>
  )
}

export default Services