import React, { useState, useEffect, useRef } from "react";
import { RxCaretDown, RxCross2 } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { CiDiscount1 } from "react-icons/ci";
import { MdHelpOutline } from "react-icons/md";
import { BiUser, BiCurrentLocation } from "react-icons/bi";
import { BsCart } from "react-icons/bs";
import { PiClockCounterClockwiseFill } from "react-icons/pi";
import Login from "./Login"; // Assuming you have a Login component
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsThreeDotsVertical } from "react-icons/bs";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSignup, setToggleSignup] = useState(false);
  const [showNavLinks, setShowNavLinks] = useState(false); // Track mobile menu
  const [isLogin, setIsLogin] = useState(true); // Track if login or signup should show
  const navigate = useNavigate();
  const navRef = useRef(null);

  const items = useSelector((state) => state.cart.items);
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);

  // Show and hide side menu functions
  const showSideMenu = () => {
    setToggleMenu(!toggleMenu); // Toggle sidebar menu
    setMobileMenuOpen(false); // Ensure mobile menu is closed
    document.body.style.overflow = toggleMenu ? "auto" : "hidden";
  };

  const hideSideMenu = () => {
    setToggleMenu(false);
    document.body.style.overflow = "auto"; // Enable background scroll
  };

  // Show and hide signup sidebar functions
  const showSignup = () => {
    setToggleSignup(!toggleSignup);
    document.body.style.overflow = toggleSignup ? "auto" : "hidden";
  };

  const hideSignup = () => {
    setToggleSignup(false);
    document.body.style.overflow = "auto"; // Enable background scroll
  };

  const showSearch = () => {
    navigate("/Search");
  };

  const showOffers = () => {
    navigate("/Offers");
  };
  const showHelpSupport = () => {
    navigate("/HelpSupport");
  };
  const showCart = () => {
    navigate("/Cart");
  };

  // Switch between login and signup
  const switchToSignup = () => setIsLogin(false);
  const switchToLogin = () => setIsLogin(true);

  const links = [
    { icon: <IoIosSearch />, name: "Search", onClick: showSearch },
    { icon: <CiDiscount1 />, name: "Offers", sup: "New", onClick: showOffers },
    { icon: <MdHelpOutline />, name: "Help", onClick: showHelpSupport },
    { icon: <BiUser />, name: "Sign In", onClick: showSignup }, // Trigger signup sidebar
    {
      icon: <BsCart />,
      name: "Cart",
      sup: `${itemCount}`,
      onClick: showCart,
    },
  ];

  const HandleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setShowNavLinks(false); // Hide nav links if clicked outside
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Black overlay for sidebar */}
      <div
        className={`w-full h-full fixed duration-500 bg-black bg-opacity-50 z-[1000] ${
          toggleMenu ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={hideSideMenu} // Close sidebar when clicking outside
      >
        <div
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside sidebar
          className={`md:w-[500px] w-[275px] sm:w-[320px] bg-white h-full absolute duration-[400ms] z-[1001] flex flex-col items-center left-0 ${
            toggleMenu ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <span
            className="text-2xl text-[#685b78] mt-8 cursor-pointer"
            onClick={hideSideMenu}
          >
            <RxCross2 />
          </span>

          <input
            type="text"
            placeholder="Search for Area, Street Name.."
            className="p-4 w-[60%] sm:w-[80%] shadow-xl text-[#685b78] border border-gray-300 outline-none mt-8"
          />

          {/* Location & GPS */}
          <div className="p-8 sm:p-6 w-[60%] sm:w-[80%] shadow-xl text-[#685b78] border border-gray-300 my-8">
            <p>
              <span className="flex gap-2 items-center text-[16px] sm:text-[14px] text-[#2b2b2b] hover:text-[#fc8019]">
                <BiCurrentLocation className="text-[20px] sm:text-[18px]" /> Get
                Current Location
              </span>
            </p>
            <p className="text-[12px] sm:text-[10px] px-6">Using GPS</p>
          </div>

          {/* Default Location */}
          <div className="p-8 sm:p-6 w-[60%] sm:w-[80%] shadow-xl text-[#685b78] border border-gray-300">
            <p>
              <span className="flex gap-2 items-center text-[16px] sm:text-[14px] text-[#2b2b2b] hover:text-[#fc8019]">
                <PiClockCounterClockwiseFill className="text-[20px] sm:text-[18px]" />{" "}
                Jalgaon
              </span>
            </p>
            <p className="text-[12px] sm:text-[10px] px-6">
              Maharashtra, India
            </p>
          </div>
        </div>
      </div>

      {/* Black overlay for signup sidebar */}
      <div
        className={`w-full h-full fixed duration-500 bg-black bg-opacity-50 z-[1000] ${
          toggleSignup ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={hideSignup} // Close signup sidebar when clicking outside
      >
        <div
          onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside sidebar
          className={`md:w-[500px] w-[275px] sm:w-[320px] bg-white h-full absolute duration-[400ms] z-[1001] flex flex-col items-start px-12 right-0 ${
            toggleSignup ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <span
            className="text-2xl text-[#685b78] mt-8 cursor-pointer"
            onClick={hideSignup}
          >
            <RxCross2 />
          </span>

          {/* Conditionally render Login or Signup based on isLogin state */}
          {isLogin ? (
            <Login switchToSignup={switchToSignup} />
          ) : (
            <Signup switchToLogin={switchToLogin} />
          )}
        </div>
      </div>

      {/* Navbar Header */}
      <header className="p-[15px] shadow-xl mx-auto w-full text-[#685b78] sticky top-0 bg-white z-[999]">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="px-1 w-[75px]">
            <svg
              className="hover:scale-110"
              viewBox="0 0 559 825"
              height="49"
              width="34"
              fill="#ff5200"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M542.92 388.542C546.805 366.526 542.355 349.598 530.881 340.76C513.621 327.466 487.698 320.236 425.954 320.236C380.271 320.236 331.225 320.286 310.268 320.275C308.322 319.894 301.285 317.604 301.02 309.112L300.734 174.289C300.727 165.779 307.531 158.857 315.943 158.839C324.369 158.825 331.204 165.723 331.211 174.226C331.211 174.226 331.421 247.414 331.441 273.424C331.441 275.936 332.892 281.8 338.549 283.328C375.43 293.267 561.865 285.999 558.967 251.804C543.147 109.96 424.476 0 280.394 0C235.021 0 192.065 10.9162 154.026 30.2754C62.9934 77.5955 -1.65904 173.107 0.0324268 283.43C1.23215 361.622 52.2203 500.605 83.434 521.234C97.8202 530.749 116.765 527.228 201.484 527.228C239.903 527.228 275.679 527.355 293.26 527.436C295.087 527.782 304.671 530.001 304.671 538.907L304.894 641.393C304.915 649.907 298.104 656.826 289.678 656.829C281.266 656.843 274.434 649.953 274.42 641.446C274.42 641.446 275.17 600.322 275.17 584.985C275.17 581.435 275.424 575.339 265.178 570.727C231.432 555.553 121.849 564.712 115.701 581.457C113.347 587.899 125.599 612.801 144.459 644.731C170.102 685.624 211.889 747.245 245.601 792.625C261.047 813.417 268.77 823.813 280.467 824.101C292.165 824.389 300.514 814.236 317.213 793.928C383.012 713.909 516.552 537.663 542.92 388.542Z"
                fill="url(#paint0_linear_19447_66107)"
              ></path>
              <defs>
                <linearGradient
                  id="paint0_linear_19447_66107"
                  x1="445.629"
                  y1="63.8626"
                  x2="160.773"
                  y2="537.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FF993A"></stop>
                  <stop offset="1" stopColor="#FF5200"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* Location link */}
          <div
            className="text-[14px] flex items-center cursor-pointer"
            onClick={showSideMenu}
          >
            <span className="font-bold border-b-[2px] border-black text-[14px] text-[#363636] mr-2 hover:text-[#fc8019]">
              Other
            </span>
            Jalgaon, Maharashtra, India{" "}
            <RxCaretDown
              fontSize={25}
              className="inline text-[#fc8019] cursor-pointer"
            />
          </div>

          {/* Navbar links */}
          <nav
            ref={navRef}
            className={`${
              showNavLinks ? "flex flex-col" : "hidden md:flex"
            } list-none gap-3 md:gap-10 ml-auto text-[16px] font-semibold absolute md:relative top-[80px] md:top-[0px] left-0 md:right-0 w-[100%] md:w-[55%] bg-white md:bg-transparent shadow-md md:shadow-none z-10`}
          >
            {links.map((link, i) => (
              <li
                key={i}
                className="flex hover:text-[#fc8019] text-[#4c4c4c] text-[16px] items-center gap-2 justify-center cursor-pointer p-2"
                onClick={link.onClick || null}
              >
                <span className="text-[22px] hidden md:inline">
                  {link.icon}
                </span>{" "}
                {link.name}
                {link.sup && (
                  <sup className="text-[#fc8019] hidden md:inline">
                    {link.sup}
                  </sup>
                )}
              </li>
            ))}
          </nav>

          {/* Hamburger icon for mobile */}
          <div className="ml-auto md:hidden">
            <BsThreeDotsVertical
              fontSize={25}
              className="cursor-pointer text-[#685b78]"
              onClick={HandleNavLinks}
            />
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
