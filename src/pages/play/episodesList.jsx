import { useState } from "react";

const EpisodesList = ({ choice }) => {
    const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60];
    const data2 = [61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120];
    const data3 = [121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180];
    const data4 = [181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240];
    const data5 = [241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272];

    const [current, setCurrent] = useState(0);

    const solution = () => {
        switch(choice) {
            case 0:
                return data1;
            case 1:
                return data2;
            case 2:
                return data3;
            case 3:
                return data4;
            case 4:
                return data5;
        }
    }

    return (  
        <div className="episodes-list flex-wrap justify-between grid grid-cols-4 gap-1 mt-1 pl-1 pr-[10px] overflow-auto h-[347px]  row-span-1 scrollbar-thin scrollbar-thumb-green-400 scrollbar-thumb-rounded">
            {solution().map((value, index)=> {
                let img1 = "bottom-0 absolute left-1";
                let epsTag = "flex items-center py-2 px-1 relative rounded hover:bg-gray-200";

                {current === index ? epsTag = "flex items-center py-2 px-1 relative rounded bg-slate-300 dark:bg-slate-700 " : epsTag = "flex items-center py-2 px-1 relative rounded hover:bg-gray-300 dark:hover:bg-slate-700 "}

                return (
                    <div className=""> 
                        <a href="#" className={epsTag} onClick={() => setCurrent(index)}>
                            <img src="https://www.iqiyipic.com/lequ/20210524/playing_gif_green.gif" alt="" className={current === index ? img1 : img1 += " hidden"}/>
                            <span className="text-black dark:text-white font-medium flex-1 text-center">{`Eps ${value}`}</span>
                        </a>
                    </div>
                    
                );
                
            })}
        </div>
    );
}
 
export default EpisodesList;