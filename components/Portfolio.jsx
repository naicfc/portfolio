import React from "react";
import PortfolioItem from "./PortfolioItem";
import project1 from "../public/assets/projects/web1.png";
import project2 from "../public/assets/projects/web4.png";
import project3 from "../public/assets/projects/web6.png";
import project4 from "../public/assets/projects/web5.png";
import project5 from "../public/assets/projects/project5.jpg";
import project6 from "../public/assets/projects/project6.jpg";

const Portfolio = () => {
  return (
    <div
      id="projects"
      className="min-h-screen px-8 lg:px-32 py-8 dark:bg-[#102A43] flex flex-col justify-center items-center">
      <div>
        <div className="text-center">
          <p className="text-xl tracking-widest uppercase font-semibold text-gray-700 dark:text-white  mb-4">
            Projects
          </p>
          <p className="text-gray-600 text-center mb-8 dark:text-white">
            Here are some of my most recent works.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          <PortfolioItem image={project1} title="EGS International" />
          <PortfolioItem image={project2} title="RENT - UP" />
          <PortfolioItem image={project3} title="project 3" />
          <PortfolioItem image={project4} title="project 4" />
          <PortfolioItem image={project5} title="project 5" />
          <PortfolioItem image={project6} title="project 6" />
          <PortfolioItem image={project1} title="project 1" />
          <PortfolioItem image={project2} title="project 2" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
