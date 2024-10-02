const WhatIsDigikoein = () => {
  return (
    <>
      <div
        id="what-is-digi"
        className="bg-what-dgk-bg relative flex h-screen w-full bg-cover bg-no-repeat"
      >
        <div className="absolute right-0 top-0 text-white">
          <img src="/src/assets/gradiantImg.png" alt="" />
        </div>
        <div className="absolute bottom-0 right-0 text-white">
          <img src="/src/assets/gradiantRed.png" alt="" />
        </div>
        <div className="right-48 top-36 my-10 flex max-w-3xl flex-col gap-4 px-4 text-justify text-white lg:absolute lg:text-start">
          <h1 className="mb-6 text-center text-3xl font-bold md:text-6xl lg:text-start">
            What is Digikoein?
          </h1>
          <p className="text-base font-normal leading-7 md:text-lg">
            DIGI KOEIN is created and developed by a group of the financial
            experts under the company of Green Shark Limited to prompt a
            technological innovation and to positively alter the financial
            industry practice and the life of people. The ways to use “Money”
            are below observed and divided into three categories: 1) Fund
            Transfer; 2) Payment and 3) Currency Exchanges. <br /> <br />{" "}
            However, the industry practice currently adopted, to some extent,
            hinders a full-fledged technological and economic growth in terms of
            the usage of Money. The global and independent platform created
            through DIGI KOEIN Blockchain/Distributed Ledger Technology shall
            get the divided ways of “Money” usage bundled and integrated to
            remove the current intermediaries, and to offer the alternative
            solutions. <br /> <br /> The technology shall ultimately expand its
            horizon to be used in a variety of financial services including
            credits and loans, trade finance, and others. At this stage, it is
            certain that the market recognition and brand name of DIGI KOEIN
            will be explosively heightened.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="rounded-lg bg-gradient-to-r from-[rgba(252,214,78,1)] to-[rgba(237,143,7,1)] px-6 py-3 text-lg font-medium text-white hover:bg-yellow-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatIsDigikoein;
