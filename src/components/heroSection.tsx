const HeroSection = () => {
  return (
    <div className="z-10 flex flex-col items-center justify-center px-4 text-center">
      <p className="text-base font-normal uppercase leading-[26px] text-[rgba(124,124,124,1)] md:text-lg">
        Unified Product, Simplified Transection
      </p>
      <div className="text-5xl font-extrabold uppercase md:text-5xl xl:text-[70px] xl:leading-[84px]">
        Free your Money with digital Blockchain / DHL Bank
      </div>
      <div className="mt-3 text-base font-normal leading-[26px] text-[rgba(255,255,255,0.8)] xl:w-[886px] xl:text-lg">
        DIGI-KOEIN is a cryptocurrency, It’s developed by Green Sked, led by
        financial experts, to transform the financial industry and enhance
        people's lives using Blockchain technology.
      </div>
      <div className="bottom-4 flex flex-col items-center gap-8 lg:gap-24">
        <button className="mt-8 rounded-lg bg-gradient-to-r from-[rgba(252,214,78,1)] to-[rgba(237,143,7,1)] p-2 text-base font-medium lg:px-8 lg:py-4 lg:text-lg">
          Learn More
        </button>
        <div className="flex flex-col items-center gap-2 md:gap-[18px]">
          <div className="relative cursor-pointer">
            <svg
              width="42"
              height="65"
              viewBox="0 0 42 65"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="41"
                height="64"
                rx="20.5"
                stroke="white"
              />
            </svg>
            <svg
              className="absolute left-3 top-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8" cy="8" r="8" fill="white" />
            </svg>
          </div>
          <div>Scroll Down</div>
          <div>
            <svg
              width="8"
              height="28"
              viewBox="0 0 8 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 27.3536C3.84171 27.5488 4.15829 27.5488 4.35355 27.3536L7.53553 24.1716C7.7308 23.9763 7.7308 23.6597 7.53553 23.4645C7.34027 23.2692 7.02369 23.2692 6.82843 23.4645L4 26.2929L1.17157 23.4645C0.97631 23.2692 0.659727 23.2692 0.464465 23.4645C0.269203 23.6597 0.269203 23.9763 0.464465 24.1716L3.64645 27.3536ZM3.5 -2.18557e-08L3.5 27L4.5 27L4.5 2.18557e-08L3.5 -2.18557e-08Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
