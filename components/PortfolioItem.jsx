import React from "react";
import Image from "next/image";

const PortfolioItem = ({ image, title }) => {
  return (
    <div className="shuffle-item">
      <div className="project-img-container h-48">
        <a className="gallery-popup" href="">
          <Image src={image} alt="" />
        </a>
        <div className="project-item-info">
          <div className="project-item-info-content">
            <h2 className="uppercase font-semibold text-lg text-white">
              {title}
            </h2>
            <a>
              <p className="inline text-white cursor-pointer py-2 text-sm hover:text-base hover:text-[#4169e1] duration-300">
                View Project
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
