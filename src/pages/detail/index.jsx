import React from 'react'
import "./style.css"

const Detail = () => {
  return (
    <div id="page">
      <div id="header">
        <div id="container">
          <div class="left logo">
            <img src="https://motchill.com/motchill.png?v1.0.2" alt="" />
            <img src="" alt="" />
          </div>
          <input type="text" name="search" id="txtSearch" placeholder='v.d: tên phim, tên diễn viên,...' />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
          </svg>

        </div>
      </div>
    </div>
  )
}

export default Detail;
