import React from "react";
import Image from "next/image";
import profile from "../public/assets/about.png";

const Resume = () => {

  function buttonCheck (){
    console.log("resume button clicked")
  }
  return (
    <div
      id="about"
      className="lg:h-screen w-full flex flex-col md:flex-row gap-12 items-center justify-center py-16 px-8 lg:px-32 xl:px-48 dark:bg-[#102A43]">
      <div className="w-full items-center">
        <Image src={profile} alt="" />
      </div>
      <div className="w-full text-center md:text-left">
        <h3 className="mb-4 uppercase text-gray-700 font-semibold dark:text-white">
          A Little About Myself
        </h3>
        <p className=" mb-8 text-gray-600 text-sm leading-6 dark:text-white">
          As a software developer, I am a skilled professional who specializes
          in designing, developing, and testing software applications.
          {/*I have a deep understanding of programming languages, software frameworks, and
          development methodologies.*/}{" "}
          My work involves collaborating with other developers, project
          managers, and stakeholders to create innovative software solutions
          that meet the needs of end-users.
        </p>
        <a
          href="https://drive.google.com/file/d/1ClIOxrd4CrS2Dx6M5SQEyyyiQqwU37Pe/view?usp=drivesdk"
          target={"_blank"}>
          <button
            type="submit"
            onClick={buttonCheck}
            className="cursor-pointer py-2 px-4 shadow-none rounded-md text-xs font-semibold hover:bg-[#2651d3] bg-[#4169e1] ease-in duration-200 tracking-wide">
            Download resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
