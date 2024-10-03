import Logo from "../assets/dgLogo.png";
import Menu from "../assets/menuIcon.svg";

const Navbar = () => {
  return (
    <div className="sticky z-50 flex h-[124px] items-center bg-[rgba(0,5,27,0.1)] text-white">
      <div className="mx-auto flex w-full justify-between px-4 pb-[26px] pt-[50px] xl:mx-60 xl:px-0">
        <div className="flex items-center gap-7">
          <a href="/#" className="flex cursor-pointer items-center gap-[6px]">
            <img src={Logo} alt="Logo" className="object-cover" />

            <div className="whitespace-nowrap text-xl font-bold xl:text-[25px]">
              DIGI KOEIN
            </div>
          </a>
          <div className="hidden border-l-[2px] border-[rgba(84,84,84,1)] px-5 py-3 lg:block">
            <div className="flex items-center gap-10 whitespace-nowrap text-lg font-normal text-[rgba(175,175,175,1)]">
              <a href="/#" className="cursor-pointer">
                Home
              </a>
              <a href="#what-we-do" className="cursor-pointer">
                What we do
              </a>
              <a href="#what-is-digi" className="cursor-pointer">
                What is Digikoein?
              </a>
              <a href="#" className="cursor-pointer">
                Remittance
              </a>
              <a href="#" className="cursor-pointer">
                About
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="mt-1 flex items-center gap-2 rounded-lg bg-white/15 p-2 lg:px-[19px] lg:py-[10px]">
            <div className="text-wihte text-sm font-normal lg:text-lg">
              English
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M12 16L6 10H18L12 16Z" fill="white" />
            </svg>
          </button>
          <div className="block lg:hidden">
            <img
              src={Menu}
              alt=""
              className="size-10 cursor-pointer text-yellow-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
