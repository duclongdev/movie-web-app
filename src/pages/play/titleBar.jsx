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

            </a>
            {isHovering ? <h1 className="text-2xl font-bold disabled:opacity-75 text-gray-200 dark:text-slate-700">{episodes}</h1> :
              <h1 className="text-2xl font-bold text-gray-500">{episodes}</h1>}
        </div>
    );
}
 
export default TitleBar;