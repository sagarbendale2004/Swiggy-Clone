import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import Cuisines from "./Cuisines";
import BestPlaces from "./BestPlaces";

function Offers() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const componentRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (componentRef.current) {
        const rect = componentRef.current.getBoundingClientRect();
        setIsAtTop(rect.top <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const fetchRestaurant = async () => {
    try {
      const res = await fetch(
        "https://myswiggyapi-production.up.railway.app/top-restaurant-chains"
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log("error in OnlineDelivery", error);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  const handleCardClick = (cardData) => {
    navigate("/TopResOrderFood", { state: cardData });
  };
  return (
    <div>
      <div
        className="max-w-[1200px] mx-auto px-2 pb-8 border-gray-200 border-b-2"
        ref={componentRef}
      >
        <div className="flex my-6 items-center justify-between">
          <div className="text-[22px] font-bold text-[#202020] mx-2">
            Restaurants with Great Offers Near Me
          </div>
        </div>

        <div
          className={
            isAtTop ? "fixed top-0 z-[99999] bg-white w-full left-0" : ""
          }
        >
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-2 my-4 mb-8">
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Filter
            </div>
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Sort By
            </div>
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Fast Delivery
            </div>
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Rating 4+
            </div>
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Pure Veg
            </div>
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Offers
            </div>
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Rs. 300 - Rs. 600
            </div>
            <div className="py-1 px-3 rounded-2xl border-2 border-gray-300 text-[14px] font-semibold cursor-pointer">
              Less than Rs.300
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-[2rem]">
          {data.map((dat, i) => {
            return (
              <Card {...dat} onClick={() => handleCardClick(dat)} key={i} />
            );
          })}
        </div>
      </div>

      <div>
        <Cuisines />
        <BestPlaces />
      </div>
    </div>
  );
}

export default Offers;
