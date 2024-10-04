import React from "react";

function AddCard({ image, name, price, onClick }) {
  return (
    <div className={`w-full md:w-[273px] shrink-0`}>
      <div className="group h-[182px] rounded-[15px] overflow-hidden relative cursor-pointer">
        <img
          className="group-hover:scale-110 duration-150 object-cover h-full w-full relative"
          src={`https://myswiggyapi-production.up.railway.app/images/${image}`}
          alt=""
        />
        <div className="img-overlay absolute w-full h-full top-0 flex items-end p-2 text-[18px] font-bold text-white">
          ₹{price}
        </div>
        <h1 className="absolute top-[12px] left-[12px] text-white font-extrabold text-[18px]">
          {name}
        </h1>

        <button
          className="bg-white text-green-600 py-[6px] px-[16px] absolute bottom-2 right-2 rounded-xl font-extrabold cursor-pointer"
          onClick={onClick}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default AddCard;
