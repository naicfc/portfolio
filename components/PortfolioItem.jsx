import React from 'react'
import Image from 'next/image'
import web1 from '../public/assets/projects/project4.jpg'

const PortfolioItem = ({image,title}) => {
  return (
    <div className='p-0 shuffle-item'>
        <div className='project-img-container'>
            <a className="gallery-popup" href="">
                <Image src={image} alt=""/>
            </a>
            <div className="project-item-info">
                <div className="project-item-info-content">
                    <h2 className="project-item-title">
                        <a href="" className='uppercase'>{title}</a>
                    </h2>
                    <a ><p className="project-cat cursor-pointer">More Info</p></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PortfolioItem