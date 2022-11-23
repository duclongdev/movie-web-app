import React from "react";
import {
  BookmarkIcon,
  CalenderIcon,
  LogoutIcon,
  UserIcon2,
} from "../../assets";

const Option = () => {
  return (
    <div className="w-64 bg-slate-800 rounded-md">
      <div className="bg-green-500 rounded-t-md p-4 flex ">
        <img
          src="https://cdn-amz.woka.io/images/I/9119ST+olGL.jpg"
          alt=""
          className="rounded-full w-12 h-12"
        />
        <span className="ml-2 mt-2 text-xl">User123456</span>
      </div>
      <div className="p-4">
        <button className="flex flex-row mb-4 text-white hover:text-green-500 ">
          <UserIcon2 />
          <span className="ml-4 text-white hover:text-green-500">
            Tài khoản
          </span>
        </button>
        <button className="flex flex-row mb-4 text-white hover:text-green-500">
          <CalenderIcon  />
          <span className="ml-4 text-white hover:text-green-500">Phim đặt trước</span>
        </button>
        <button className="flex flex-row mb-4 text-white hover:text-green-500">
          <BookmarkIcon color={"white"} />
          <span className="ml-4 text-white hover:text-green-500">Xem sau</span>
        </button>
        <button className="flex flex-row text-white hover:text-green-500 ">
          <LogoutIcon /> 
          <span className="ml-4 text-white hover:text-green-500">Đăng xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Option;
