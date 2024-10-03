import offerImg1 from "../assets/offerGradient1.png";
import offerImg2 from "../assets/offerGradient2.png";
import OfferCard from "./offerCard";
// import WhatWeDoCard from "./whatWeDoCard";
import offerImg3 from "../assets/offerGradient3.png";
import offericon1 from "../assets/offerIcon1.png";
import offericon2 from "../assets/offerIcon2.png";
import offericon3 from "../assets/offerIcon3.png";
// import WhatWeDoCard from "./whatWeDoCard";

const WhatWeDoOffer = () => {
  return (
    <div className="relative flex h-full w-full items-center bg-[rgba(0,5,27,1)] bg-cover bg-no-repeat xl:h-[713px]">
      <div className="absolute bottom-0 left-0 top-0 text-white">
        <img src={offerImg1} alt="" />
      </div>
      <div className="absolute top-0 text-white">
        <img src={offerImg2} alt="" />
      </div>
      <div className="absolute right-0 text-white">
        <img src={offerImg3} alt="" />
      </div>
      <div className="flex w-full flex-col gap-4 text-white lg:text-start">
        <div className="my-[100px] flex flex-col gap-5 px-4 2xl:mx-60 2xl:px-0">
          <h1 className="mb-6 text-center text-3xl font-semibold md:text-[40px]">
            What Do We Offer
          </h1>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="h-full">
              <div
                className={`relative flex h-[425px] flex-col gap-3 rounded-2xl bg-gradient-to-r from-[rgba(67,53,152,1)] to-[rgba(48,90,152,1)] p-8 shadow-lg`}
              >
                <div className="">
                  <img src={offericon1} alt="Icon" className="size-12" />
                </div>
                <div className="flex flex-col gap-3">
                  <h3 className="text-[25px] font-bold">Fund Transfer</h3>
                  <p className="text-lg font-normal leading-7 text-white">
                    Fund transfer, also known as remittance, involves moving
                    funds from one place to another. Traditionally, banks have
                    facilitated this process through domestic and international
                    banking networks like SWIFT. <br />
                    <br /> In recent years, remittance companies have emerged,
                    offering services under new regulations and using technology
                    such as mobile devices. However, these companies face
                    obstacles as they rely on the traditional banking
                    infrastructure, which restricts their ability to adopt
                    further technological advancements.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-4">
              <OfferCard img={offericon2} title={"Payment System"} desc={""} />
              <OfferCard
                img={offericon3}
                title={"Currency Exchange"}
                desc={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDoOffer;
