import React from "react";

const data = [
  {
    image:
      "https://static.tvtropes.org/pmwiki/pub/images/2e5c6d37_566f_4274_b62d_ebf5fcbd0722.png",
    name: "One piece",
    namsx: "1999",
    categories: ["Hành động, viễn tưởng"],
    status: "Đang cập nhật",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg",
    name: "Naruto",
    namsx: "2002",
    categories: ["Nhẫn thuật, viễn tưởng"],
    status: "Full",
  },
  {
    image:
      "https://img.vietwiki.net/uploads/2016/09/hyakujuu-sentai-gaoranger-1.jpg",
    name: "Gaoranger",
    namsx: "2001",
    categories: ["Siêu nhân, Hành động"],
    status: "Full",
  },
  {
    image:
      "https://m.media-amazon.com/images/M/MV5BYzI0YjYxY2UtNzRjNS00NTZiLTgzMDItNGEzMjU5MmE0ZWJmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
    name: "Dragon ballz",
    namsx: "1986",
    categories: ["Hành động, viễn tưởng"],
    status: "Full",
  },
];

const ListDataForSearch = () => {
  return (
    <div className="bg-slate-800 absolute rounded-md w-full flex p-3 flex-col">
      {data.map((movie, index) => (
        <button className="flex flex-row mb-3 hover:bg-slate-700" key={index}>
          <img className="w-9 h-full " src={movie.image} alt="" />
          <div className="text-left p-2">
            <p className=" text-white text-sm">{movie.name}</p>
            <p className=" text-gray-300 text-sm">
              {`${movie.namsx} - ${movie.categories} - ${movie.status}`}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ListDataForSearch;
