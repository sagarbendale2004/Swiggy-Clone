import React from "react";

function Signup({ switchToLogin }) {
  return (
    <div className="flex flex-col w-full max-w-[350px] mt-6 md:px-4 sm:px-0 mx-auto">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h1 className="text-[24px] sm:text-[28px] font-semibold">Signup</h1>
          <p className="text-[12px] sm:text-[14px] font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="text-[#FF5200] font-medium"
              onClick={switchToLogin}
            >
              Log In
            </a>
          </p>
          <div className="h-[1px] w-[32px] mt-2 bg-black"></div>
        </div>

        {/* Image Section */}
        <div>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
            width="80"
            height="85"
            className="sm:w-[100px] sm:h-[105px]" // Responsive size
            alt="img renderer"
          />
        </div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col">
        <input
          type="text"
          placeholder="Phone Number"
          className="p-3 sm:p-4 w-full text-[#685b78] border border-gray-300 outline-none mt-6 font-medium"
        />
        <input
          type="text"
          placeholder="Name"
          className="p-3 sm:p-4 w-full text-[#685b78] border border-gray-300 outline-none mt-4 font-medium mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          className="p-3 sm:p-4 w-full text-[#685b78] border border-gray-300 outline-none font-medium mb-4"
        />

        <button className="bg-[#FF5200] p-[12px] sm:p-[14px] w-full text-white font-bold text-[12px] sm:text-[14px] tracking-tight">
          SIGNUP
        </button>

        <p className="text-[10px] sm:text-[12px] pt-[4px]">
          By clicking on Signup, I accept the Terms & Conditions & Privacy
          Policy
        </p>
      </div>
    </div>
  );
}

export default Signup;
