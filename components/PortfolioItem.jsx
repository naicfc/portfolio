import React from "react";
import Image from "next/image";
import web1 from "../public/assets/projects/project4.jpg";

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
              <p className="project-cat cursor-pointer py-2 px-3 text-sm">
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
