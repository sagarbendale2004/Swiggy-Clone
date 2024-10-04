import React from "react";
import { IoChevronDownSharp } from "react-icons/io5";

function Footer() {
  return (
    <footer className="bg-black w-full py-10 pb-[100px]">
      <div className="max-w-[1200px] w-full mx-auto px-4 flex flex-wrap justify-center gap-8">
        {/* Logo Section */}
        <div className="flex flex-col gap-3 items-start w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <svg
              className="VXJlj"
              viewBox="0 0 559 825"
              height="35"
              width="35"
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
            <span className="font-extrabold text-[26px] text-white">
              Swiggy
            </span>
          </div>
          <h4 className="text-gray-400 font-medium">
            © 2024 Bundl Technologies Pvt. Ltd
          </h4>
        </div>

        {/* Links Section */}
        <div className="w-full sm:w-auto flex justify-between flex-wrap gap-8">
          {/* Company Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-white text-[18px]">Company</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="#">About</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Careers</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Team</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Swiggy One</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Swiggy Instamart</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Swiggy Genie</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-white text-[18px]">Contact us</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="#">Help and Support</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Partner with us</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Ride with us</a>
              </li>
            </ul>
          </div>

          {/* Legal Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-white text-[18px]">Legal</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Cookie Policy</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Investor Relations</a>
              </li>
            </ul>
          </div>

          {/* Cities Section */}
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-white text-[18px]">
              We deliver to:
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <a href="#">Bangalore</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Gurgaon</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Hyderabad</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Delhi</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Mumbai</a>
              </li>
              <li className="text-gray-400">
                <a href="#">Pune</a>
              </li>
              <li className="text-gray-400">
                <a href="#">
                  <span className="flex items-center">
                    more <IoChevronDownSharp className="ml-1 mt-[3px]" />
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
