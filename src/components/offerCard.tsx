interface OfferCardProps {
  img: string;
  title: string;
  desc: string;
}
const OfferCard = ({ img, title, desc }: OfferCardProps) => {
  return (
    <div
      className={`relative flex h-[425px] flex-col gap-7 rounded-2xl bg-[rgba(236,175,175,0.05)] p-6 shadow-lg`}
    >
      <div className="">
        <img src={img} alt="Icon" className="size-12" />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-[30px] font-bold">{title}</h3>
        <p className="text-base font-normal leading-7 text-[rgba(207,207,207,1)]">
          {desc}
        </p>
      </div>
      <div className="absolute bottom-6 right-6">
        <button className="size-full rounded-full bg-[rgba(200,222,255,0.2)] p-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 5L20 20M20 20V8.75M20 20H8.75"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default OfferCard;
