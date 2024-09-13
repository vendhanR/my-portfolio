import React, { useEffect } from "react";
import Navbar from "./Navbar";
import vendhan from "../assets/vendhan.png";
import file from "../assets/file.png";
import file1 from "../assets/file1.png";
import { motion } from "framer-motion";
import { GiHeraldicSun } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";
import { drobDown, slideFromLeft, slideFromRight, slidUp } from "../animation";
import { FaLinkedinIn } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";

const Home = ({ isDark, setIsDark }) => {
  return (
    <div
      className={`${
        isDark ? "bg-[#101010] text-white" : "bg-[#fafafa] text-black"
      } h-[100vh] flex flex-col justify-center w-full  px-4 lg:px-10 2xl:px-20 `}
    >
      <button
        className={`text-3xl  fixed right-4 top-2 ${
          isDark && "text-yellow-300 "
        }`}
        onClick={() => setIsDark(!isDark)}
      >
        {isDark ? <GiHeraldicSun /> : <MdDarkMode />}
      </button>
      <div className="flex flex-col sm:flex-row-reverse  justify-evenly  items-center ">
        <motion.img
          className="w-96 h-96 sm:w-[36rem] sm:h-[36rem] object-cover"
          src={file1}
          alt="my photo"
          {...slidUp}
        />
        <motion.div className="py-5 max-w-96 flex flex-col gap-5" {...slidUp}>
          <p className="text-2xl font-semibold blur-out-contract-bck ">
            <span className="text-3xl" role="img" aria-label="wave emoji">
              👋
            </span>
            Hi, I'm Vendhan!
          </p>

          <p className="ml-3">
            I'm a Web Developer, currently looking for my next developer
            opportunity.{" "}
          </p>
          <div className="flex gap-2 ml-3">
            <button
              className={`text-2xl  p-1 rounded-xl  bg-blue-600 text-white duration-500 hover:scale-[1.1] ${
                isDark && " "
              }`}
            >
              <FaLinkedinIn />
            </button>
            <button
              className={`text-2xl  p-1 rounded-xl   bg-gray-200 text-black duration-500 hover:scale-[1.1] ${
                isDark && ""
              }`}
            >
              <FiGithub />
            </button>
            <button
              className={`text-2xl  p-1 rounded-xl  bg-red-600 text-white duration-500 hover:scale-[1.1]  ${
                isDark && " "
              }`}
            >
              <IoMailOutline />
            </button>
          </div>
        </motion.div>
      </div>
      {/* social links */}
    </div>
  );
};

export default Home;
