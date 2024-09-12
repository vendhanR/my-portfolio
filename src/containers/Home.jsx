import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import vendhan from "../assets/vendhan.png";
import Projects from "./Projects";
import Cantact from "./Cantact";
import AbouteMe from "./AbouteMe";
import { useState } from "react";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { GiHeraldicSun } from "react-icons/gi";
import { MdDarkMode } from "react-icons/md";

const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();

    function ref(time) {
      lenis.raf(time);
      requestAnimationFrame(ref);
    }
    requestAnimationFrame(ref);
  }, []);
  return (
    <div
      className={`${
        isDark ? "bg-[#0f1624] text-white" : "bg-[#fafafa] text-black"
      }`}
    >
      <div
        className={`${
          isDark ? "bg-[#101010] text-white" : "bg-[#fafafa] text-black"
        } h-[100vh] flex flex-col  justify-around w-full`}
      >
        <Navbar />
        <button
          className={`${
            isDark
              ? "text-yellow-300 text-3xl" 
              : "  text-3xl"
          }
          fixed right-4 top-4`}
          onClick={() => setIsDark(!isDark)}
        >
          {isDark ? <GiHeraldicSun/> : <MdDarkMode/>}
        </button>
        <div className="flex flex-col sm:flex-row-reverse  justify-evenly  items-center ">
          <motion.img
            className="w-72 h-72 sm:w-60 sm:h-60 object-cover"
            src={vendhan}
            alt="my photo"
            initial={{ x: 130, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="py-5 max-w-96 flex flex-col "
            initial={{ x: -130, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <p className="text-2xl font-semibold blur-out-contract-bck">
              <span className="text-3xl" role="img" aria-label="wave emoji">👋</span>Hi, I'm Vendhan!
            </p>

            <p>
              I'm a Web Developer, currently looking for my developer
              opportunity.{" "}
            </p>
          </motion.div>
        </div>
        {/* social links */}
        <motion.div
          className="flex justify-center"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <a className="mx-3" href="#">
            linkedIn
          </a>
          <a className="mx-3" href="#">
            whatsApp
          </a>
          <a className="mx-3" href="#">
            Githup
          </a>
        </motion.div>
      </div>
      <AbouteMe isDark={isDark} />
      <Projects isDark={isDark} />
      <Cantact isDark={isDark} />
    </div>
  );
};

export default Home;
