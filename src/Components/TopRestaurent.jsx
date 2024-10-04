import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Card from "./Card";
import { useNavigate } from "react-router-dom";

function TopRestaurent() {
  const [data, setData] = useState([]);
  const [slide, setSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(4);
  const navigate = useNavigate();

  // Fetch restaurant data
  const fetchRestaurant = async () => {
    try {
      const res = await fetch(
        "https://myswiggyapi-production.up.railway.app/top-restaurant-chains"
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.log("Error in fetching top-restaurant-chains", error);
    }
  };

  useEffect(() => {
    fetchRestaurant();

    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(4);
      }
    };

    updateVisibleCards();

    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const nextSlide = () => {
    const maxSlides = Math.ceil(data.length / visibleCards) - 1;
    if (slide >= maxSlides) return;
    setSlide(slide + 1);
  };

  const prevSlide = () => {
    if (slide === 0) return;
    setSlide(slide - 1);
  };

  const handleCardClick = (cardData) => {
    navigate("/TopResOrderFood", { state: cardData });
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-6 items-center justify-between">
        <div className="text-[22px] font-bold text-[#202020] mx-2">
          Top restaurant chains in Jalgaon
        </div>
        <div className="flex">
          <div className="cursor-pointer w-[30px] h-[30px] bg-[#bcbcbc] rounded-full mx-2 flex items-center justify-center">
            <FaArrowLeft style={{ color: "#414141" }} onClick={prevSlide} />
          </div>
          <div className="cursor-pointer w-[30px] h-[30px] bg-[#bcbcbc] rounded-full mx-2 flex items-center justify-center">
            <FaArrowRight style={{ color: "#414141" }} onClick={nextSlide} />
          </div>
        </div>
      </div>

      <div className="overflow-hidden mx-3">
        <div
          className="flex gap-[3px] pb-8 border-gray-200 border-b-2 duration-500"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {data.map((dat, i) => (
            <div
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCards}%` }}
              key={i}
            >
              <Card {...dat} onClick={() => handleCardClick(dat)} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopRestaurent;
