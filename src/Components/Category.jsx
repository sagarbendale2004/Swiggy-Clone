import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories] = useState([]);

  const fetchCategory = async () => {
    try {
      const res = await fetch(
        "https://myswiggyapi-production.up.railway.app/categories"
      );
      const data = await res.json();
      setCategories(data);
    } catch (error) {
      console.log("error in FetchCategory", error);
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (categories.length - 8 == slide) return false;
    setSlide(slide + 3);
  };

  const prevSlide = () => {
    if (slide == 0) return false;
    setSlide(slide - 3);
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between">
        <div className="text-[22px] font-bold text-[#202020] mx-2">
          What's on your mind?
        </div>
        <div className="flex">
          <div className="cursor-pointer w-[30px] h-[30px] bg-[#cbcbcb] rounded-full mx-2 flex items-center justify-center">
            <FaArrowLeft style={{ color: "#414141" }} onClick={prevSlide} />
          </div>
          <div className="cursor-pointer w-[30px] h-[30px] bg-[#cbcbcb] rounded-full mx-2 flex items-center justify-center">
            <FaArrowRight style={{ color: "#414141" }} onClick={nextSlide} />
          </div>
        </div>
      </div>

      <div className="flex overflow-hidden py-2 border-gray-200 border-b-2">
        {categories.map((category, index) => {
          return (
            <div
              key={index}
              className="w-[130px] md:w-[150px] shrink-0 flex-grow cursor-pointer duration-500"
              style={{ transform: `translateX(-${slide * 100}%)` }}
            >
              <img
                src={
                  "https://myswiggyapi-production.up.railway.app/images/" +
                  category.image
                }
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Category;
