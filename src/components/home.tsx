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
import Navbar from "./navbar";
import HeroSection from "./heroSection";
import heroGradient1 from "../assets/heroGradient1.png";
import heroGradient2 from "../assets/heroGradient2.png";
import heroGradient3 from "../assets/heroGradient3.png";
import heroGradient4 from "../assets/heroGradient4.png";

const Home = () => {
  return (
    <div className="inter relative h-screen w-full bg-[rgba(17,14,50,1)] bg-cover bg-no-repeat">
      <Navbar />
      <div className="z-0">
        <div className="absolute bottom-0 left-0 text-white">
          <img src={heroGradient1} alt="" />
        </div>
        <div className="absolute left-0 top-0 text-white">
          <img src={heroGradient2} alt="" />
        </div>
        <div className="absolute right-20 top-0 text-white">
          <img src={heroGradient3} alt="" />
        </div>
        <div className="absolute bottom-0 right-0 text-white">
          <img src={heroGradient4} alt="" />
        </div>
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
      <div className="container mx-auto mt-20 flex justify-center text-white md:mt-44">
        <HeroSection />
      </div>
    </div>
  );
};

export default Home;
