import React from "react";
import ImageGallery from "react-image-gallery";

const egsi = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  return (
    <div className="w-full py-16 pt-20 px-8 lg:px-32  dark:bg-[#102A43] dark:text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10">
        <div className="">
          <ImageGallery
            items={images}
            showPlayButton={false}
            showFullscreenButton={false}
            showNav={false}
          />
        </div>
        <div className="w-full border-2 border-gray-300 rounded p-4"></div>
      </div>
    </div>
  );
};

export default egsi;
