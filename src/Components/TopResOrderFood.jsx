import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import AddCard from "./AddCard";
import RecommendedCard from "./RecommendedCard";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/CartSlice";

function TopResOrderFood() {
  const { state } = useLocation();
  const [data, setData] = useState([]);
  const [recommended, setRecommended] = useState([]);
  const [slide, setSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

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

  const fetchRecommended = async () => {
    try {
      const res = await fetch(
        "https://myswiggyapi-production.up.railway.app/recommended"
      );
      const data = await res.json();
      setRecommended(data);
    } catch (error) {
      console.log("Error in FetchRecommended", error);
    }
  };

  useEffect(() => {
    fetchRestaurant();
    fetchRecommended();

    const updateVisibleCards = () => {
      if (window.innerWidth <= 768) {
        setVisibleCards(1);
      } else {
        setVisibleCards(3);
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

  const handleAdd = (dat) => {
    dispatch(add({ ...dat }));
  };

  const handleAddRec = (rec) => {
    dispatch(add({ ...rec }));
  };

  return (
    <div className="mt-4 mx-auto max-w-[900px] px-4 sm:px-6">
      <div>
        <h1 className="font-bold text-black text-[24px] sm:text-[22px] my-6 title">
          {state.title}
        </h1>
      </div>

      <div className="border-2 border-gray-300 shadow-xl rounded-2xl p-4 font-medium flex flex-col gap-[4px]">
        <span className="flex items-center gap-2 text-black">
          {/* Star icon or similar */}
          <Star />
          <span>{state.rating} (1232 ratings)</span>
        </span>

        <div className="text-[14px]">
          Outlet -{" "}
          <span className="text-gray-600 font-normal text-[15px]">
            {state.place}
          </span>
        </div>

        <div className="text-[14px]">
          {state.minTime} - {state.maxTime} mins
        </div>

        <div className="flex items-center mt-2 border-t-2 pt-2 border-gray-100 gap-2">
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu"
            alt="DISTANCE_FEE_NON_FOOD_LM"
            aria-hidden="true"
            className="h-[20px] w-[20px] sm:h-[30px] sm:w-[30px]"
          />
          <span className="text-[12px] sm:text-[14px]">
            Order above ₹149 for discounted delivery fee
          </span>
        </div>
      </div>

      {/* Offers section */}
      <div className="mt-8">
        <h1 className="font-bold text-black text-[21px] my-6 title">
          Deals for you
        </h1>

        <div className="flex flex-wrap gap-4 justify-center sm:justify-between mb-10">
          <div className="flex items-center gap-2 border-2 border-gray-300 w-full sm:w-[32%] p-3 rounded-3xl">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/offers/generic"
              width="48"
              height="48"
              alt="Free Nagli Papad"
            />
            <div className="flex flex-col gap-[2px] font-medium text-black text-[17px]">
              <span>Free Nagli Papad</span>
              <span>No Code Required</span>
            </div>
          </div>

          <div className="flex items-center gap-2 border-2 border-gray-300 w-full sm:w-[32%] p-3 rounded-3xl">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/8/31/85e289e5-ba4e-45db-ba50-3a50554b3aa7_Untitled.jpg"
              width="48"
              height="48"
              alt="Flat ₹200 Off"
            />
            <div className="flex flex-col gap-[2px] font-medium text-black text-[17px]">
              <span>Flat ₹200 Off</span>
              <span>Use AXIS200</span>
            </div>
          </div>

          <div className="flex items-center gap-2 border-2 border-gray-300 w-full sm:w-[32%] p-3 rounded-3xl">
            <img
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/MARKETING_BANNERS/IMAGES/OFFERS/2024/9/1/82381d65-7176-4771-88bd-acde73a30165_YESBankMenuLogo2.jpg"
              width="48"
              height="48"
              alt="Flat ₹75 Off"
            />
            <div className="flex flex-col gap-[2px] font-medium text-black text-[17px]">
              <span>Flat ₹75 Off</span>
              <span>No Code Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="flex flex-col items-center gap-2 justify-center w-full">
        <div className="font-medium text-gray-600 text-[16px] title tracking-[2px] mb-4">
          ~ MENU ~
        </div>

        <div className="flex items-center justify-between w-full relative mb-5">
          <input
            type="text"
            placeholder="Search for dishes"
            className="p-4 w-full bg-gray-200 rounded-xl outline-none text-[18px]"
          />
          <span className="absolute right-5">
            <IoSearch className="text-[22px] text-gray-400" />
          </span>
        </div>
      </div>

      {/* Top Picks Section */}
      <div className="flex my-6 items-center justify-between">
        <div className="text-[22px] sm:text-[18px] font-bold text-[#202020] mx-2">
          Top Picks
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
          className="flex gap-[3px] pb-8 duration-500"
          style={{ transform: `translateX(-${slide * 100}%)` }}
        >
          {data.map((dat, i) => (
            <div
              className="flex-shrink-0"
              style={{ width: `${100 / visibleCards}%` }}
              key={i}
            >
              <AddCard {...dat} onClick={() => handleAdd(dat)} />
            </div>
          ))}
        </div>
      </div>

      {/* Border divider */}
      <div className="bg-gray-100 p-2 w-full mb-[20px]"></div>

      {/* Recommended Picks */}
      <div>
        <div className="text-[18px] sm:text-[16px] font-bold text-[#202020] mx-2">
          Recommended (10)
        </div>

        <div>
          {recommended.map((rec, i) => {
            return (
              <RecommendedCard
                {...rec}
                key={i}
                onClick={() => handleAddRec(rec)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const Star = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      role="img"
      aria-hidden="true"
      strokecolor="rgba(2, 6, 12, 0.92)"
      fillcolor="rgba(2, 6, 12, 0.92)"
    >
      <circle
        cx="10"
        cy="10"
        r="9"
        fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
      ></circle>
      <path
        d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
        fill="white"
      ></path>
      <defs>
        <linearGradient
          id="StoreRating20_svg__paint0_linear_32982_71567"
          x1="10"
          y1="1"
          x2="10"
          y2="19"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#21973B"></stop>
          <stop offset="1" stopColor="#128540"></stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default TopResOrderFood;
