import React from 'react'
import { UserIcon2 } from '../../assets';

const Option = () => {
  return (
    <div className="w-64 bg-red-500 rounded-md">
      <div className="bg-blue-500 rounded-t-md p-4">
        <img
          src="https://cdn-amz.woka.io/images/I/9119ST+olGL.jpg"
          alt=""
          className="rounded-full w-"
        />
        <span>aaa</span>
      </div>
      <button className="flex flex-row mb-2">
        <UserIcon2 />
        <span className="ml-4">Tài khoản</span>
      </button>
      <div>Đăng xuất</div>
      <div>Hồ sơ</div>
    </div>
  );
}

export default Option