import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import SummaryInfo from "../../components/summaryInfo";
import Slider from "react-slick";
import { NextIcon, PreIcon } from "../../assets";
import ListMovie from "../../components/listMovie";
import data from "../../assets/data/homeBaner";

const PrA = (props) => {
  const { className, onClick, size } = props;

  return (
    <div onClick={onClick} className={className}>
      {console.log(props)}
      <PreIcon size={size} />
    </div>
  );
};

const NeA = (props) => {
  const { className, onClick } = props;
  return (
    <div onClick={onClick} className={className}>
      <NextIcon />
    </div>
  );
};

const Home = () => {
  return (
    <div className="backdrop-blur-3xl-sm overflow-x-hidden relative">
      <Slider
        dots
        infinite
        initialSlide={2}
        prevArrow={<PrA size={"h-10 w-10"} />}
        nextArrow={<NeA />}
        pauseOnHover={true}
      >
        {data.map((e, index) => {
          return <SummaryInfo key={index} data={e} />;
        })}
      </Slider>
      <div className="bg-red w-20 h-20 absolute z-50 top-0"></div>
      <ListMovie />
      <div className="w-12 h-64"></div>
    </div>
  );
};

export default Home;
