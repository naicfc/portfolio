import React from "react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";

const PortfolioItem = ({ image, title, link, live }) => {
  return (
    <div className="shuffle-item">
      <div className="project-img-container h-48">
        <a className="gallery-popup" href="">
          <Image src={image} alt="" className="" />
        </a>
        <div className="project-item-info">
          <div className="project-item-info-content">
            <h2 className="font-medium text-sm text-white mb-1">{title}</h2>
            <div className="flex gap-2">
              <Link href={link}>
                <div className="border-2 px-2 py-1 cursor-pointer border-white flex items-center gap-1 text-xs text-white hover:bg-[#4169e1] transition-all hover:border-[#4169e1] duration-500 rounded">
                  <p>Learn More</p>
                </div>
              </Link>

              <a target="_blank" href={live}>
                <div className="border-2 px-2 py-1 cursor-pointer border-white flex items-center gap-1 text-xs text-white hover:bg-[#4169e1] transition-all hover:border-[#4169e1] duration-500 rounded">
                  <p>View Live</p>
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
