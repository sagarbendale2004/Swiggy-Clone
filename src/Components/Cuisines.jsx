import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5"; // Importing icons

function Cuisines() {
  const bestCuisinesNearMe = [
    "chinese restaurants near me",
    "seafood restaurants near me",
    "italian restaurants near me",
    "indian restaurants near me",
    "mexican restaurants near me",
    "thai restaurants near me",
    "japanese restaurants near me",
    "burger joints near me",
    "pizza places near me",
    "bbq restaurants near me",
    "sushi restaurants near me",
    "vegan restaurants near me",
    "vegetarian restaurants near me",
    "steakhouse near me",
    "dimsum restaurants near me",
    "mediterranean restaurants near me",
    "french restaurants near me",
    "spanish restaurants near me",
    "vietnamese restaurants near me",
    "korean restaurants near me",
    "greek restaurants near me",
    "mideastern restaurants near me",
    "turkish restaurants near me",
    "cafe near me",
    "bakery near me",
    "fine dining restaurants near me",
    "brunch spots near me",
    "fast food near me",
    "buffet restaurants near me",
    "biryani places near me",
    "tandoori restaurants near me",
    "south indian restaurants near me",
  ];

  const [showAll, setShowAll] = useState(false); // State to toggle between showing all or limited cuisines

  // For mobile devices, show only 2 items initially, for larger screens show 11
  const visibleCuisines = showAll
    ? bestCuisinesNearMe
    : window.innerWidth < 768
    ? bestCuisinesNearMe.slice(0, 2)
    : bestCuisinesNearMe.slice(0, 11);

  return (
    <div className="max-w-[1200px] mx-auto pb-8 px-4 md:px-0">
      <div className="flex my-6 items-center justify-between">
        <div className="text-[18px] md:text-[22px] font-bold text-[#202020]">
          Best Cuisines Near Me
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-6 mt-2 justify-center">
        {/* Render visible cuisines */}
        {visibleCuisines.map((cuisine, i) => (
          <div
            key={i}
            className="p-[10px] md:p-[12px] w-full sm:w-[200px] md:w-[280px] border-[1px] border-gray-300 rounded-md cursor-pointer flex justify-center text-[#2a2a2a] font-semibold"
          >
            {cuisine}
          </div>
        ))}

        {/* "Show more" / "Show less" button */}
        <div
          onClick={() => setShowAll(!showAll)} // Toggle showAll state
          className="p-[10px] md:p-[12px] w-full sm:w-[200px] md:w-[280px] border-[1px] border-gray-300 rounded-md cursor-pointer flex justify-center items-center text-[#2a2a2a] font-semibold"
        >
          {showAll ? (
            <>
              Show less <IoChevronUpSharp className="ml-1 mt-[3px]" />
            </>
          ) : (
            <>
              Show more <IoChevronDownSharp className="ml-1 mt-[3px]" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cuisines;
