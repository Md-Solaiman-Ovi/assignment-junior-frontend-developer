import offerImg1 from "../assets/offerGradient1.png";
import offerImg2 from "../assets/offerGradient2.png";
import offerImg3 from "../assets/offerGradient3.png";
import WhatWeDoCard from "./whatWeDoCard";

const WhatWeDoOffer = () => {
  return (
    <div>
      <div className="relative flex h-full w-full justify-center bg-[rgba(0,5,27,1)] bg-cover bg-no-repeat xl:h-[713px]">
        <div className="absolute left-0 z-10 text-white">
          <img src={offerImg1} alt="" />
        </div>
        <div className="absolute top-0 z-10 text-white">
          <img src={offerImg2} alt="" />
        </div>
        <div className="absolute right-0 z-10 text-white">
          <img src={offerImg3} alt="" />
        </div>
        <div className="z-30 my-[100px] flex h-full w-full flex-col gap-4 px-4 text-white lg:text-start xl:absolute xl:h-[713px]">
          <h1 className="mb-6 text-center text-3xl font-semibold md:text-[40px] lg:text-start">
            What Do We Offer
          </h1>
          <div className="grid grid-cols-3">
            <WhatWeDoCard img={""} title={""} desc={""} />
            <WhatWeDoCard img={""} title={""} desc={""} />
            <WhatWeDoCard img={""} title={""} desc={""} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoOffer;
