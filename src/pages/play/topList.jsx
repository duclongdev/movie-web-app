import { useState } from "react";

const TopList = () => {
  const [hoverIndex, setHoverIndex] = useState(0);

  const data = [
    {
      image:
        "https://pic0.iqiyipic.com/image/20211206/f2/2e/a_100421840_m_601_en_m1.webp",
      filmName: "One Piece",
    },
    {
      image:
        "https://pic9.iqiyipic.com/image/20210812/10/4d/a_100464174_m_601_en.webp",
      filmName: "Naruto",
    },
    {
      image:
        "https://pic8.iqiyipic.com/image/20210309/ac/33/a_100449112_m_601_en.webp",
      filmName: "Demon Slayer: Kimetsu no Yaiba Entertainment District Arc",
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201225/d5/93/a_100432281_m_601_zh-CN_m1.webp",
      filmName: "Dragon Ball Super",
    },
    {
      image:
        "https://pic2.iqiyipic.com/image/20201031/64/01/a_100426612_m_601_en.webp",
      filmName: "Haikyu!!TO THE TOP",
    },
    {
      image:
        "https://pic8.iqiyipic.com/image/20201210/ae/d7/a_100425586_m_601_zh-CN_m4.webp",
      filmName: "Haikyu!! Second Season",
    },
    {
      image:
        "https://pic6.iqiyipic.com/image/20210502/e8/51/a_100457958_m_601_zh-CN_m2.webp",
      filmName: "BORUTO-NARUTO NEXT GENERATIONS",
    },
    {
      image:
        "https://pic5.iqiyipic.com/image/20210629/0d/8d/a_100455595_m_601_zh-CN_m1.webp",
      filmName: "Pretty Guardian Sailor Moon Crystal",
    },
    {
      image:
        "https://pic1.iqiyipic.com/image/20201210/e4/77/a_100425585_m_601_zh-CN_m4.webp",
      filmName: "Haikyu!!",
    },
    {
      image:
        "https://pic4.iqiyipic.com/image/20210121/5f/15/a_100444857_m_601_zh-CN.webp",
      filmName: "The Legend of Sky Lord",
    },
  ];

  return (
    <div className="block " onMouseLeave={() => setHoverIndex(0)}>
      <ul>
        {data.map((value, index) => {
          let para1 = "font-bold text-gray-500 text-sm mr-3";
          if (index == 0 || index == 1 || index == 2) para1 = "font-bold text-sm mr-3 text-green-500";

          let para2, para3;

          {hoverIndex === index ? para2 = "ml-[22px] rounded mb-2 mt-1" : para2 += " hidden"}
          {hoverIndex === index ? para3 = "list-item p-2 rounded m-1 bg-slate-200 dark:bg-slate-700" : para3 = "list-item p-2 rounded m-1"}

          return (
            <li id={index} key={index} className={para3} onMouseOver={() => setHoverIndex(index)}>
                <a className="text-gray-600 font-medium dark:text-gray-300">
                    <div className="flex">
                        <span className={para1}>{index + 1}</span>
                        <span className="line-clamp-1">{value.filmName}</span>
                    </div>

                    <img src={value.image} alt="" className={para2} />
                </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TopList;
