import React from "react";
import { IoSearch } from "react-icons/io5";
import Category from "./Category";

function Search() {
  return (
    <div className="flex flex-col max-w-[900px] mx-auto ">
      <div className="flex items-center justify-between w-full relative mt-8 mb-10">
        <input
          type="text"
          placeholder="Search for Restaurants and food"
          className="p-[10px] w-full border-2 border-gray-200 mt-4 outline-none text-[16px] font-medium rounded-sm mx-2"
        />
        <span className="absolute right-5 bottom-3">
          <IoSearch className="text-[22px] text-gray-400" />
        </span>
      </div>

      <div className="mb-14">
        <Category />
      </div>
    </div>
  );
}

export default Search;
