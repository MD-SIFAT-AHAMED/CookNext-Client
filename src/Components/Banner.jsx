import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import hero from "../assets/hero.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";


const cookbooks = [
  {
    title: "The Ultimate Vegan Cookbook",
    image: hero,
    description: "100+ plant-based recipes that are healthy and delicious.",
  },
  {
    title: "Quick & Easy Meals",
    image: hero2,
    description: "Make tasty meals in under 30 minutes.",
  },
  {
    title: "Baking Bliss",
    image: hero3,
    description: "From cookies to cakes, master the art of baking.",
  },
];

const Banner = () => {
  return (
    <div className="max-w-screen-2xl w-11/12 mx-auto my-10">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
        className="rounded-xl"
      >
        {cookbooks.map((book, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-xl  overflow-hidden">
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-90 object-cover"
              />
              <div className="p-6 bg-gray-100">
                <h3 className="text-2xl font-semibold text-orange-500">
                  {book.title}
                </h3>
                <p className="text-gray-600 mt-2">{book.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
