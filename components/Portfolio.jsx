import React from "react";
import PortfolioItem from "./PortfolioItem";
import project1 from "../public/assets/projects/web1.png";
import project2 from "../public/assets/projects/web4.png";
import project3 from "../public/assets/projects/web6.png";
import project4 from "../public/assets/projects/web5.png";
import project5 from "../public/assets/projects/project5.jpg";
import project6 from "../public/assets/projects/project6.jpg";
import egsi from "../public/assets/projects/egsi.png";
import data from "@/public/data/projectData";

const Portfolio = () => {
  return (
    <div
      id="projects"
      className="min-h-screen px-8 lg:px-32  py-8 dark:bg-[#102A43] flex flex-col justify-center items-center">
      <div>
        <div className="text-center mb-8">
          <p className="mb-1 uppercase font-medium dark:text-white text-[#4169e1]">
            Portfolio
          </p>
          <h2 className="lg:text-4xl font-normal text-gray-700 dark:text-white capitalize">
            Some of my recent works
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
          <PortfolioItem
            image={egsi}
            title="EGS International"
            link="/projects/egsi"
            live="https://github.com/naicfc/egsi"
          />
          <PortfolioItem
            image={project2}
            title="RENT - UP"
            link="/projects/egsi"
          />
          <PortfolioItem
            image={project3}
            title="project 3"
            link="/projects/egsi"
          />
          <PortfolioItem
            image={project4}
            title="project 4"
            link="/projects/egsi"
          />
          <PortfolioItem
            image={project5}
            title="project 5"
            link="/projects/egsi"
          />
          <PortfolioItem
            image={project6}
            title="project 6"
            link="/projects/egsi"
          />
          <PortfolioItem
            image={project1}
            title="project 1"
            link="/projects/egsi"
          />
          <PortfolioItem
            image={project2}
            title="project 2"
            link="/projects/egsi"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
