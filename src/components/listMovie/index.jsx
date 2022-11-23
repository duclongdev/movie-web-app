import React from "react";
import Card from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "./index.css";
import { Navigation } from "swiper";
import data from "../../assets/data/listMovie.js";

const ListMovie = () => {
  return (
    <div>
      {data.map((e, index) => (
        <div
          key={index}
          className="flex mx-14 justify-around relative top-[-5rem] mb-16 bg-none "
        >
          <h1 className="absolute left-0 text-white top-[-2rem]   ">
            {e.title}
          </h1>
          <Swiper
            slidesPerView={6}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="pl-4 ml-[-2rem]"
            modules={[Navigation]}
          >
            {e.movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <Card data={movie} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ))}
    </div>
  );
};

export default ListMovie;
