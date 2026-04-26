import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const core = [
  {
    name: "Safety",
    images: "/src/assets/SAFETY.png",
  },
  {
    name: "Sustainability",
    images: "/src/assets/SUSTAINABILITY.png",
  },
  {
    name: "Community",
    images: "/src/assets/community.png",
  },
]

const Principles = () => {
  return (
    <section className="py-20 px-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-[#22c55e] text-base font-medium tracking-wide mb-2">
          Why Lime
        </h5>
        <h2 className="text-[42px] font-normal text-gray-900">
          Our Core Principles
        </h2>
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {core.map((item) => (
          <SwiperSlide key={item.name}>
            <div className="cursor-pointer group">
              <img
                src={item.images}  
                alt={item.name}
                className="w-full h-[300px] object-cover rounded-2xl"
              />
              <p className="mt-4 text-lg font-medium underline underline-offset-4 text-gray-900 group-hover:text-green-500 transition-colors">
                {item.name}  
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Principles