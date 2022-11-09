import React from "react";
import { BookmarkIcon, PlayIcon } from "../../assets";
import { useNavigate } from "react-router-dom";

const SummaryInfo = ({ data }) => {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `detail`;
    navigate(path);
  };
  return (
    <div className="h-[39rem] relative">
      <div className="absolute w-[60rem] h-[40rem] bg-gradient-to-r from-slate-800 top-0 z-10">
        <div className="absolute left-14 top-1/4 text-slate-200 w-2/4">
          <img src={data.logo} alt="" className="h-[6rem] mb-8" />
          <div>
            <div className="mb-4 flex h-4 items-center">
              <strong className="text-green-600">9.4</strong>
              <span className="bg-green-400 w-[0.1rem] h-5/6 mx-1"></span>
              <span>{data.MGS}</span>
              <span className="bg-green-400 w-[0.1rem] h-5/6 mx-1"></span>
              <span>{data.episode} Tập</span>
            </div>

            <div className="mb-4">
              {data.categories.map((e, index) => {
                return (
                  <span
                    key={index}
                    className="px-2 bg-slate-500 bg-opacity-50 rounded mr-2"
                  >
                    {e}
                  </span>
                );
              })}
            </div>

            <div className="mb-4 leading-4">
              <span>Miêu tả:</span>
              {data.description.length > 215
                ? data.description.slice(0, 215) + "..."
                : data.description}
            </div>
          </div>
          <div>
            <button
              className="mr-6 bg-green-500 p-3 rounded-full "
              onClick={routeChange}
            >
              <PlayIcon />
            </button>
            <button className="mr-8 bg-slate-300 p-3 rounded-full">
              <BookmarkIcon />
            </button>
          </div>
        </div>
      </div>
      <img src={data.image} className="right-0 bottom-0 w-full h-auto" alt="" />
      <div className="absolute w-40 h-[40rem] bg-gradient-to-l from-slate-800 top-0 z-50 right-0 "></div>
    </div>
  );
};

export default SummaryInfo;
