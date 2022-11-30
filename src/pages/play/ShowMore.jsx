const ShowMore = ({ showMore, children }) => {
    return (
      <div
        className="overflow-hidden"
        style={{ maxHeight: showMore ? undefined : "0px" }}
      >
        <div className="flex mt-[14px]">
          <div>
            <p className="bg-gray-400 rounded px-1 font-normal">Nhật Bản</p>
          </div>
          <div>
            <p className="bg-gray-400 rounded px-1 ml-3 font-normal">Shounen</p>
          </div>
          <div>
            <p className="bg-gray-400 rounded px-1 ml-3 font-normal">Anime</p>
          </div>
          <div>
            <p className="bg-gray-400 rounded px-1 ml-3 font-normal">TV</p>
          </div>
          <div>
            <p className="bg-gray-400 rounded px-1 ml-3 font-normal">Hành động</p>
          </div>
          <div>
            <p className="bg-gray-400 rounded px-1 ml-3 font-normal">
              Chuyển thể truyện tranh
            </p>
          </div>
        </div>
  
        <p className="text-[#A9A9AC] mt-[14px]">
          Mô tả: <span className="text-black text-justify dark:text-gray-100">{children} </span>
        </p>
  
        <p className="mt-2">Công chiếu: 04-04-2017</p>
      </div>
    );
  };
  
  export default ShowMore;
  