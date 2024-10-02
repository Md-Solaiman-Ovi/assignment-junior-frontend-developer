import React from "react";
import Logo from "../assets/dgLogo.png";
const Footer: React.FC = () => {
  return (
    <footer className="flex h-full justify-center bg-[rgba(0,5,27,1)] py-8 text-gray-300 xl:h-[441px]">
      <div className="mx-auto flex flex-col items-center px-4 md:flex-row 2xl:mx-[240px]">
        {/* Left Section - Logo and Info */}
        <div className="mb-6 flex w-full flex-col gap-4 text-center md:mb-0 md:w-1/2 md:text-start">
          <div className="flex items-center justify-center md:justify-start">
            <img src={Logo} alt="Digi Koein Logo" className="mr-3 h-14 w-14" />
            <h1 className="text-[25px] font-bold">DIGI KOEIN</h1>
          </div>
          <p className="w-full text-sm leading-7 md:w-3/4 md:text-lg">
            DIGI KOEIN is embarking on a groundbreaking initiative to
            revolutionize the remittance and payment services sector by
            harnessing the power of blockchain technology.
          </p>
          <p className="text-sm font-normal md:mt-16 md:text-lg">
            DIGIKOEIN 2023 ©
          </p>
        </div>

        {/* Right Section - Links */}
        <div className="flex w-full flex-col space-y-4 md:w-1/2 md:flex-row md:space-x-8 md:space-y-0 xl:justify-between">
          {/* Legal Section */}
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-[22px] font-medium lg:mb-10">Legal</h2>
            <ul className="flex flex-col gap-0 md:gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Trademarks
                </a>
              </li>
            </ul>
          </div>

          {/* Sitemap Section */}
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-[22px] font-medium lg:mb-10">Sitemap</h2>
            <ul className="flex flex-col gap-0 md:gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  What is Digikoein?
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  What is DLT for Future Bank
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-[22px] font-medium lg:mb-10">About</h2>
            <ul className="flex flex-col gap-0 md:gap-3">
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Litepaper
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm font-normal hover:text-white md:text-lg"
                >
                  Github
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
