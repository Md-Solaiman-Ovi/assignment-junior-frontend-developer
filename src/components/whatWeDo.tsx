import WhatWeDoCard from "./whatWeDoCard";
import Img1 from "../assets/whatWeDoImg1.png";
// import Img2 from "../assets/whatWeDoImg2.png";
// import Img3 from "../assets/whatWeDoImg3.png";
const WhatWeDo = () => {
  return (
    <div className="relative flex h-[500px] items-center bg-[rgba(0,5,27,1)]">
      <div className="absolute bottom-0 left-0 top-0 text-white">
        <img src="/src/assets/whatWeDoGradient1.png" alt="" />
      </div>
      <div className="absolute bottom-0 right-0 text-white">
        <img src="/src/assets/whatWeDoGradient2.png" alt="" />
      </div>
      <div className="absolute flex size-full">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 px-4 text-white xl:flex-row xl:gap-20 2xl:ml-60 2xl:px-0">
          <div className="flex flex-col text-start xl:w-5/12">
            <h2 className="mb-4 text-5xl font-bold">
              What We Do With Blockchain DLT/ Bank
            </h2>
            <p className="mb-8 w-4/5 text-lg font-normal leading-7">
              Join a first-growing community of developers and innovators
              connected all over the world, building the new era of the
              internet.
            </p>
            <div className="flex space-x-4">
              <button className="rounded-lg bg-white/35 p-3 text-white shadow-lg">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.25 22.75L3.5 14M3.5 14L12.25 5.25M3.5 14H24.5"
                    stroke="#F8C100"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
              <button className="rounded-lg bg-white/35 p-3 text-white shadow-lg">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.75 5.25L24.5 14M24.5 14L15.75 22.75M24.5 14L3.5 14"
                    stroke="#F8C100"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:w-7/12 xl:grid-cols-3">
            <WhatWeDoCard
              img={Img1}
              title={"Trade Finance"}
              desc={
                "We offer green financing to help sellers, buyers, and financial institutions facilitate trade as well as create an atmosphere for non-conventional players"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
