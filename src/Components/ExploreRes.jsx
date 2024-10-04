import React from "react";

function ExploreRes() {
  return (
    <div className="max-w-[1200px] mx-auto pb-8 mb-[25px] md:mb-[60px] px-4 md:px-0">
      <div className="flex my-6 items-center justify-between">
        <div className="text-[18px] md:text-[22px] font-bold text-[#202020]">
          Explore Every Restaurant Near Me
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="p-[10px] md:p-[12px] w-full sm:w-[48%] border-[1px] border-gray-300 rounded-md flex justify-center cursor-pointer text-[#2a2a2a] font-semibold">
          Explore Restaurants Near Me
        </div>
        <div className="p-[10px] md:p-[12px] w-full sm:w-[48%] border-[1px] border-gray-300 rounded-md flex justify-center cursor-pointer text-[#2a2a2a] font-semibold">
          Explore Top Rated Restaurants Near Me
        </div>
      </div>
    </div>
  );
}

export default ExploreRes;
