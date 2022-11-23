import React from 'react'
import Mota from "./mota/intro"
import MovieRow from "./MovieRow/movierow"
import Footer from "./footer/index"
const Detail = () => {
  return (
    <div id="page">
      <Mota />
      <MovieRow/>
      <Footer/>
    </div>
  )
}

export default Detail;
