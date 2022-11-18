import React from 'react';
import data from '../../../../assets/data/listEpisode';
function Episodes (){
    return (
        <div className='text-white relative py-4'>
            <h1 className=' ml-12 mb-4'>Tập</h1>
            <div className='ml-12'>{
                data.map((movie, index) => (
                    <button className="w-[18rem] h-[12rem] mr-2 mb-5 rounded-md hover:scale-105 ease-in duration-200 text-left">
                        <div  key={index} className="">                                
                            <img className=' rounded-md z-1' src={movie.image} alt="" />
                            <div className='movieName'>{movie.name}</div>
                        </div>
                    </button>
                    ))
                }
            </div>
        </div>
    )
}

export default Episodes;