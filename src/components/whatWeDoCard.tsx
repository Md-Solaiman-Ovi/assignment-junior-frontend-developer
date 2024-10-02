interface WhatWeDoCardProps {
  img: string;
  title: string;
  desc: string;
}
const WhatWeDoCard = ({ img, title, desc }: WhatWeDoCardProps) => {
  return (
    <div className="flex flex-col gap-7 rounded-lg bg-[rgba(61,49,79,0.38)] p-4 shadow-lg">
      <div className="">
        <img
          src={img}
          alt="Trade Finance Icon"
          className="size-16 rounded-[10px] bg-[rgba(82,84,118,1)] p-[14px]"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-base font-normal leading-7 text-[rgba(207,207,207,1)]">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default WhatWeDoCard;
