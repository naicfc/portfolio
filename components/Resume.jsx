import React from "react";

const Resume = () => {
  return (
    <div
      id="resume"
      className=" bg-cover bg-[#4169e1] py-14 dark:bg-[#102A43] dark:shadow-gray-200 dark:shadow-md">
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-white font-semibold mb-2">My Resume</h2>
          <p className="text-white text-[20px] mb-4">
            Take a look at my resume
          </p>
          <a
            href="https://drive.google.com/file/d/1ClIOxrd4CrS2Dx6M5SQEyyyiQqwU37Pe/view?usp=drivesdk"
            target={"_blank"}>
            <button
              type="submit"
              className=" tracking-widest cursor-pointer border-white border-2 py-2 px-8 shadow-none rounded-md text-sm font-semibold hover:bg-white hover:text-[#4169e1] ease-in duration-200">
              Download
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
