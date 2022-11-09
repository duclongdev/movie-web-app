import React from "react";
import { BookmarkIcon, PlayIcon } from "../../assets";
import { useState } from "react";

const Card = ({ data }) => {
  const [image, setImage] = useState(data.image);
  const change = () => {
    setImage(data.imageBackup);
  };
  const change2 = () => {
    setImage(data.image);
  };
  return (
    <button
      className="w-[12rem] h-[20rem] rounded-md hover:scale-110 ease-in duration-200 py-6 group text-left "
      onMouseOut={change}
      onMouseOver={change2}
    >
      <div className="relative">
        <img
          src={image}
          alt=""
          className="h-[18rem] object-cover rounded-md z-1 group-hover:absolute group-hover:h-[8rem] group-hover:bottom-[1rem]"
        />
      </div>
      <div className=" group-hover:z-10 group-hover:absolute group-hover:top-[8rem] text-white h-full w-[12rem]  transition-all group-hover:bg-slate-900 p-2 ">
        <h2 className="group-hover:text-xl">{data.name}</h2>
        <a className="group-hover:absolute group-hover: top-[-2.5rem] group-hover:right-12 group-hover:bg-green-500 w-8 h-8 rounded-full  hover:bg-green-300 p-1 bg-transparent">
          <PlayIcon></PlayIcon>
        </a>
        <a className="group-hover:absolute group-hover: top-[-2.5rem] group-hover:right-3 bg-slate-300 w-8 h-8 rounded-full hover:bg-slate-400 p-1">
          <BookmarkIcon />
        </a>
        <div className="mb-4 flex h-4 items-center text-xs">
          <strong className="text-green-600">{data.rate}</strong>
          <span className="bg-green-400 w-[0.1rem] h-5/6 mx-1"></span>
          <span>{data.MGS}</span>
          <span className="bg-green-400 w-[0.1rem] h-5/6 mx-1"></span>
          <span>{data.episode} Tập</span>
        </div>
        <span className="text-xs leading-[0.5rem]">
          One Piece (Đảo Hải Tặc) cập nhật vietsub vào 15:00 chủ nhật hàng tuần.
          Gol D. Roger, vua hải tặc với khối tài sản khổng...
        </span>
        <div className="hidden group-hover:flex absolute text-xs right-2 bottom-[8rem] text-green-500 hover:text-green-400">
          see more...
        </div>
      </div>
    </button>
  );
};

export default Card;
