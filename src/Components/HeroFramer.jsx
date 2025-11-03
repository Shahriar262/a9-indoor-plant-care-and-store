import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import frame1 from "../assets/frame1.webp";
import frame2 from "../assets/frame2.jpg";
import frame3 from "../assets/frame3.jpg";

const HeroFramer = () => {
  const frames = [
    {
      img: frame1,
      text: "Bring Nature Closer to Home",
    },
    {
      img: frame2,
      text: "Breathe Fresh with Indoor Greens",
    },
    {
      img: frame3,
      text: "Grow Happiness, One Leaf at a Time",
    },
  ];
  return (
    <div className="w-full h-[60vh] md:h-[70vh]">
      <Swiper
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 3000 }}
        loop={true}
        navigation
        className="h-full"
      >
        {frames.map((frame, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <img
                src={frame.img}
                alt="Plant"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <h2 className="text-white text-[18px] md:text-4xl font-semibold text-center">
                  {frame.text}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroFramer;
