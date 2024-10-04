import React, { useState } from "react";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

function BestPlaces() {
  const cities = [
    "Mumbai",
    "Delhi",
    "Bengaluru",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Surat",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Patna",
    "Vadodara",
    "Ghaziabad",
    "Ludhiana",
    "Agra",
    "Nashik",
    "Faridabad",
    "Meerut",
    "Rajkot",
    "Varanasi",
    "Srinagar",
    "Ranchi",
    "Amritsar",
    "Guwahati",
    "Jodhpur",
  ];

  const [showAll, setShowAll] = useState(false);

  // For mobile, show only first 2 cities initially, for larger screens show 11
  const visibleCities = showAll
    ? cities
    : window.innerWidth < 768
    ? cities.slice(0, 2)
    : cities.slice(0, 11);

  return (
    <div className="max-w-[1200px] mx-auto pb-8 px-4 md:px-0">
      <div className="flex my-6 items-center justify-between">
        <div className="text-[18px] md:text-[22px] font-bold text-[#202020] px-2">
          Best Places to Eat Across Cities
        </div>
      </div>

      <div className="flex flex-wrap gap-4 md:gap-6 mt-2 justify-center">
        {/* Display the cities */}
        {visibleCities.map((city, i) => (
          <div
            key={i}
            className="p-[10px] md:p-[12px] w-full sm:w-[200px] md:w-[280px] border-[1px] border-gray-300 rounded-md cursor-pointer flex justify-center text-[#2a2a2a] font-semibold"
          >
            Best Restaurants in {city}
          </div>
        ))}

        {/* "Show more" / "Show less" button with icons */}
        <div
          onClick={() => setShowAll(!showAll)} // Toggle the "showAll" state when clicked
          className="p-[10px] md:p-[12px] w-full sm:w-[200px] md:w-[280px] border-[1px] border-gray-300 rounded-md cursor-pointer flex justify-center items-center text-[#2a2a2a] font-semibold"
        >
          {showAll ? (
            <>
              Show less
              <IoChevronUpSharp className="ml-1 mt-[4px]" />
            </>
          ) : (
            <>
              Show more
              <IoChevronDownSharp className="ml-1 mt-[4px]" />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default BestPlaces;
