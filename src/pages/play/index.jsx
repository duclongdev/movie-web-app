import React, { Component } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import My_Swiper from "./swiper";
import My_Recommend from "./recommend_swiper"

import { useState } from "react";
import ShowMore from "./showMore"; 
import "./style.css"
import TopList from "./topList";
import Comments from "./comments";
import TitleBar from "./titleBar";
import { curValue } from "./swiper";
import EpisodesList from "./episodesList";

const Play = () => {
  const [showMore, setShowMore] = useState(false);

  const episode = "Episode";

  return (
    <div className="container pt-20">
      <div className="grid grid-cols-4 gap-y-4 mb-4">
        <div className="col-span-3">
          <video width="100%" height="100%" controls className="rounded-l-md">
            <source src="https://dr.sf-converter.com/download?id=76eba88bd281618665d93f75e315136f4e81475b93bc1b18242273eea928bf20&payload=1*eJzVVltv4jgU%2FisIaaxdacLEdq6VrFGglEILlHJJ6QsKiQmGXEyuhFH%2F%2Bzihu53V7sus9mFHQp8dO8fnnO8cf%2BFbO43zxKXLJGjftPdZxtObL1%2FKsuxUcZ7lW9px4%2FBL6WTu%2FmtBLP4S28Wuv14t25%2FfLYfeTxs6ucfiv3pMEl2SpDSSjNNBYmp8STp%2BHPsBLZhH4%2BasZsYDp9o67vErPXOWUAI1TdMNTdYNQBkpUnW9Ngfd7u7kF97w6UztWLaGgHGCEOogFXWw3EGKCphHYskaPHbD8SD0xxN73VeDnaKfxnDQx0Fp%2BI%2BjhzvZ1ha9h%2F10R28ByxyfQEUG17TJe5ogoadcRJKmAaloCsI9UWcgDAmGn1APmSCMyI9picWPx0AHYUqcXCwmXg7CgoQCGNEBDwjCgLshIlEMfDchRQRYxDK3jLwtTwk0ZaTKIhrukuoZFbwq015pFGlhvVpn5L8qmzRy7O196YKCJwWBIGQhJQ33n9BdyBUQpWSzthH31zNn6EVzvLUH9JhUmqDMZ0mTjxvQiCANGhDpwMsTwTjs6EgDQZiJuSorhqrrGoYyxsJFdq2IpsiGCXaFIN4AR0q5E7CCNgfuROUIUmQZYh3XFImpjhQNuMTud0EmdhUVIwWL%2BMhws0VVFCPL2AUHSyTrJI5g7Fp8YUyZAMZr8GoQNaoJbipUk%2FpnbcRDTaYYBJf1K9wVWBMjhpoYMURpvc3q7TprMYh8BYpMQfCH63BfG4Q11G%2BEtU3YHFLUsfDa0w91EobMJ9YA9zZnq3yeDffWQzan2t2scPvbTdhbRKlDF2foBFnSc1eatB4XyvT5sF2%2BeEOLdcOzzvXY4dFsMI%2FdJcwDuDagQm%2Bfs8UUjV5m5%2BPQM%2BfL0iw%2F4VvxA43D6UmejYzaoT%2Fnnh9tFql3u7%2BrinwUb6ZPcWpLS76oXP7oQHWSp85qzRW3N5zdHkZV4p%2F1k28f1dd5po25qs%2FMbqCW6kDpXu4Ue3OR5OQ4tv2rQ3Ghm6v5a15orAGnnokbhet2hFhpUG1Qa1CvUZObZkUNXhtXaVBv0KhRrxGbSoNqg1qDeoPXXfMXV5CmbD%2BrIBAjzTSVDwnRNPghISaC0BRgQPzfSYj6ryTk2gz%2FexGZ3scrCLlsMCM9modEWrsvprpKLwrTn9B2cYoPkzI%2FdV%2BXhcWsQrcdbaUaE3iXq15N5PG0M2Vm4wD3u5vTNjG6WBqMNs7sn0TEFw4nCbz4czO7PO5GFTcC7%2Fk0VoIH9Gz0Dk84X0eXmbcz1Op2fW%2BxvlU94hwfnYkUDPBiOLUz7i%2FoJM9ejp41zleXQKoyaXvfn%2BXKVUIylgVU6IeQpqw1doI4op9b89KhrUdKW1Jrnke7IC5p0vptzkUHJtLYiaTWMMriVranrffFFU1S%2Brs471rf1MraNx%2BS8rnN0l6cR1lSdVnkschv32RJTt%2F%2FksybkrdvvrXrJhDBiM99%2B%2B1d3v6%2BibX229t3Fl%2F1LA%3D%3D*1666764479*b276b51b4c7b60f4" type="video/mp4" />
          </video>
        </div>

        {/* khung episode */}
        <div className="bg-gray-200 w-[104%] pl-4 dark:bg-slate-700 rounded-r-md">
          <a
            href=""
            className="no-underline my-4 font-bold uppercase text-xl hover:text-green-500 block dark:text-white">
            BORUTO-NARUTO NEXT GENERATIONS
          </a>

          <h2 className="items-center text-center dark:text-white">
            <span className="font-bold text-lg">Episodes</span>
          </h2>

          <My_Swiper />

          <EpisodesList choice={curValue} />
        </div>

        <div className="information col-span-3 dark:text-white">
          <TitleBar filmName="BORUTO-NARUTO NEXT GENERATIONS" episodes={episode + " 1"}/>
          
          <div className="flex font-medium text-l mt-[12px]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#00dc5a" className="w-5 h-5">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
            </svg>
            <p className="font-bold text-[#00dc5a] mr-1">9.5</p>
            
            <span className="mr-1">(71.7k ratings)</span>
            <span className="mr-1 text-gray-500">•</span>
            <span className="text-green-500">Rate now</span>
          </div>

          <div className="flex">
            <div className="flex text-l mt-[14px] items-center font-semibold">
              <span className="bg-[#00dc5a] px-1 rounded-l"> TOP 8</span>
              <span className="bg-gray-400 rounded-r px-1">Hot Anime</span>

              <div className="w-px h-5 border-1 text-gray-500 mx-2 border-slate-500 bg-slate-500"></div>
              <p className="font-semibold">C13</p>
              <div className="w-px h-5 border-1 text-gray-500 mx-2 border-slate-500 bg-slate-500"></div>
              <p className="font-semibold">2021</p>
              <div className="w-px h-5 border-1 text-gray-500 mx-2 border-slate-500 bg-slate-500"></div>
              <p className="font-semibold mr-4">Updated to 246</p>
            </div>

            <div className="read-more-read-less w-[38%] mt-[14px]">
                <button className='font-semibold flex items-center hover:text-[#00dc5a]' onClick={() => setShowMore(!showMore)} >
                    <span>
                        {showMore ? 'Collapse' : 'More'}
                    </span>
                    <svg transform={showMore ? 'scale(1,-1)' : undefined} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                </button>
            </div>
          </div>

          <ShowMore showMore={showMore}>
            With peace and modernization, the residents in the ninja village, Konoha, is increasing, and the lifestyle of ninjas is changing constantly. Boruto, the son of Naruto Uzumaki, the seventh leader of the village, studies at the Ninja Academy where he meets his new team partners. How will they fight against the mysterious incidents in the village? The story of Boruto Uzumaki that sweeps everyone's heart like a gust of wind begins now!
          </ShowMore>
          <hr className="mt-[16px] mb-6 dark:border-gray-400"/>

          <h2 className="text-[22px] font-bold">Recommended</h2>
          
          <My_Recommend />

          <hr className="mt-7 mb-6 dark:border-gray-400"/>
          <h2 className="text-[22px] font-bold">5 Comments</h2>

          {/* input comment */}
          <div className="flex pt-6 pb-1">
            <img src="https://www.iqiyipic.com/common/fix/headicons/male-130.png" alt="" className="flex rounded-[50%] w-10 h-10 mr-[12px]"/>

            <div className="w-full border rounded relative hover:border-green-500 dark:border-gray-400">
              <div className="px-[12px] pt-[12px] pb-[30px]">
                <textarea placeholder="Post a comment" cols="1" rows="1" className="resize-none bg-none h-9 w-full dark:bg-slate-800 outline-0"></textarea>
              </div>
              <span className="absolute right-3 bottom-2 text-xs text-gray-500 ">0/280</span>
            </div>
          </div>

          <Comments />
        </div>

        <div>
          <h2 className="text-2xl text-gray-500 font-medium text-center dark:text-gray-300">Top 10 Anime</h2>
          <TopList />
        </div>


      </div>
    </div>
  );
};

export default Play;
