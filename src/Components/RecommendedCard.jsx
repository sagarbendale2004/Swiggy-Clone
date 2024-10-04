import React from "react";

function RecommendedCard({ path, price, desc, image, onClick }) {
  return (
    <div className="h-[200px] flex md:flex-row items-start justify-between border-gray-200 border-b-2 py-6 px-4 md:px-8 overflow-hidden">
      {/* Left section - Text content */}
      <div className="flex flex-col gap-2 mb-4 md:mb-0 md:mr-4 w-full md:w-auto">
        <div className="border-green-600 rounded-[4px] border-2 h-4 w-4 flex justify-center items-center">
          <div className="h-2 w-2 rounded-full bg-green-700"></div>
        </div>
        <h2 className="text-[16px] md:text-[18px] font-bold text-[#3f3f3f]">
          {path}
        </h2>
        <h2 className="text-[16px] md:text-[18px] font-semibold text-[#202020]">
          ₹{price}
        </h2>
        <h4 className="text-[14px] md:text-[16px] font-normal text-[#656565]">
          {desc}
        </h4>
      </div>

      {/* Right section - Image and Button */}
      <div className="relative h-full aspect-w-1 aspect-h-1 bg-gray-700 overflow-hidden">
        <img
          src={`https://myswiggyapi-production.up.railway.app/images/${image}`}
          alt={path}
          className="w-[180px] h-[200px] object-cover transition-transform duration-150 hover:scale-110"
        />
        <button
          className="bg-gray-100 text-green-600 py-2 px-4 md:px-6 hover:bg-orange-100 absolute bottom-1 right-[18px] md:bottom-1 md:right-11 rounded-lg font-bold cursor-pointer shadow-md"
          onClick={onClick}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default RecommendedCard;
