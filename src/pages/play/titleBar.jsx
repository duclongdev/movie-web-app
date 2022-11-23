import { useState } from "react";

const TitleBar = ({ filmName, episodes}) => {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
        setIsHovering(true);
    };
    
    const handleMouseOut = () => {
    setIsHovering(false);
    };

    return (  
        <div className="flex text-2xl font-bold">
            <a className="cursor-pointer relative hover:text-green-500" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <span className="uppercase text-2xl font-bold mr-1">
                    {filmName}
                </span>

                <span className="absolute inline-flex items-center bg-gradient-to-r from-white text-lg h-[100%] transition-style overflow-hidden dark:from-slate-800" style={{width : isHovering ? "120px" : "0px"}}>
                    <span className="text-green-500 font-bold absolute text-lg top-1 ml-2">
                        more info
                    </span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 ml-[94px]">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </span>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-5 h-5 inline text-black dark:text-white">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                </svg>
            </a>
            {isHovering ? <h1 className="text-2xl font-bold disabled:opacity-75 text-gray-200 dark:text-slate-700">{episodes}</h1> :
              <h1 className="text-2xl font-bold text-gray-500">{episodes}</h1>}
        </div>
    );
}
 
export default TitleBar;