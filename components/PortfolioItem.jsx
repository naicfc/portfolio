import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";

const PortfolioItem = ({ image, title, github, live }) => {
  return (
    <div className="shuffle-item">
      <div className="project-img-container h-48">
        <a className="gallery-popup" href="">
          <Image src={image} alt="" className=""/>
        </a>
        <div className="project-item-info">
          <div className="project-item-info-content">
            <h2 className="uppercase font-semibold text-base text-white">
              {title}
            </h2>
            <div className="flex gap-2">
              <a target="_blank" href={github}>
                <div className="border-2 px-2 py-1 cursor-pointer border-white flex items-center gap-1 text-xs text-white hover:scale-105 duration-100">
                  <FaGithub />
                  <p>Github</p>
                </div>
              </a>
              <a target="_blank" href={live}>
                <div className="border-2 px-2 py-1 cursor-pointer border-white flex items-center gap-1 text-xs text-white hover:scale-105 duration-100">
                  <BsGlobe />
                  <p>Live</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
