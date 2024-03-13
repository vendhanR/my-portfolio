import React from "react";
import Navbar from "../component/Navbar";
import vendhan from "../assets/vendhan.png";
import { HiArrowLongDown } from "react-icons/hi2";

const Home = () => {
  return (
    <main id="home">
      <Navbar />
      <div
        id="home"
        className="flex h-[90vh] justify-center items-center blue px-20 flex-col-reverse sm:flex-row relative gap-20"
      >
        <div className="absolute bg-white w-[30rem] h-[30rem] rounded-full z-0"></div>
        {/* left section */}
        <div className="z-10">
          <h1 className="font-bold text-6xl mb-4">Web developer</h1>
          <p>
            I'm <span className="font-medium">Vendhan</span>. A passionate
            ReactJS developer, <br />I have experience building real time
            applications.
          </p>
        </div>
    
        {/* right section */}
        <div className="flex justify-center items-center shrink-0 z-10">
          <div className="w-[30rem] h-12 bg-[#363636] -skew-x-[45deg] rotate-45 absolute z-0"></div>
          <div className="w-[30rem] h-12 bg-[#363636] skew-x-[45deg] -rotate-45 absolute z-0"></div>
          <img
            src={vendhan}
            alt="profile-photo"
            className="w-80 z-10 drop-shadow-2xl"
          />
        </div>
        <p
          className="absolute bottom-10 right-5 text-xs uppercase flex"
          style={{
            writingMode: "vertical-rl",
            textOrientation: "mixed",
            fontFamily: "roboto , sans-serif",
          }}
        >
          Scroll down
          <HiArrowLongDown className="pl-1 text-lg" />
        </p>
      </div>
    </main>
  );
};

export default Home;
