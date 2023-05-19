import React from "react";
import Image from "next/image";
import profile from "../public/assets/dev-ed-wave.png";

const Resume = () => {
  return (
    <div
      id="about"
      className="lg:h-screen w-full flex flex-col md:flex-row gap-12 items-center justify-center py-16 px-8 lg:px-32 dark:bg-[#102A43]">
      <div className="w-full items-center">
        <Image src={profile} alt="" />
      </div>
      <div className="w-full text-center md:text-left">
        <h3 className="mb-4 uppercase text-gray-700 font-semibold">
          A Little About Myself
        </h3>
        <p className=" mb-8 text-gray-600 text-sm">
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
            className="cursor-pointer py-2 px-4 shadow-none rounded-md text-sm hover:bg-white hover:text-[#4169e1] bg-[#4169e1] ease-in duration-200">
            Download resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Resume;
