import React from "react";
import "./intro.css";
import ReactPlayer from "react-player";
import {
  PlayIcon,
  BookmarkIcon,
  ShareArrow,
  Download,
  ArrowBottom,
} from "../../../assets";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const des = `Đảo Hải Tặc - One Piece là chuyện về cậu bé Monkey D. Luffy do ăn nhầm Trái Ác Quỷ, bị biến thành người cao su và sẽ không bao giờ biết bơi. 10 năm sau sự việc đó, cậu rời quê mình và kiếm đủ 10thành viên để thành một băng hải tặc, biệt hiệu Hải tặc Mũ Rơm. Khiđó của phiêu lưu tìm kiếm kho báu One Piece bắt đầu. Trong cuộcphiêu lưu tìm kiếm One Piece, băng Hải tặc mũ rơm phải chiến đấu với nhiều băng hải tặc xấu khác cũng muốn độc chiếm One Piece và Hảiquân của Chính phủ muốn diệt trừ hải tặc. Băng Hải tặc Mũ Rơm phải trải qua biết bao nhiêu khó khăn, không lùi bước với ước mơ "Trở thành Vua Hải Tặc và chiếm được kho báu One Piece".`;
function Intro() {
  let navigate = useNavigate();
  const routeChange = () => {
    console.log("debug");
    navigate("/play", { replace: true });
  };
  const [seeMore, setSeeMore] = useState(false);
  const handlerSeeMore = () => {
    console.log(seeMore);
    seeMore === false ? setSeeMore(true) : setSeeMore(false);
  };
  return (
    <div className="relative text-white pt-80 ">
      <div>
        <ReactPlayer
          playing={true}
          width="100%"
          height="560px"
          volume={1}
          muted={false}
          url="https://www.youtube.com/watch?v=AeaD3Q-bFjU&list=PLKvoOwlacRoKCfIs4xlZt1Odu4SC2OIhW"
          className="VideoIntro"
        />
      </div>
      <div className="InforIntro">
        <h1 className="headingIntro">One Piece</h1>
        <div className="lable-top">
          <span className="font-bold bg-green-500 rounded-l-sm ">TOP 1</span>
          <span className="font-bold bg-gray-500 rounded-r-sm ">Hot Anime</span>
        </div>
        <div className="infoTag">
          <span className="text-green-400 font-bold">9.4</span>
          <div className="broken-line"></div>
          <span>C13</span>
          <div className="broken-line"></div>
          <span>2020</span>
          <div className="broken-line"></div>
          <span>Update to 1039</span>
        </div>
        <div className="info-tag-type">
          <span className=" bg-gray-700 px-1 rounded-r-sm mr-2">Japan</span>
          <span className=" bg-gray-700 px-1 rounded-r-sm mr-2">Phiêu lưu</span>
          <span className=" bg-gray-700 px-1 rounded-r-sm mr-2">Hành động</span>
          <span className=" bg-gray-700 px-1 rounded-r-sm mr-2">
            Viễn tưởng
          </span>
        </div>
        <div className="ml-12 mt-2">
          <span className="text-gray-400">Đạo diễn: </span>
          <span>Uda Kounosuke, Ishitani Megumi</span>
        </div>
        <div className="ml-12 mt-2 max-w-xl">
          <span className="text-gray-400">Mô tả: </span>
          <div>
            <span>{seeMore === true ? des : des.slice(0, 305) + "..."}</span>
            <button
              className="text-green-500 flex"
              onClick={() => handlerSeeMore()}
            >
              Xem thêm <ArrowBottom />
            </button>
          </div>
        </div>
        <div className="flex mt-3">
          <button className="btnPlay" onClick={routeChange}>
            <span className="mx-2 mt-1.5">
              <PlayIcon />
            </span>
            <span>Play</span>
          </button>

          <button className="btnAdd">
            <span className="mx-2 mt-1.5">
              <BookmarkIcon />
            </span>
            <span>Add to Watch..</span>
          </button>

          <button className="btnShare">
            <span className="mx-2 mt-1.5">
              {" "}
              <ShareArrow />
            </span>
            <span>Share</span>
          </button>

          <button className="btnDown">
            <span className="mx-2 mt-1.5">
              <Download />
            </span>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Intro;
