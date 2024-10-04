import React from "react";

function AddSection() {
  return (
    <div className="bg-[#e6e6ee] w-full p-4">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
        <div className="text-[#282c3f] font-extrabold text-[22px] md:text-[26px] w-full md:w-[35%] text-center md:text-left">
          For a better experience, download the Swiggy app now
        </div>
        <div className="flex gap-2 justify-center">
          <a href="#">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
              alt="Download Android App"
              className="h-[55px] md:h-[65px] w-[160px] md:w-[180px] mr-2 md:mr-4"
            />
          </a>
          <a href="#">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
              alt="Download iOS App"
              className="h-[55px] md:h-[65px] w-[160px] md:w-[180px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default AddSection;
