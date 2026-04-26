import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const cities = [
  {
    name: "New York",
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=600&q=80",
  },
  {
    name: "San Francisco",
    image: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=600&q=80",
  },
  {
    name: "Washington, DC",
    image: "https://images.unsplash.com/photo-1501466044931-62695aada8e9?w=600&q=80",
  },
  {
    name: "Chicago",
    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
  },
  {
    name: "Los Angeles",
    image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
  },
];

const Locations = () => {
  return (
    <section className="py-20 px-10 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-12">
        <h5 className="text-[#22c55e] text-base font-medium tracking-wide mb-2">
          Locations
        </h5>
        <h2 className="text-[42px] font-normal text-gray-900">
          Our U.S. Cities
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
        {cities.map((city) => (
          <SwiperSlide key={city.name}>
            <div className="cursor-pointer group">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-[300px] object-cover rounded-2xl"
              />
              <p className="mt-4 text-lg font-medium underline underline-offset-4 text-gray-900 group-hover:text-green-500 transition-colors">
                {city.name} →
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Locations;