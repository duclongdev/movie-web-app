import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useState } from "react";

const data = ["1-60", "61-120", "121-180", "181-240", "241-271"];
var curValue = 0;


const My_Swiper = () => {
  const [current, setCurrent] = useState(0);

  const handleClick = (index) => {
    setCurrent(index);
    curValue = current;
};

  return (
    <div className="khung-slider flex items-center mt-4 dark:text-gray-200 ">
      <div className="prevPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>

      <Swiper
        slidesPerView={3}
        navigation={{
          nextEl: ".nextPage",
          prevEl: ".prevPage",
          disabledClass: "opacity-25 cursor-not-allowed",
          enabled: true,
        }}
        modules={[Navigation]}
        className="mySwiper text-center text-sm font-bold leading-2">
        {data.map((value, index) => {
          let classes = "focus:underline cursor-pointer font-semibold";
          if (index === current)
            classes += " text-green-500 underline decoration-2";
          return (
            <SwiperSlide key={index}>
              <div className={classes} onClick={() => handleClick(index)}>
                {value}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="nextPage">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default My_Swiper;
export {curValue};
