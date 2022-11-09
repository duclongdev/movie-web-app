import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SearchIcon } from "../../assets";

const Search = () => {
  const [message, setMessage] = useState("");
  const { t } = useTranslation();
  return (
    <div className="w-96 rounded-3xl border focus-within:border-green-500 flex items-center justify-between bg-gray-100">
      <div className="flex-1">
        <input
          type="text"
          value={message}
          placeholder={t("Search")}
          className=" border-white bg-transparent focus:outline-0 pl-4 w-full"
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <span className="bg-gray-400 w-px h-4/6"></span>
      <button className="bg-gray-100 w-12 h-full rounded-r-3xl flex justify-center items-center hover:bg-gray-200 active:bg-gray-300">
        <SearchIcon strokerColor={message.length === 0 ? "gray" : "black"} />
      </button>
    </div>
  );
};

export default Search;
