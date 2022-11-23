import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";

const My_Recommend = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [hoverIndex, setHoverIndex] = useState();
  
  const data = [
    {
      image:
        "https://pic0.iqiyipic.com/image/20211206/f2/2e/a_100421840_m_601_en_m1_260_360.webp",
      filmName: "One Piece",
      totalEpisode: "1036 Episodes",
      status: "On Going",
    },
    {
      image:
        "https://pic9.iqiyipic.com/image/20210812/10/4d/a_100464174_m_601_en_260_360.webp",
      filmName: "Naruto",
      totalEpisode: "104 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic3.iqiyipic.com/image/20201022/51/af/a_100426783_m_601_en_260_360.webp",
      filmName: "JUJUTSU KAISEN",
      totalEpisode: "24 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201031/64/01/a_100426612_m_601_en_260_360.webp",
      filmName: "Haikyu!!TO THE TOP",
      totalEpisode: "25 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic3.iqiyipic.com/image/20220120/ad/28/a_100477763_m_601_en_m3_260_360.webp",
      filmName: "Haikyu!! Second Season",
      totalEpisode: "25 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic0.iqiyipic.com/image/20210317/01/b3/a_100448836_m_601_en_260_360.webp",
      filmName: "One Punch Man",
      totalEpisode: "24 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic8.iqiyipic.com/image/20210309/ac/33/a_100449112_m_601_en_260_360.webp",
      filmName: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
      totalEpisode: "26 Episodes",
      status: "Completed",
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201225/d5/93/a_100432281_m_601_zh-CN_m1_260_360.webp",
      filmName: "Dragon Ball Super",
      totalEpisode: "131 Episodes",
      status: "Completed",
    },
  ];

  return (
    <div className="khung-slider flex items-center mt-2">
      <div className="_prevPage">
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
        slidesPerView={6}
        navigation={{
          nextEl: "._nextPage",
          prevEl: "._prevPage",
          disabledClass: "opacity-25 cursor-not-allowed",
          enabled: true,
        }}
        spaceBetween={15}
        modules={[Navigation]}
        className="mySwiper text-sm font-bold leading-2 pt-[10px] px-[10px]"
      >
        {data.map((value, index) => {
          let classes =
            "w-1/2 focus:cursor-pointer hover:text-green-500 relative";
          let test =
            "transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-100";

          let playBtn = "absolute right-[35%] bottom-[40%] w-[35px] h-[35px] rounded-[50%]";

          let addBtn = "absolute right-[35%] bottom-[40%] w-[35px] h-[35px] rounded-[50%]";

          return (
            <SwiperSlide key={index}>
              <div className={test}>
                <a href="#" className={classes} onMouseOver={() => setHoverIndex(index)} onMouseLeave={() => setHoverIndex()}>
                  <div className="relative">
                    <svg
                    className={hoverIndex === index ? playBtn = "absolute right-[35%] bottom-[40%] w-[35px] h-[35px] rounded-[50%]" : playBtn += " hidden"}
                    width="60px"
                    height="60px"
                    viewBox="0 0 60 60"
                    version="1.1">
                    <g
                      id="Btn/Play/Normal"
                      stroke="none"
                      strokeWidth="1"
                      fillRule="evenodd"
                      className="fill-[#1CC749] hover:fill-green-400"
                    >
                      <circle
                        id="bg"
                        cx="30"
                        cy="30"
                        r="30"                        
                      ></circle>
                      <path
                        d="M35.7461509,22.4942263 L45.1405996,36.5858994 C46.059657,37.9644855 45.6871354,39.8270935 44.3085493,40.7461509 C43.8157468,41.0746859 43.2367237,41.25 42.6444487,41.25 L23.8555513,41.25 C22.198697,41.25 20.8555513,39.9068542 20.8555513,38.25 C20.8555513,37.657725 21.0308654,37.078702 21.3594004,36.5858994 L30.7538491,22.4942263 C31.6729065,21.1156403 33.5355145,20.7431187 34.9141006,21.662176 C35.2436575,21.8818806 35.5264463,22.1646695 35.7461509,22.4942263 Z"
                        id="Triangle"
                        fill="#FFFFFF"
                        transform="translate(33.250000, 30.000000) rotate(-270.000000) translate(-33.250000, -30.000000) "
                      ></path>
                    </g>
                    </svg>

                    <svg className={hoverIndex === index ? addBtn = "absolute right-[6px] bottom-[6px] w-[35px] h-[35px] rounded-[50%] z-10" : addBtn += " hidden"}
                      width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g id="Btn/Add/Hover" stroke="none" strokeWidth="1" fillRule="evenodd" className="opacity-70 hover:fill-white hover:opacity-100">
                        <circle id="bg" fill="#FFFFFF" cx="30" cy="30" r="30" ></circle>
                        <path d="M29.3055556,17.25 C29.6890866,17.25 30,17.5609134 30,17.9444444 L30,19.3888889 C30,19.77242 29.6890866,20.0833333 29.3055556,20.0833333 L22.9166667,20.0833333 L22.9166667,39.724 L28.6396082,34.9562398 C29.3713667,34.346441 30.4106369,34.302884 31.1863257,34.8255686 L31.3603918,34.9562398 L37.0833333,39.7254167 L37.0833333,33.5277778 C37.0833333,33.1442467 37.3942467,32.8333333 37.7777778,32.8333333 L39.2222222,32.8333333 C39.6057533,32.8333333 39.9166667,33.1442467 39.9166667,33.5277778 L39.9166667,41.2376789 C39.9166667,42.4112764 38.9652794,43.3627321 37.7916667,43.3627321 C37.3655561,43.3627321 36.9510168,43.2346313 36.6007867,42.9976358 L36.4312748,42.8701491 L30,37.50975 L23.5687252,42.8701491 C22.7234861,43.574515 21.4929682,43.5114751 20.7233835,42.7579578 L20.5758631,42.5980707 C20.3030814,42.2707327 20.1360669,41.8703014 20.0939154,41.4495208 L20.0833333,41.2376789 L20.0833333,20.0833333 C20.0833333,18.5896541 21.2391602,17.3659327 22.7052117,17.2577715 L22.9166667,17.25 L29.3055556,17.25 Z M39.2222222,17.25 C39.6057533,17.25 39.9166667,17.5609134 39.9166667,17.9444444 L39.9163333,21.499 L43.4722222,21.5 C43.8557533,21.5 44.1666667,21.8109134 44.1666667,22.1944444 L44.1666667,23.6388889 C44.1666667,24.02242 43.8557533,24.3333333 43.4722222,24.3333333 L39.9163333,24.333 L39.9166667,27.8888889 C39.9166667,28.27242 39.6057533,28.5833333 39.2222222,28.5833333 L37.7777778,28.5833333 C37.3942467,28.5833333 37.0833333,28.27242 37.0833333,27.8888889 L37.0823333,24.333 L33.5277778,24.3333333 C33.1442467,24.3333333 32.8333333,24.02242 32.8333333,23.6388889 L32.8333333,22.1944444 C32.8333333,21.8109134 33.1442467,21.5 33.5277778,21.5 L37.0823333,21.499 L37.0833333,17.9444444 C37.0833333,17.5609134 37.3942467,17.25 37.7777778,17.25 L39.2222222,17.25 Z" fill="#111319" fillRule="nonzero"></path>
                      </g>
                    </svg>

                    <img src={value.image} alt="" className="rounded-md" />
                    <div className="absolute bottom-0 w-full h-[40%] bg-gradient-to-t from-black rounded-b-md"></div>
                    <span className="absolute text-white font-medium bottom-1 w-full text-left pl-2 line-clamp-1">
                      {value.totalEpisode}
                    </span>
                  </div>

                  <h2 className="mt-2 line-clamp-2">{value.filmName}</h2>
                </a>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="_nextPage">
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

export default My_Recommend;
