const ShowMore = ({ showMore, children }) => {
    return (
      <div
        className="overflow-hidden"
        style={{ maxHeight: showMore ? undefined : "0px" }}
      >
        <div className="flex mt-[14px]">
          <div>
            <p className="bg-gray-400 rounded px-1 font-normal">Japan</p>
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
            <p className="bg-gray-400 rounded px-1 ml-3 font-normal">Action</p>
          </div>
          <div>
            <p className="bg-gray-400 rounded px-1 ml-3 font-normal">
              Comics Adaptation
            </p>
          </div>
        </div>
  
        <p className="text-[#A9A9AC] mt-[14px]">
          Description: <span className="text-black text-justify dark:text-gray-100">{children} </span>
        </p>
  
        <p className="text-[#A9A9AC] mt-2">
          Also Know As: <span className="text-black dark:text-gray-100">Naruto Next Generations</span>
        </p>
  
        <p className="mt-2">Premiere: 04-04-2017</p>
      </div>
    );
  };
  
  export default ShowMore;
  