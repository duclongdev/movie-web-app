import React from "react";
import data from "../../../../assets/data/listHighlights";

function Highlights (){
    return(
        <div className='text-white relative py-4'>
            <h1 className=' ml-12 mb-4'>Nổi bật</h1>
            <div className='ml-12'>{
                data.map((movie, index) => (
                    <button>
                        <div key={index} className="relative w-[18rem] h-[12rem] mb-5 mr-2 rounded-md hover:scale-105 ease-in duration-200 text-left">
                            <img className=' rounded-md z-1' src={movie.image} alt="" />
                            <div>{movie.Name}</div>
                            <div className="absolute bottom-10 left-3">{movie.time}</div>
                        </div>
                    </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Highlights;