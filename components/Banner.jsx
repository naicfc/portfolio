import React from "react";

const Banner = () => {
  const background =
    "https://images.unsplash.com/photo-1589834390005-5d4fb9bf3d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

  return (
    <div
      className="flex justify-between items-center p-12 bg-center mt-[4rem]"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url(${background})`,
      }}>
      <div>
        <p className="mb-1 uppercase text-sm text-white">
          Have any project in mind?
        </p>
        <h2 className="lg:text-4xl font-normal  text-white capitalize">
          Dont Hesitate to contact me
        </h2>
      </div>
      <div>
        <a>
          <button
            className="cursor-pointer py-2 px-4 shadow-none rounded-md text-xs
            font-semibold hover:bg-[#2651d3] bg-[#4169e1] ease-in duration-200
            tracking-wide">
            {" "}
            COntact Me
          </button>
        </a>
      </div>
    </div>
  );
};

export default Banner;
