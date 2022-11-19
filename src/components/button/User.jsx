import Tippy from "@tippyjs/react/headless";
import React from "react";
import {  userIcon } from "../../assets";
import Option from "../optionInUser";

const User = () => {

  return (
    <div>
      <Tippy
      interactive
        render={(attrs) => (
          <div className="box" tabIndex="-1" {...attrs}>
            <Option />
          </div>
        )}
      >
      <button className="btn-header">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={userIcon} />
        </svg>
        <span className="text-xs">Tôi</span>
      </button>
      </Tippy>
    </div>
  );
};

export default User;
