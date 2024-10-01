import vector1 from "../assets/vector1.png";
import vector2 from "../assets/vector2.png";
import vector3 from "../assets/vector3.png";
import vector4 from "../assets/vector4.png";
import vector5 from "../assets/vector5.png";
import vector6 from "../assets/vector6.png";
import vector7 from "../assets/vector7.png";
import vector8 from "../assets/vector8.png";
import vector9 from "../assets/vector9.png";
import vector10 from "../assets/vector10.png";
const Home = () => {
  return (
    <div className="bg-hero-section inter relative h-screen">
      <div className="z-0">
        <div className="absolute left-[143px] top-[273px]">
          <img src={vector1} alt="" />
        </div>
        <div className="absolute left-[209px] top-[272px]">
          <img src={vector2} alt="" />
        </div>
        <div className="absolute bottom-[305px] left-[69px]">
          <img src={vector3} alt="" />
        </div>
        <div className="absolute bottom-[363px] left-[376px]">
          <img src={vector4} alt="" />
        </div>
        <div className="absolute bottom-[66px] left-[297px]">
          <img src={vector5} alt="" />
        </div>
        <div className="absolute right-[482px] top-[176px]">
          <img src={vector6} alt="" />
        </div>
        <div className="absolute right-[411px] top-[395px]">
          <img src={vector7} alt="" />
        </div>
        <div className="absolute bottom-[279px] right-[164px]">
          <img src={vector8} alt="" />
        </div>
        <div className="absolute bottom-[359px] right-[164px]">
          <img src={vector9} alt="" />
        </div>
        <div className="absolute bottom-[14px] right-[584px]">
          <img src={vector10} alt="" />
        </div>
      </div>
      <div className="flex h-screen items-center justify-center text-white">
        <div className="z-10 flex flex-col items-center justify-center px-4 text-center">
          <p className="text-base font-normal uppercase leading-[26px] text-[rgba(124,124,124,1)] md:text-lg">
            Unified Product, Simplified Transection
          </p>
          <div className="text-5xl font-extrabold uppercase md:text-5xl xl:text-[70px]">
            Free your Money with digital <br /> Blockchain / DHL Bank
          </div>
          <div className="mt-3 text-base font-normal leading-[26px] text-[rgba(255,255,255,0.8)] xl:w-[886px] xl:text-lg">
            DIGI-KOEIN is a cryptocurrency, It’s developed by Green Sked, led by
            financial experts, to transform the financial industry and enhance
            people's lives using Blockchain technology.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
